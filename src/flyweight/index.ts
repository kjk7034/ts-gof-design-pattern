import DigitFactory from "./DigitFactory";
import Number from "./Number";

export function run() {
  const factory = new DigitFactory();
  const domTarget = document.querySelector("#app")!;

  let value = 434331;

  setInterval(() => {
    const number = new Number(factory, value++);
    number.put(domTarget);
  }, 100);
}
