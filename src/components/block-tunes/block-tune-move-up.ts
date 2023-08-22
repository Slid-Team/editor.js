/**
 * @class MoveUpTune
 * @classdesc Editor's default tune that moves up selected block
 * @copyright <CodeX Team> 2018
 */
import { API, BlockTune, PopoverItem } from "../../../types";
import Popover from "../../components/utils/popover";
import { TunesMenuConfig } from "../../../types/tools";
// import { IconChevronUp } from '@codexteam/icons';
const IconChevronUp = `<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 0.999924C6.31658 0.6094 5.68342 0.609401 5.29289 0.999924L0.146447 6.14637C-0.0488156 6.34163 -0.0488156 6.65822 0.146447 6.85348C0.341709 7.04874 0.658291 7.04874 0.853553 6.85348L5.5 2.20703V15C5.5 15.2761 5.72386 15.5 6 15.5C6.27614 15.5 6.5 15.2761 6.5 15V2.20703L11.1464 6.85348C11.3417 7.04874 11.6583 7.04874 11.8536 6.85348C12.0488 6.65822 12.0488 6.34163 11.8536 6.14637L6.70711 0.999924Z" fill="currentColor"/>
</svg>`;

/**
 *
 */
export default class MoveUpTune implements BlockTune {
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
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api }) {
    this.api = api;
  }

  /**
   * Tune's appearance in block settings menu
   */
  public render(): TunesMenuConfig {
    return {
      icon: IconChevronUp,
      title: this.api.i18n.t("Move up"),
      onActivate: (): void => this.handleClick(),
      name: "move-up",
    };
  }

  /**
   * Move current block up
   */
  public handleClick(): void {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
    const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);
    const previousBlock = this.api.blocks.getBlockByIndex(
      currentBlockIndex - 1
    );

    if (currentBlockIndex === 0 || !currentBlock || !previousBlock) {
      throw new Error("Unable to move Block up since it is already the first");
    }

    const currentBlockElement = currentBlock.holder;
    const previousBlockElement = previousBlock.holder;

    /**
     * Here is two cases:
     *  - when previous block has negative offset and part of it is visible on window, then we scroll
     *  by window's height and add offset which is mathematically difference between two blocks
     *
     *  - when previous block is visible and has offset from the window,
     *      than we scroll window to the difference between this offsets.
     */
    const currentBlockCoords = currentBlockElement.getBoundingClientRect(),
      previousBlockCoords = previousBlockElement.getBoundingClientRect();

    let scrollUpOffset;

    if (previousBlockCoords.top > 0) {
      scrollUpOffset =
        Math.abs(currentBlockCoords.top) - Math.abs(previousBlockCoords.top);
    } else {
      scrollUpOffset =
        Math.abs(currentBlockCoords.top) + previousBlockCoords.height;
    }

    window.scrollBy(0, -1 * scrollUpOffset);

    /** Change blocks positions */
    this.api.blocks.move(currentBlockIndex - 1);

    this.api.toolbar.toggleBlockSettings(true);
  }
}
