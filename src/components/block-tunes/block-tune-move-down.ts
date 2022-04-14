/**
 * @class MoveDownTune
 * @classdesc Editor's default tune - Moves down highlighted block
 *
 * @copyright <CodeX Team> 2018
 */

import $ from "../dom";
import { API, BlockTune } from "../../../types";

/**
 *
 */
export default class MoveDownTune implements BlockTune {
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
   *
   * @type {{wrapper: string}}
   */
  private CSS = {
    button: "ce-settings__button",
    wrapper: "ce-tune-move-down",
    iconContainer: "ce-settings__button-icon-container",
    buttonText: "ce-settings__button-text",
    animation: "wobble",
  };

  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api }) {
    this.api = api;
  }

  /**
   * Return 'move down' button
   *
   * @returns {HTMLElement}
   */
  public render(): HTMLElement {
    const moveDownButton = $.make(
      "div",
      [this.CSS.button, this.CSS.wrapper],
      {}
    );
    const moveDownButtonContainer = $.make("div", [this.CSS.iconContainer]);
    const moveDownText = $.make("span", [this.CSS.buttonText]);

    moveDownButtonContainer.appendChild($.svg("arrow-down", 12, 16));
    moveDownText.innerHTML = this.api.i18n.t("Move down");
    moveDownButton.appendChild(moveDownButtonContainer);
    moveDownButton.appendChild(moveDownText);

    this.api.listeners.on(
      moveDownButton,
      "click",
      (event) => this.handleClick(event as MouseEvent, moveDownButton),
      false
    );

    return moveDownButton;
  }

  /**
   * Handle clicks on 'move down' button
   *
   * @param {MouseEvent} event - click event
   * @param {HTMLElement} button - clicked button
   */
  public handleClick(event: MouseEvent, button: HTMLElement): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
    const nextBlock = this.api.blocks.getBlockByIndex(currentBlockIndex + 1);

    // If Block is last do nothing
    if (!nextBlock) {
      button.classList.add(this.CSS.animation);

      window.setTimeout(() => {
        button.classList.remove(this.CSS.animation);
      }, 500);

      return;
    }

    const nextBlockElement = nextBlock.holder;
    const nextBlockCoords = nextBlockElement.getBoundingClientRect();

    let scrollOffset = Math.abs(
      window.innerHeight - nextBlockElement.offsetHeight
    );

    /**
     * Next block ends on screen.
     * Increment scroll by next block's height to save element onscreen-position
     */
    if (nextBlockCoords.top < window.innerHeight) {
      scrollOffset = window.scrollY + nextBlockElement.offsetHeight;
    }

    window.scrollTo(0, scrollOffset);

    /** Change blocks positions */
    this.api.blocks.move(currentBlockIndex + 1);

    this.api.toolbar.toggleBlockSettings(true);
  }
}
