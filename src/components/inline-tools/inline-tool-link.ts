import SelectionUtils from '../selection';
import * as _ from '../utils';
import { InlineTool, SanitizerConfig, API } from '../../../types';
import { Notifier, Toolbar, I18n, InlineToolbar } from '../../../types/api';
// import { IconLink, IconUnlink } from '@codexteam/icons';
const IconLink = `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" stroke="currentColor" clip-rule="evenodd" d="M7.35302 3.30511L8.6548 1.95705C9.1144 1.52715 9.71219 1.29848 10.3249 1.31317C10.9412 1.32794 11.5319 1.58801 11.9731 2.04493C12.4149 2.50237 12.6722 3.12189 12.6868 3.77565C12.7014 4.42552 12.4748 5.0535 12.0583 5.5311L10.1943 7.45447L10.1931 7.45578C9.9688 7.6889 9.70323 7.8729 9.41209 7.99811C9.121 8.1233 8.80955 8.1875 8.49545 8.1875C8.18135 8.1875 7.8699 8.1233 7.57881 7.99811C7.28767 7.8729 7.0221 7.6889 6.79782 7.45578C6.60637 7.25678 6.28985 7.25066 6.09085 7.44211C5.89185 7.63356 5.88573 7.95009 6.07718 8.14909C6.39268 8.47703 6.76855 8.73821 7.18372 8.91676C7.59893 9.09533 8.04475 9.1875 8.49545 9.1875C8.94614 9.1875 9.39196 9.09533 9.80718 8.91676C10.2221 8.73833 10.5977 8.47737 10.9131 8.14974L10.9137 8.14909L12.7851 6.21802C12.7907 6.21228 12.7961 6.2064 12.8014 6.2004C13.3913 5.53016 13.7067 4.6536 13.6866 3.7533C13.6665 2.85297 13.3122 1.99203 12.6925 1.35027C12.0722 0.70799 11.2333 0.334658 10.3488 0.313455C9.46437 0.29225 8.60915 0.625022 7.96035 1.23739C7.95474 1.24269 7.94924 1.24812 7.94388 1.25368L6.63367 2.61045C6.44185 2.8091 6.44738 3.12563 6.64602 3.31745C6.84466 3.50928 7.16119 3.50375 7.35302 3.30511ZM4.58791 6.00189C4.879 5.8767 5.19045 5.8125 5.50455 5.8125C5.81865 5.8125 6.1301 5.8767 6.4212 6.00189C6.71233 6.1271 6.9779 6.3111 7.20218 6.54422C7.39363 6.74322 7.71015 6.74934 7.90915 6.55789C8.10815 6.36644 8.11427 6.04991 7.92282 5.85091C7.60732 5.52297 7.23145 5.26179 6.81628 5.08324C6.40107 4.90467 5.95525 4.8125 5.50455 4.8125C5.05386 4.8125 4.60804 4.90467 4.19282 5.08324C3.77794 5.26167 3.4023 5.52262 3.08693 5.85024L3.08628 5.85091L1.21488 7.78198C1.20932 7.78773 1.20389 7.7936 1.19861 7.7996C0.608683 8.46985 0.29328 9.3464 0.313407 10.2467C0.333536 11.147 0.687817 12.008 1.30754 12.6497C1.92778 13.292 2.76674 13.6653 3.65116 13.6865C4.53563 13.7078 5.39085 13.375 6.03965 12.7626C6.04526 12.7573 6.05076 12.7519 6.05612 12.7463L7.36633 11.3895C7.55815 11.1909 7.55262 10.8744 7.35398 10.6825C7.15534 10.4907 6.83881 10.4963 6.64698 10.6949L5.3452 12.0429C4.8856 12.4729 4.28781 12.7015 3.67513 12.6868C3.05881 12.6721 2.46812 12.412 2.02689 11.9551C1.58515 11.4976 1.32777 10.8781 1.31316 10.2244C1.29863 9.57448 1.52524 8.94649 1.94172 8.4689L3.80566 6.54553L3.80692 6.54422C4.0312 6.3111 4.29677 6.1271 4.58791 6.00189Z"/>
</svg>`;
const IconUnlink = `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" stroke="currentColor" clip-rule="evenodd" d="M7.35302 3.30511L8.6548 1.95705C9.1144 1.52715 9.71219 1.29848 10.3249 1.31317C10.9412 1.32794 11.5319 1.58801 11.9731 2.04493C12.4149 2.50237 12.6722 3.12189 12.6868 3.77565C12.7014 4.42552 12.4748 5.0535 12.0583 5.5311L10.1943 7.45447L10.1931 7.45578C9.9688 7.6889 9.70323 7.8729 9.41209 7.99811C9.121 8.1233 8.80955 8.1875 8.49545 8.1875C8.18135 8.1875 7.8699 8.1233 7.57881 7.99811C7.28767 7.8729 7.0221 7.6889 6.79782 7.45578C6.60637 7.25678 6.28985 7.25066 6.09085 7.44211C5.89185 7.63356 5.88573 7.95009 6.07718 8.14909C6.39268 8.47703 6.76855 8.73821 7.18372 8.91676C7.59893 9.09533 8.04475 9.1875 8.49545 9.1875C8.94614 9.1875 9.39196 9.09533 9.80718 8.91676C10.2221 8.73833 10.5977 8.47737 10.9131 8.14974L10.9137 8.14909L12.7851 6.21802C12.7907 6.21228 12.7961 6.2064 12.8014 6.2004C13.3913 5.53016 13.7067 4.6536 13.6866 3.7533C13.6665 2.85297 13.3122 1.99203 12.6925 1.35027C12.0722 0.70799 11.2333 0.334658 10.3488 0.313455C9.46437 0.29225 8.60915 0.625022 7.96035 1.23739C7.95474 1.24269 7.94924 1.24812 7.94388 1.25368L6.63367 2.61045C6.44185 2.8091 6.44738 3.12563 6.64602 3.31745C6.84466 3.50928 7.16119 3.50375 7.35302 3.30511ZM4.58791 6.00189C4.879 5.8767 5.19045 5.8125 5.50455 5.8125C5.81865 5.8125 6.1301 5.8767 6.4212 6.00189C6.71233 6.1271 6.9779 6.3111 7.20218 6.54422C7.39363 6.74322 7.71015 6.74934 7.90915 6.55789C8.10815 6.36644 8.11427 6.04991 7.92282 5.85091C7.60732 5.52297 7.23145 5.26179 6.81628 5.08324C6.40107 4.90467 5.95525 4.8125 5.50455 4.8125C5.05386 4.8125 4.60804 4.90467 4.19282 5.08324C3.77794 5.26167 3.4023 5.52262 3.08693 5.85024L3.08628 5.85091L1.21488 7.78198C1.20932 7.78773 1.20389 7.7936 1.19861 7.7996C0.608683 8.46985 0.29328 9.3464 0.313407 10.2467C0.333536 11.147 0.687817 12.008 1.30754 12.6497C1.92778 13.292 2.76674 13.6653 3.65116 13.6865C4.53563 13.7078 5.39085 13.375 6.03965 12.7626C6.04526 12.7573 6.05076 12.7519 6.05612 12.7463L7.36633 11.3895C7.55815 11.1909 7.55262 10.8744 7.35398 10.6825C7.15534 10.4907 6.83881 10.4963 6.64698 10.6949L5.3452 12.0429C4.8856 12.4729 4.28781 12.7015 3.67513 12.6868C3.05881 12.6721 2.46812 12.412 2.02689 11.9551C1.58515 11.4976 1.32777 10.8781 1.31316 10.2244C1.29863 9.57448 1.52524 8.94649 1.94172 8.4689L3.80566 6.54553L3.80692 6.54422C4.0312 6.3111 4.29677 6.1271 4.58791 6.00189Z"/>
</svg>`;

