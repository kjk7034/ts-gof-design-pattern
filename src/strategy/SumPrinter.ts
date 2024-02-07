import SumStrategy from "./SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, n: number, domOutput: Element) {
    const value = strategy.get(n);
    domOutput.innerHTML = `1~${n}까지의 총합 = ${value}`;
  }
}
