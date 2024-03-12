import BoxDecorator from "./BoxDecorator";
import LineNumberDecorator from "./LineNumberDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./Strings";

export function run() {
  const strs = new Strings();

  strs.add("Hello1");
  strs.add("My name is Wise");
  strs.add("Design=Pattern test");

  const domPre = document.querySelector("pre");

  const d1 = new SideDecorator(strs, '"');
  // d1.print(domPre);

  const d2 = new LineNumberDecorator(d1);
  // d2.print(domPre);

  const d3 = new BoxDecorator(d2);

  d3.print(domPre);
}