/**
 * Link Tool
 *
 * Inline Toolbar Tool
 *
 * Wrap selected text with <a> tag
 */
export default class LinkInlineTool implements InlineTool {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  public static isInline = true;

  /**
   * Title for hover-tooltip
   */
  public static title = 'Link';

  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  public static get sanitize(): SanitizerConfig {
    return {
      a: {
        href: true,
        target: '_blank',
        rel: 'nofollow',
      },
    } as SanitizerConfig;
  }

  /**
   * Native Document's commands for link/unlink
   */
  private readonly commandLink: string = 'createLink';
  private readonly commandUnlink: string = 'unlink';

  /**
   * Enter key code
   */
  private readonly ENTER_KEY: number = 13;

  /**
   * Styles
   */
  private readonly CSS = {
    button: 'ce-inline-tool',
    buttonActive: 'ce-inline-tool--active',
    buttonModifier: 'ce-inline-tool--link',
    buttonUnlink: 'ce-inline-tool--unlink',
    input: 'ce-inline-tool-input',
    inputShowed: 'ce-inline-tool-input--showed',
  };

  /**
   * Elements
   */
  private nodes: {
    button: HTMLButtonElement;
    input: HTMLInputElement;
  } = {
      button: null,
      input: null,
    };

  /**
   * SelectionUtils instance
   */
  private selection: SelectionUtils;

