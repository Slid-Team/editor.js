/**
 * @class DeleteTune
 * @classdesc Editor's default tune that moves up selected block
 * @copyright <CodeX Team> 2018
 */
import { API, BlockTune, PopoverItem } from '../../../types';
// import { IconCross } from '@codexteam/icons';
const IconCross = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.5C5 1.22386 5.22386 1 5.5 1H10.5C10.7761 1 11 1.22386 11 1.5V3H5V1.5ZM4 3V1.5C4 0.671573 4.67157 0 5.5 0H10.5C11.3284 0 12 0.671573 12 1.5V3H13.5H15C15.2761 3 15.5 3.22386 15.5 3.5C15.5 3.77614 15.2761 4 15 4H14V14.5C14 15.3284 13.3284 16 12.5 16H3.5C2.67157 16 2 15.3284 2 14.5V4H1C0.723858 4 0.5 3.77614 0.5 3.5C0.5 3.22386 0.723858 3 1 3H2.5H4ZM11.5 4H4.5H3V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V4H11.5ZM6.5 6.5C6.77614 6.5 7 6.72386 7 7V12C7 12.2761 6.77614 12.5 6.5 12.5C6.22386 12.5 6 12.2761 6 12V7C6 6.72386 6.22386 6.5 6.5 6.5ZM10 7C10 6.72386 9.77614 6.5 9.5 6.5C9.22386 6.5 9 6.72386 9 7V12C9 12.2761 9.22386 12.5 9.5 12.5C9.77614 12.5 10 12.2761 10 12V7Z" />
</svg>`;

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
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api }) {
    this.api = api;
  }

  /**
   * Tune's appearance in block settings menu
   */
  public render(): PopoverItem {
    return {
      icon: IconCross,
      label: this.api.i18n.t('Delete'),
      name: 'delete',
      onActivate: (): void => this.handleClick(),
    };
  }

  /**
   * Delete block conditions passed
   */
  public handleClick(): void {
    this.api.blocks.delete();
  }
}
