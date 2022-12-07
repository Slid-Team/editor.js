import { InlineTool, SanitizerConfig } from '../../../types';
// import { IconItalic } from '@codexteam/icons';
const IconItalic = `<svg width="11" height="14" viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.3125 0.4375C4.03636 0.4375 3.8125 0.661358 3.8125 0.9375C3.8125 1.21364 4.03636 1.4375 4.3125 1.4375H6.4649L3.37115 12.4375H0.9375C0.661358 12.4375 0.4375 12.6614 0.4375 12.9375C0.4375 13.2136 0.661358 13.4375 0.9375 13.4375H3.73424C3.74488 13.4378 3.75549 13.4378 3.76606 13.4375H6.5625C6.83864 13.4375 7.0625 13.2136 7.0625 12.9375C7.0625 12.6614 6.83864 12.4375 6.5625 12.4375H4.40994L7.50369 1.4375H9.9375C10.2136 1.4375 10.4375 1.21364 10.4375 0.9375C10.4375 0.661358 10.2136 0.4375 9.9375 0.4375H7.12462H4.3125Z" />
</svg>`;

/**
 * Italic Tool
 *
 * Inline Toolbar Tool
 *
 * Style selected text with italic
 */
export default class ItalicInlineTool implements InlineTool {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  public static isInline = true;

  /**
   * Title for hover-tooltip
   */
  public static title = 'Italic';

  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  public static get sanitize(): SanitizerConfig {
    return {
      i: {},
    } as SanitizerConfig;
  }

  /**
   * Native Document's command that uses for Italic
   */
  private readonly commandName: string = 'italic';

  /**
   * Styles
   */
  private readonly CSS = {
    button: 'ce-inline-tool',
    buttonActive: 'ce-inline-tool--active',
    buttonModifier: 'ce-inline-tool--italic',
  };

  /**
   * Elements
   */
  private nodes: { button: HTMLButtonElement } = {
    button: null,
  };

  /**
   * Create button for Inline Toolbar
   */
  public render(): HTMLElement {
    this.nodes.button = document.createElement('button') as HTMLButtonElement;
    this.nodes.button.type = 'button';
    this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
    this.nodes.button.innerHTML = IconItalic;

    return this.nodes.button;
  }

  /**
   * Wrap range with <i> tag
   */
  public surround(): void {
    document.execCommand(this.commandName);
  }

  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  public checkState(): boolean {
    const isActive = document.queryCommandState(this.commandName);

    this.nodes.button.classList.toggle(this.CSS.buttonActive, isActive);

    return isActive;
  }

  /**
   * Set a shortcut
   */
  public get shortcut(): string {
    return 'CMD+I';
  }
}
