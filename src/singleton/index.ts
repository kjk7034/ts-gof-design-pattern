import King from "./King";

export function run() {
  const king1 = King.getInstance();
  king1.sayHello();

  const king2 = King.getInstance();
  king2.sayHello();

  if (king1 === king2) {
    console.log("같은놈");
  } else {
    console.log("다른놈");
  }
}
