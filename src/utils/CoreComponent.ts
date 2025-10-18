export default class CoreComponent {
  public readonly element: HTMLElement;

  public constructor(element: HTMLElement) {
    this.element = element;
  }

  public getElement<T extends Element = HTMLElement>(
    selector: string,
    container: HTMLElement = this.element,
  ): T | null {
    return container.querySelector(selector);
  }

  public getElements<T extends Element = HTMLElement>(
    selector: string,
    container: HTMLElement = this.element,
  ): ReadonlyArray<T> {
    return Array.from(container.querySelectorAll(selector));
  }
}
