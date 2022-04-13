/**
 * @class DeleteTune
 * @classdesc Editor's default tune that moves up selected block
 *
 * @copyright <CodeX Team> 2018
 */
import { API, BlockTune } from "../../../types";
import $ from "../dom";

/**
 *
 */
export default class DeleteTune implements BlockTune {
  /**
   * Set Tool is Tune
   */
  public static readonly isTune = true;

  /**
   * Property that contains Editor.js API methods
   *
   * @see {@link docs/api.md}
   */
  private readonly api: API;

  /**
   * Styles
   */
  private CSS = {
    button: "ce-settings__button",
    buttonDelete: "ce-settings__button--delete",
  };

  /**
   * Tune nodes
   */
  private nodes: { button: HTMLElement } = {
    button: null,
  };

  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api }) {
    this.api = api;
  }

  /**
   * Create "Delete" button and add click event listener
   *
   * @returns {HTMLElement}
   */
  public render(): HTMLElement {
    this.nodes.button = $.make(
      "div",
      [this.CSS.button, this.CSS.buttonDelete],
      {}
    );
    this.nodes.button.appendChild($.svg("delete", 16, 16));
    this.api.listeners.on(
      this.nodes.button,
      "click",
      (event: MouseEvent) => this.handleClick(event),
      false
    );

    return this.nodes.button;
  }

  /**
   * Delete block conditions passed
   *
   * @param {MouseEvent} event - click event
   */
  public handleClick(event: MouseEvent): void {
    this.api.blocks.delete();
    this.api.toolbar.close();

    /**
     * Prevent firing ui~documentClicked that can drop currentBlock pointer
     */
    event.stopPropagation();
  }
}
