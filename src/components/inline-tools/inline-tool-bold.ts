import { InlineTool, SanitizerConfig } from '../../../types';
// import { IconBold } from '@codexteam/icons';
const IconBold = `<svg width="12" height="14" viewBox="0 0 12 14"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H6.9375C7.95201 0 8.92286 0.407321 9.63704 1.12901C10.3508 1.85033 10.75 2.82645 10.75 3.84208C10.75 4.71323 10.4563 5.5553 9.92233 6.23245C10.2393 6.41511 10.5334 6.64083 10.7955 6.90571C11.5679 7.68626 12 8.7427 12 9.84208C12 10.9415 11.5679 11.9979 10.7955 12.7784C10.0228 13.5593 8.97243 14 7.875 14H1C0.447715 14 0 13.5523 0 13V1ZM2 7.68421V12H7.875C8.43517 12 8.97456 11.7752 9.37391 11.3717C9.7736 10.9678 10 10.4178 10 9.84208C10 9.26641 9.7736 8.7164 9.37391 8.31251C8.97459 7.90898 8.43521 7.68421 7.875 7.68421H2ZM6.9375 5.68421H2V2H6.9375C7.41483 2 7.87472 2.1915 8.21544 2.5358C8.55653 2.88048 8.75 3.35016 8.75 3.84208C8.75 4.33399 8.55652 4.80368 8.21544 5.14836C7.87469 5.49269 7.41478 5.68421 6.9375 5.68421Z" />
</svg>`;

/**
 * Bold Tool
 *
 * Inline Toolbar Tool
 *
 * Makes selected text bolder
 */
export default class BoldInlineTool implements InlineTool {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  public static isInline = true;

  /**
   * Title for hover-tooltip
   */
  public static title = 'Bold';

  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  public static get sanitize(): SanitizerConfig {
    return {
      b: {},
    } as SanitizerConfig;
  }

  /**
   * Native Document's command that uses for Bold
   */
  private readonly commandName: string = 'bold';

  /**
   * Styles
   */
  private readonly CSS = {
    button: 'ce-inline-tool',
    buttonActive: 'ce-inline-tool--active',
    buttonModifier: 'ce-inline-tool--bold',
  };

  /**
   * Elements
   */
  private nodes: { button: HTMLButtonElement } = {
    button: undefined,
  };

  /**
   * Create button for Inline Toolbar
   */
  public render(): HTMLElement {
    this.nodes.button = document.createElement('button') as HTMLButtonElement;
    this.nodes.button.type = 'button';
    this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
    this.nodes.button.innerHTML = IconBold;

    return this.nodes.button;
  }

  /**
   * Wrap range with <b> tag
   */
  public surround(): void {
    document.execCommand(this.commandName);
  }

  /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */
  public checkState(): boolean {
    const isActive = document.queryCommandState(this.commandName);

    this.nodes.button.classList.toggle(this.CSS.buttonActive, isActive);

    return isActive;
  }

  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  public get shortcut(): string {
    return 'CMD+B';
  }
}
