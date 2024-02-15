import Article from "./Article";

export default abstract class DisplayArticleTemplate {
  // 파생 클래스에서 접근할 수 있도록 protected 사용
  constructor(protected article: Article) {}

  public readonly displayHtml = () => {
    return `
        ${this.titleHtml()}
        ${this.contentHtml()}
        ${this.footerHtml()}        
    `;
  };

  protected abstract titleHtml(): string;
  protected abstract contentHtml(): string;
  protected abstract footerHtml(): string;
}
