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
    iconContainer: "ce-settings__button-icon-container",
    buttonText: "ce-settings__button-text",
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
    const deleteButton = $.make("div", [
      this.CSS.button,
      this.CSS.buttonDelete,
    ]);
    const deleteButtonContainer = $.make("div", [this.CSS.iconContainer]);
    const deleteButtonText = $.make("span", [this.CSS.buttonText]);

    deleteButtonContainer.appendChild($.svg("delete", 16, 16));
    deleteButtonText.innerHTML = this.api.i18n.t("Delete");
    deleteButton.appendChild(deleteButtonContainer);
    deleteButton.appendChild(deleteButtonText);

    this.api.listeners.on(
      deleteButton,
      "click",
      (event: MouseEvent) => this.handleClick(event),
      false
    );

    return deleteButton;
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
