import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import TigerAdapter from "./TigerAdapter";

export function run() {
  const list = Array<Animal>();

  list.push(new Dog("댕이"));
  list.push(new Cat("솜털이"));
  list.push(new Cat("츄츄"));

  // const tiger = new Tiger();
  // tiger.name = "타이온";
  // list.push(tiger);

  list.push(new TigerAdapter("타이온"));

  list.forEach((animal) => {
    animal.sound();
  });
}
