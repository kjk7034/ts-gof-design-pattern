export default class Digit {
  private data: Array<string> | null = null;

  constructor(private url: string) {}

  private async load(url: string, domOutput: Element) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.data = json;
      if (domOutput) {
        this.put(domOutput);
      }
    } catch (error) {
      console.error(error);
    }
  }

  put(dom: Element): void {
    if (!this.data) {
      this.load(this.url, dom);
      return;
    }
    dom.innerHTML = '<div class="digit-layout"></div>';
    const domLayout = dom.querySelector(".digit-layout");

    this.data.forEach((item: string) => {
      const len = item.length;
      for (let i = 0; i < len; i++) {
        const domCell = document.createElement("div");
        domCell.style.backgroundColor = item[i] === "1" ? "#ff0" : "#333";
        domLayout?.append(domCell);
      }
    });
  }
}
