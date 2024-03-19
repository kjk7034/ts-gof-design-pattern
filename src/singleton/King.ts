export default class King {
  private constructor() {}

  private static instance: King | undefined;

  static getInstance(): King {
    if (!this.instance) {
      this.instance = new King();
    }
    return this.instance;
  }

  sayHello(): void {
    console.log("I am only one...");
  }
}