  /**
   * Input opening state
   */
  private inputOpened = false;

  /**
   * Available Toolbar methods (open/close)
   */
  private toolbar: Toolbar;

  /**
   * Available inline toolbar methods (open/close)
   */
  private inlineToolbar: InlineToolbar;

  /**
   * Notifier API methods
   */
  private notifier: Notifier;

  /**
   * I18n API
   */
  private i18n: I18n;

  /**
   * @param api - Editor.js API
   */
  constructor({ api }: { api: API }) {
    this.toolbar = api.toolbar;
    this.inlineToolbar = api.inlineToolbar;
    this.notifier = api.notifier;
    this.i18n = api.i18n;
    this.selection = new SelectionUtils();
  }

  /**
   * Create button for Inline Toolbar
   */
  public render(): HTMLElement {
    this.nodes.button = document.createElement('button') as HTMLButtonElement;
    this.nodes.button.type = 'button';
    this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);

    this.nodes.button.innerHTML = IconLink;

    return this.nodes.button;
  }

  /**
   * Input for the link
   */
  public renderActions(): HTMLElement {
    this.nodes.input = document.createElement('input') as HTMLInputElement;
    this.nodes.input.placeholder = this.i18n.t('Add a link');
    this.nodes.input.classList.add(this.CSS.input);
    this.nodes.input.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.keyCode === this.ENTER_KEY) {
        this.enterPressed(event);
      }
    });

    return this.nodes.input;
  }

  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  public surround(range: Range): void {
    /**
     * Range will be null when user makes second click on the 'link icon' to close opened input
     */
    if (range) {
      /**
       * Save selection before change focus to the input
       */
      if (!this.inputOpened) {
        /** Create blue background instead of selection */
        this.selection.setFakeBackground();
        this.selection.save();
      } else {
        this.selection.restore();
        this.selection.removeFakeBackground();
      }
      const parentAnchor = this.selection.findParentTag('A');

      /**
       * Unlink icon pressed
       */
      if (parentAnchor) {
        const unlinkButton =
          document.getElementsByClassName('unlink-button')[0];

        this.selection.expandToTag(parentAnchor);
        this.unlink();
        this.nodes.input.value = '';
        this.nodes.button.classList.remove(this.CSS.buttonUnlink);
        this.nodes.button.classList.remove(this.CSS.buttonActive);
        unlinkButton.remove();
        this.inlineToolbar.close();

        return;
      }
    }

    this.toggleActions();
  }

  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  public checkState(): boolean {
    const anchorTag = this.selection.findParentTag('A');
    const unlinkButton = document.createElement('button');

    if (anchorTag) {
      this.nodes.button.innerHTML = IconUnlink;
      this.nodes.button.classList.add(this.CSS.buttonUnlink);
      this.nodes.button.classList.add(this.CSS.buttonActive);
      this.openActions();

      unlinkButton.classList.add('unlink-button');
      unlinkButton.textContent = this.i18n.t('Remove');
      unlinkButton.addEventListener('click', () => {
        this.selection.expandToTag(anchorTag);
        this.unlink();
        this.nodes.input.value = '';
        this.nodes.button.classList.remove(this.CSS.buttonUnlink);
        this.nodes.button.classList.remove(this.CSS.buttonActive);
        unlinkButton.remove();
        this.inlineToolbar.close();
      });

      /**
       * Fill input value with link href
       */
      const hrefAttr = anchorTag.getAttribute('href');

      this.nodes.input.value = hrefAttr !== 'null' ? hrefAttr : '';
      if (
        this.nodes.input.value !== '' &&
        !document.querySelector('.unlink-button')
      ) {
        document
          .querySelector('.ce-inline-toolbar__actions')
          .appendChild(unlinkButton);
      }

      this.selection.save();
    } else {
      this.nodes.button.innerHTML = IconLink;
      this.nodes.button.classList.remove(this.CSS.buttonUnlink);
      this.nodes.button.classList.remove(this.CSS.buttonActive);
    }

    return !!anchorTag;
  }

  /**
   * Function called with Inline Toolbar closing
   */
  public clear(): void {
    this.closeActions();
  }

  /**
   * Set a shortcut
   */
  public get shortcut(): string {
    return 'CMD+K';
  }

  /**
   * Show/close link input
   */
  private toggleActions(): void {
    if (!this.inputOpened) {
      this.openActions(true);
    } else {
      this.closeActions(false);
    }
  }

  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  private openActions(needFocus = false): void {
    const inlineToolbarElement = document.getElementsByClassName(
      'ce-inline-toolbar'
    )[0] as HTMLDivElement;

    this.nodes.input.classList.add(this.CSS.inputShowed);
    inlineToolbarElement.style.transform = 'translate(-50%, -33px)';
    if (needFocus) {
      this.nodes.input.focus();
    }
    this.inputOpened = true;
  }

  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  private closeActions(clearSavedSelection = true): void {
    const inlineToolbarElement = document.getElementsByClassName(
      'ce-inline-toolbar'
    )[0] as HTMLDivElement;

    if (this.selection.isFakeBackgroundEnabled) {
      // if actions is broken by other selection We need to save new selection
      const currentSelection = new SelectionUtils();

      currentSelection.save();

      this.selection.restore();
      this.selection.removeFakeBackground();

      // and recover new selection after removing fake background
      currentSelection.restore();
    }

    this.nodes.input.classList.remove(this.CSS.inputShowed);
    inlineToolbarElement.style.transform = '';
    this.nodes.input.value = '';
    if (clearSavedSelection) {
      this.selection.clearSaved();
    }
    this.inputOpened = false;
  }

  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  private enterPressed(event: KeyboardEvent): void {
    let value = this.nodes.input.value || '';

    if (!value.trim()) {
      this.selection.restore();
      this.unlink();
      event.preventDefault();
      this.closeActions();

      return;
    }

    if (!this.validateURL(value)) {
      this.notifier.show({
        message: 'Pasted link is not valid.',
        style: 'error',
      });

      _.log('Incorrect Link pasted', 'warn', value);

      return;
    }

    value = this.prepareLink(value);

    this.selection.restore();
    this.selection.removeFakeBackground();

    this.insertLink(value);

    /**
     * Preventing events that will be able to happen
     */
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.selection.collapseToEnd();
    this.inlineToolbar.close();
  }

  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  private validateURL(str: string): boolean {
    /**
     * Don't allow spaces
     */
    return !/\s/.test(str);
  }

  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  private prepareLink(link: string): string {
    link = link.trim();
    link = this.addProtocol(link);

    return link;
  }

  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  private addProtocol(link: string): string {
    /**
     * If protocol already exists, do nothing
     */
    if (/^(\w+):(\/\/)?/.test(link)) {
      return link;
    }

    /**
     * We need to add missed HTTP protocol to the link, but skip 2 cases:
     *     1) Internal links like "/general"
     *     2) Anchors looks like "#results"
     *     3) Protocol-relative URLs like "//google.com"
     */
    const isInternal = /^\/[^/\s]/.test(link),
        isAnchor = link.substring(0, 1) === '#',
        isProtocolRelative = /^\/\/[^/\s]/.test(link);

    if (!isInternal && !isAnchor && !isProtocolRelative) {
      link = 'http://' + link;
    }

    return link;
  }

  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  private insertLink(link: string): void {
    /**
     * Edit all link, not selected part
     */
    const anchorTag = this.selection.findParentTag('A');

    if (anchorTag) {
      this.selection.expandToTag(anchorTag);
    }

    document.execCommand(this.commandLink, false, link);
    this.selection.findParentTag('A').setAttribute('target', '_blank');
  }

  /**
   * Removes <a> tag
   */
  private unlink(): void {
    document.execCommand(this.commandUnlink);
  }
}