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

    switch (toolName) {
      case "paragraph":
        icon.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H6H11.5C11.7761 0.5 12 0.723858 12 1V2.5C12 2.77614 11.7761 3 11.5 3C11.2238 3 11 2.77614 11 2.5V1.5H6.5V10.5H8.11107C8.38721 10.5 8.61107 10.7239 8.61107 11C8.61107 11.2761 8.38721 11.5 8.11107 11.5H6H3.66663C3.39048 11.5 3.16663 11.2761 3.16663 11C3.16663 10.7239 3.39048 10.5 3.66663 10.5H5.5V1.5H1V2.5C1 2.77614 0.776142 3 0.5 3C0.223858 3 0 2.77614 0 2.5V1Z" />
        </svg>`;
        break;

      case "header1":
        icon.innerHTML = `<svg width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5V9.5C0 9.77614 0.223858 10 0.5 10C0.776142 10 1 9.77614 1 9.5V5.5H7V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V4.5H1V0.5ZM13 2.5C13 2.3156 12.8985 2.14617 12.7359 2.05916C12.5733 1.97215 12.3761 1.98169 12.2226 2.08398L10.7226 3.08398C10.4929 3.23715 10.4308 3.54759 10.584 3.77735C10.7371 4.00712 11.0476 4.0692 11.2773 3.91603L12 3.43426V9.5C12 9.77614 12.2239 10 12.5 10C12.7761 10 13 9.77614 13 9.5V2.5Z" /></svg>`;
        break;

      case "header2":
        icon.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5V9.5C0 9.77614 0.223858 10 0.5 10C0.776142 10 1 9.77614 1 9.5V5.5H7V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V4.5H1V0.5ZM11.5334 4.11564C11.7372 4.00803 11.9718 3.97417 12.1977 4.01976C12.4235 4.06535 12.6268 4.18761 12.773 4.36593C12.9192 4.54426 12.9994 4.76771 13 4.99847L13 4.9995C13.0009 5.19384 12.9438 5.38392 12.8361 5.54544L10.0998 9.20034C9.98629 9.35188 9.96815 9.55451 10.0529 9.7238C10.1376 9.89308 10.3107 10 10.5 10H13.5C13.7761 10 14 9.77614 14 9.5C14 9.22386 13.7761 9 13.5 9H11.499L13.644 6.13492C13.6484 6.12897 13.6528 6.12292 13.6569 6.11678C13.8821 5.78634 14.0017 5.39536 14 4.99551C13.9987 4.53462 13.8385 4.08826 13.5463 3.73187C13.2539 3.37535 12.8475 3.13075 12.3956 3.03953C11.9437 2.94831 11.4741 3.01608 11.0665 3.23136C10.6588 3.44663 10.338 3.79616 10.1583 4.22077C10.0507 4.47507 10.1696 4.76848 10.4239 4.8761C10.6782 4.98373 10.9716 4.86482 11.0792 4.61051C11.1691 4.39805 11.3296 4.22326 11.5334 4.11564Z" /></svg>`;
        break;

      case "header3":
        icon.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5V9.5C0 9.77614 0.223858 10 0.5 10C0.776142 10 1 9.77614 1 9.5V5.5H7V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V4.5H1V0.5ZM10.5 3C10.2239 3 10 3.22386 10 3.5C10 3.77614 10.2239 4 10.5 4H12.5397L11.3404 5.71327C11.2335 5.866 11.2204 6.06553 11.3065 6.23089C11.3926 6.39625 11.5635 6.49999 11.75 6.5C11.9555 6.50001 12.1579 6.55072 12.3392 6.64763C12.5205 6.74454 12.675 6.88466 12.7892 7.05558C12.9034 7.2265 12.9737 7.42294 12.9939 7.62751C13.014 7.83208 12.9834 8.03846 12.9047 8.22837C12.8261 8.41827 12.7018 8.58585 12.5429 8.71626C12.384 8.84666 12.1954 8.93587 11.9938 8.97598C11.7922 9.01608 11.5838 9.00585 11.3871 8.94619C11.1904 8.88652 11.0114 8.77927 10.866 8.63393C10.6708 8.43868 10.3542 8.43869 10.1589 8.63396C9.96368 8.82924 9.96369 9.14582 10.159 9.34107C10.4206 9.60269 10.7427 9.79574 11.0968 9.90314C11.4509 10.0105 11.826 10.0289 12.1889 9.95676C12.5518 9.88457 12.8913 9.724 13.1773 9.48927C13.4633 9.25454 13.687 8.9529 13.8286 8.61106C13.9702 8.26922 14.0253 7.89774 13.989 7.52952C13.9528 7.1613 13.8263 6.8077 13.6207 6.50004C13.4152 6.19239 13.1369 5.94017 12.8106 5.76574C12.7404 5.7282 12.6684 5.69451 12.595 5.66475L13.9096 3.78673C14.0165 3.634 14.0296 3.43446 13.9435 3.26909C13.8574 3.10373 13.6864 3 13.5 3H10.5Z" /></svg>`;
        break;

      case "unorderedList":
        icon.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.5C2 2.05228 1.55228 2.5 1 2.5C0.447715 2.5 0 2.05228 0 1.5C0 0.947715 0.447715 0.5 1 0.5C1.55228 0.5 2 0.947715 2 1.5ZM2 6C2 6.55228 1.55228 7 1 7C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5C1.55228 5 2 5.44772 2 6ZM1 11.5C1.55228 11.5 2 11.0523 2 10.5C2 9.94771 1.55228 9.5 1 9.5C0.447715 9.5 0 9.94771 0 10.5C0 11.0523 0.447715 11.5 1 11.5ZM4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H11.5C11.7761 2 12 1.77614 12 1.5C12 1.22386 11.7761 1 11.5 1H4.5ZM4 6C4 5.72386 4.22386 5.5 4.5 5.5H11.5C11.7761 5.5 12 5.72386 12 6C12 6.27614 11.7761 6.5 11.5 6.5H4.5C4.22386 6.5 4 6.27614 4 6ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H11.5C11.7761 11 12 10.7761 12 10.5C12 10.2239 11.7761 10 11.5 10H4.5Z" /></svg>`;
        break;

      case "orderedList":
        icon.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.74245 0.0626789C1.90143 0.150792 2.00007 0.318238 2.00007 0.5V4.5C2.00007 4.77614 1.77621 5 1.50007 5C1.22392 5 1.00007 4.77614 1.00007 4.5V1.40212L0.765066 1.549C0.530898 1.69535 0.222423 1.62417 0.0760678 1.39C-0.0702874 1.15583 0.000899193 0.847356 0.235067 0.701001L1.23507 0.0760011C1.3892 -0.0203329 1.58347 -0.0254338 1.74245 0.0626789ZM4 1.5C4 1.22386 4.22386 1 4.5 1H11.5C11.7761 1 12 1.22386 12 1.5C12 1.77614 11.7761 2 11.5 2H4.5C4.22386 2 4 1.77614 4 1.5ZM4 6C4 5.72386 4.22386 5.5 4.5 5.5H11.5C11.7761 5.5 12 5.72386 12 6C12 6.27614 11.7761 6.5 11.5 6.5H4.5C4.22386 6.5 4 6.27614 4 6ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H11.5C11.7761 11 12 10.7761 12 10.5C12 10.2239 11.7761 10 11.5 10H4.5ZM1.35604 8.02953C1.42178 8.00579 1.49179 7.9962 1.56149 8.00136C1.63119 8.00652 1.69902 8.02632 1.76056 8.05948C1.8221 8.09264 1.87595 8.1384 1.91861 8.19379C1.96126 8.24917 1.99176 8.31294 2.00811 8.38092C2.02388 8.44647 2.02614 8.51453 2.0148 8.58094C2.01397 8.58393 2.01228 8.58991 2.00939 8.59919C2.00337 8.61846 1.99479 8.64356 1.98437 8.6706C1.97388 8.69782 1.96284 8.72363 1.95229 8.74541C1.9471 8.75613 1.9426 8.76467 1.93898 8.77108C1.93556 8.77716 1.93378 8.77982 1.93378 8.77982C1.9232 8.79514 1.91348 8.81103 1.90467 8.82744L0.059498 11.2634C-0.0237152 11.4184 -0.0193906 11.6057 0.0708864 11.7566C0.161163 11.9076 0.324114 12 0.5 12H2.49421C2.77035 12 2.99421 11.7761 2.99421 11.5C2.99421 11.2239 2.77035 11 2.49421 11H1.33604L2.77479 9.32082C2.83921 9.22067 2.88712 9.10899 2.91752 9.0301C2.94992 8.94598 2.9828 8.84533 2.99656 8.7715C3.03512 8.56454 3.02962 8.35178 2.98039 8.14709C2.93117 7.94241 2.83933 7.7504 2.71088 7.58361C2.58242 7.41683 2.42024 7.279 2.23491 7.17914C2.04958 7.07928 1.84528 7.01963 1.63533 7.00409C1.42538 6.98854 1.21452 7.01745 1.0165 7.08893C0.818487 7.16041 0.637775 7.27285 0.486163 7.41891C0.33455 7.56496 0.215443 7.74135 0.136616 7.93656C0.0332176 8.19261 0.156969 8.484 0.413022 8.5874C0.669076 8.6908 0.960469 8.56705 1.06387 8.311C1.09005 8.24617 1.1296 8.18759 1.17995 8.13909C1.23029 8.09059 1.2903 8.05326 1.35604 8.02953Z" /></svg>`;
        break;

      case "blockChecklist":
        icon.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.86941 0.158694C4.05818 0.360241 4.04782 0.676654 3.84627 0.865422L2.01274 2.8229C1.82026 3.00318 1.52085 3.00297 1.32862 2.82241L0.157681 1.57218C-0.0435939 1.38312 -0.053497 1.0667 0.135562 0.865422C0.32462 0.664148 0.641048 0.654245 0.842322 0.843303L1.67144 1.77246L3.16268 0.135557C3.36423 -0.0532111 3.68064 -0.0428523 3.86941 0.158694ZM5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H11.5C11.7761 2 12 1.77614 12 1.5C12 1.22386 11.7761 1 11.5 1H5.5ZM5.5 5.5C5.22386 5.5 5 5.72386 5 6C5 6.27615 5.22386 6.5 5.5 6.5H11.5C11.7761 6.5 12 6.27615 12 6C12 5.72386 11.7761 5.5 11.5 5.5H5.5ZM5 10.5C5 10.2238 5.22386 9.99999 5.5 9.99999H11.5C11.7761 9.99999 12 10.2238 12 10.5C12 10.7761 11.7761 11 11.5 11H5.5C5.22386 11 5 10.7761 5 10.5ZM3.84627 5.36493C4.04782 5.17617 4.05818 4.85975 3.86941 4.65821C3.68064 4.45666 3.36423 4.4463 3.16268 4.63507L1.67144 6.27197L0.842322 5.34281C0.641048 5.15376 0.32462 5.16366 0.135562 5.36493C-0.053497 5.56621 -0.0435939 5.88264 0.157681 6.07169L1.32862 7.32192C1.52085 7.50248 1.82026 7.50269 2.01274 7.32241L3.84627 5.36493ZM3.84627 9.86542C4.04782 9.67665 4.05818 9.36024 3.86941 9.15869C3.68064 8.95715 3.36423 8.94679 3.16268 9.13556L1.67144 10.7725L0.842322 9.8433C0.641048 9.65424 0.32462 9.66415 0.135562 9.86542C-0.053497 10.0667 -0.0435939 10.3831 0.157681 10.5722L1.32862 11.8224C1.52085 12.003 1.82026 12.0032 2.01274 11.8229L3.84627 9.86542Z" /></svg>`;
        break;

      default:
        icon.innerHTML = toolIcon;
    }

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
