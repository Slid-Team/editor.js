import Module from "../../__module";
import $ from "../../dom";
import * as _ from "../../utils";
import { SavedData } from "../../../../types/data-formats";
import Flipper from "../../flipper";
import I18n from "../../i18n";
import { I18nInternalNS } from "../../i18n/namespace-internal";
import { clean } from "../../utils/sanitizer";

/**
 * HTML Elements used for ConversionToolbar
 */
interface ConversionToolbarNodes {
  wrapper: HTMLElement;
  tools: HTMLElement;
}

/**
 * Block Converter
 *
 * @todo Make the Conversion Toolbar no-module but a standalone class, like Toolbox
 */
export default class ConversionToolbar extends Module<ConversionToolbarNodes> {
  /**
   * CSS getter
   */
  public static get CSS(): { [key: string]: string } {
    return {
      conversionToolbarWrapper: "ce-conversion-toolbar",
      conversionToolbarShowed: "ce-conversion-toolbar--showed",
      conversionToolbarTools: "ce-conversion-toolbar__tools",
      conversionToolbarLabel: "ce-conversion-toolbar__label",
      conversionTool: "ce-conversion-tool",
      conversionToolCurrent: "ce-conversion-tool--current",
      conversionToolIcon: "ce-conversion-tool__icon",
      conversionToolCheckIcon: "ce-conversion-tool__check-icon",

      conversionToolFocused: "ce-conversion-tool--focused",
      conversionToolActive: "ce-conversion-tool--active",
    };
  }

  /**
   * Conversion Toolbar open/close state
   *
   * @type {boolean}
   */
  public opened = false;

  /**
   * Available tools
   */
  private tools: { [key: string]: HTMLElement } = {};

  /**
   * Instance of class that responses for leafing buttons by arrows/tab
   *
   * @type {Flipper|null}
   */
  private flipper: Flipper = null;

  /**
   * Callback that fill be fired on open/close and accepts an opening state
   */
  private togglingCallback = null;

  /**
   * Create UI of Conversion Toolbar
   */
  public make(): HTMLElement {
    this.nodes.wrapper = $.make("div", [
      ConversionToolbar.CSS.conversionToolbarWrapper,
      ...(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []),
    ]);
    this.nodes.tools = $.make(
      "div",
      ConversionToolbar.CSS.conversionToolbarTools
    );

    const label = $.make("div", ConversionToolbar.CSS.conversionToolbarLabel, {
      textContent: I18n.ui(
        I18nInternalNS.ui.inlineToolbar.converter,
        "Convert to"
      ),
    });

    /**
     * Add Tools that has 'import' method
     */
    this.addTools();

    /**
     * Prepare Flipper to be able to leaf tools by arrows/tab
     */
    this.enableFlipper();

    $.append(this.nodes.wrapper, label);
    $.append(this.nodes.wrapper, this.nodes.tools);

    return this.nodes.wrapper;
  }

  /**
   * Deactivates flipper and removes all nodes
   */
  public destroy(): void {
    /**
     * Sometimes (in read-only mode) there is no Flipper
     */
    if (this.flipper) {
      this.flipper.deactivate();
      this.flipper = null;
    }

    this.removeAllNodes();
  }

  /**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */
  public toggle(togglingCallback?: (openedState: boolean) => void): void {
    if (!this.opened) {
      this.open();
    } else {
      this.close();
    }

    if (_.isFunction(togglingCallback)) {
      this.togglingCallback = togglingCallback;
    }
  }

  /**
   * Shows Conversion Toolbar
   */
  public open(): void {
    this.filterTools();

    this.opened = true;
    this.nodes.wrapper.classList.add(
      ConversionToolbar.CSS.conversionToolbarShowed
    );

    /**
     * We use timeout to prevent bubbling Enter keydown on first dropdown item
     * Conversion flipper will be activated after dropdown will open
     */
    setTimeout(() => {
      this.flipper.activate(Object.values(this.tools));
      this.flipper.focusFirst();

      if (_.isFunction(this.togglingCallback)) {
        this.togglingCallback(true);
      }
    }, 50);
  }

  /**
   * Closes Conversion Toolbar
   */
  public close(): void {
    this.opened = false;
    this.flipper.deactivate();
    this.nodes.wrapper.classList.remove(
      ConversionToolbar.CSS.conversionToolbarShowed
    );

    if (_.isFunction(this.togglingCallback)) {
      this.togglingCallback(false);
    }
  }

  /**
   * Returns true if it has more than one tool available for convert in
   */
  public hasTools(): boolean {
    const tools = Object.keys(this.tools); // available tools in array representation

    return !(tools.length === 1 && tools.shift() === this.config.defaultBlock);
  }

