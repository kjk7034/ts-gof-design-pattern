import Draft from "./Draft";

export default class CharactersCount extends Draft {
  constructor(title: string, author: string, content: string[]) {
    super(title, author, content);
  }

  getCharactersCount(): number {
    let count = 0;

    count += this.getTitle().length;
    count += this.getAuthor().length;
    count += this.getContent().length;

    this.getContent().forEach((item) => {
      count += item.length;
    });

    return count;
  }
}
