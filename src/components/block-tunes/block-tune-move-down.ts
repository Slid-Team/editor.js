/**
 * @class MoveDownTune
 * @classdesc Editor's default tune - Moves down highlighted block
 * @copyright <CodeX Team> 2018
 */

import { API, BlockTune, PopoverItem } from "../../../types";
import Popover from "../utils/popover";
import { TunesMenuConfig } from "../../../types/tools";
// import { IconChevronDown } from '@codexteam/icons';
const IconChevronDown = `<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 15.2071C5.68342 15.5976 6.31658 15.5976 6.70711 15.2071L11.8536 10.0607C12.0488 9.8654 12.0488 9.54882 11.8536 9.35355C11.6583 9.15829 11.3417 9.15829 11.1464 9.35355L6.5 14L6.5 1.20703C6.5 0.930889 6.27614 0.707031 6 0.707031C5.72386 0.707031 5.5 0.930889 5.5 1.20703L5.5 14L0.853554 9.35355C0.658291 9.15829 0.34171 9.15829 0.146447 9.35355C-0.0488152 9.54881 -0.0488152 9.8654 0.146447 10.0607L5.29289 15.2071Z" fill="currentColor"/>
</svg>`;

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
   */
  private CSS = {
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
   * Tune's appearance in block settings menu
   */
  public render(): TunesMenuConfig {
    return {
      icon: IconChevronDown,
      title: this.api.i18n.t("Move down"),
      onActivate: (): void => this.handleClick(),
      name: "move-down",
    };
  }

  /**
   * Handle clicks on 'move down' button
   */
  public handleClick(): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
    const nextBlock = this.api.blocks.getBlockByIndex(currentBlockIndex + 1);

    // If Block is last do nothing
    if (!nextBlock) {
      throw new Error("Unable to move Block down since it is already the last");
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