  /**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   */
  public async replaceWithBlock(replacingToolName: string): Promise<void> {
    /**
     * At first, we get current Block data
     *
     * @type {BlockToolConstructable}
     */
    const currentBlockTool = this.Editor.BlockManager.currentBlock.tool;
    const currentBlockName = this.Editor.BlockManager.currentBlock.name;
    const savedBlock =
      (await this.Editor.BlockManager.currentBlock.save()) as SavedData;
    const blockData = savedBlock.data;

    /**
     * When current Block name is equals to the replacing tool Name,
     * than convert this Block back to the default Block
     */
    if (currentBlockName === replacingToolName) {
      replacingToolName = this.config.defaultBlock;
    }

    /**
     * Getting a class of replacing Tool
     *
     * @type {BlockToolConstructable}
     */
    const replacingTool = this.Editor.Tools.blockTools.get(replacingToolName);

    /**
     * Export property can be:
     * 1) Function — Tool defines which data to return
     * 2) String — the name of saved property
     *
     * In both cases returning value must be a string
     */
    let exportData = "";
    const exportProp = currentBlockTool.conversionConfig.export;

    if (_.isFunction(exportProp)) {
      exportData = exportProp(blockData);
    } else if (_.isString(exportProp)) {
      exportData = blockData[exportProp];
    } else {
      _.log(
        "Conversion «export» property must be a string or function. " +
          "String means key of saved data object to export. Function should export processed string to export."
      );

      return;
    }

    /**
     * Clean exported data with replacing sanitizer config
     */
    const cleaned: string = clean(exportData, replacingTool.sanitizeConfig);

    /**
     * «import» property can be Function or String
     * function — accept imported string and compose tool data object
     * string — the name of data field to import
     */
    let newBlockData = {};
    const importProp = replacingTool.conversionConfig.import;

    if (_.isFunction(importProp)) {
      newBlockData = importProp(cleaned);
    } else if (_.isString(importProp)) {
      newBlockData[importProp] = cleaned;
    } else {
      _.log(
        "Conversion «import» property must be a string or function. " +
          "String means key of tool data to import. Function accepts a imported string and return composed tool data."
      );

      return;
    }

    this.Editor.BlockManager.replace({
      tool: replacingToolName,
      data: newBlockData,
    });
    this.Editor.BlockSelection.clearSelection();

    this.close();
    this.Editor.InlineToolbar.close();

    _.delay(() => {
      this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock);
    }, 10)();
  }

  /**
   * Iterates existing Tools and inserts to the ConversionToolbar
   * if tools have ability to import
   */
  private addTools(): void {
    const tools = this.Editor.Tools.blockTools;

    Array.from(tools.entries()).forEach(([name, tool]) => {
      const toolboxSettings = tool.toolbox;
      const conversionConfig = tool.conversionConfig;

      /**
       * Skip tools that don't pass 'toolbox' property
       */
      if (_.isEmpty(toolboxSettings) || !toolboxSettings.icon) {
        return;
      }

      /**
       * Skip tools without «import» rule specified
       */
      if (!conversionConfig || !conversionConfig.import) {
        return;
      }

      this.addTool(name, toolboxSettings.icon, toolboxSettings.title);
    });
  }

  /**
   * Add tool to the Conversion Toolbar
   *
   * @param {string} toolName - name of Tool to add
   * @param {string} toolIcon - Tool icon
   * @param {string} title - button title
   */
  private addTool(toolName: string, toolIcon: string, title: string): void {
    const tool = $.make("div", [ConversionToolbar.CSS.conversionTool]);
    const icon = $.make("div", [ConversionToolbar.CSS.conversionToolIcon]);
    const checkIcon = $.make("div", [
      ConversionToolbar.CSS.conversionToolCheckIcon,
    ]);

    tool.dataset.tool = toolName;
    icon.innerHTML =
      toolName === "header"
        ? `<svg width="10" height="12" viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5C0.776142 0.5 1 0.773604 1 1.11111V5.5H9V1.11111C9 0.773604 9.22386 0.5 9.5 0.5C9.77614 0.5 10 0.773604 10 1.11111V6V10.8889C10 11.2264 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2264 9 10.8889V6.5H1V10.8889C1 11.2264 0.776142 11.5 0.5 11.5C0.223858 11.5 0 11.2264 0 10.8889V6V1.11111C0 0.773604 0.223858 0.5 0.5 0.5Z" />
    </svg>
    `
        : toolName === "paragraph"
        ? `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H6H11.5C11.7761 0.5 12 0.723858 12 1V2.5C12 2.77614 11.7761 3 11.5 3C11.2238 3 11 2.77614 11 2.5V1.5H6.5V10.5H8.11107C8.38721 10.5 8.61107 10.7239 8.61107 11C8.61107 11.2761 8.38721 11.5 8.11107 11.5H6H3.66663C3.39048 11.5 3.16663 11.2761 3.16663 11C3.16663 10.7239 3.39048 10.5 3.66663 10.5H5.5V1.5H1V2.5C1 2.77614 0.776142 3 0.5 3C0.223858 3 0 2.77614 0 2.5V1Z" />
    </svg>`
        : toolIcon;

    checkIcon.innerHTML = `<svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1919 0.278013C11.5907 0.660142 11.6041 1.29316 11.222 1.69191L5.47199 7.69191C5.09491 8.08539 4.47219 8.10446 4.07172 7.73481L0.821725 4.7348C0.415904 4.3602 0.390598 3.72754 0.765202 3.32172C1.13981 2.9159 1.77246 2.89059 2.17829 3.2652L4.7071 5.59949L9.77802 0.308096C10.1601 -0.090647 10.7932 -0.104116 11.1919 0.278013Z" />
    </svg>`;

    $.append(tool, icon);
    $.append(
      tool,
      $.text(I18n.t(I18nInternalNS.toolNames, title || _.capitalize(toolName)))
    );
    $.append(tool, checkIcon);

    $.append(this.nodes.tools, tool);
    this.tools[toolName] = tool;

    this.listeners.on(tool, "click", async () => {
      await this.replaceWithBlock(toolName);
    });
  }

  /**
   * Get current tool button and add icon
   */
  private filterTools(): void {
    const { currentBlock } = this.Editor.BlockManager;

    Object.entries(this.tools).forEach(([name, button]) => {
      button.classList.toggle(
        ConversionToolbar.CSS.conversionToolCurrent,
        name === currentBlock.name
      );
    });
  }

  /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */
  private enableFlipper(): void {
    this.flipper = new Flipper({
      focusedItemClass: ConversionToolbar.CSS.conversionToolFocused,
    });
  }
}
