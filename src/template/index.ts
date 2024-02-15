import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

export function run() {
  const article = new Article(
    "Title",
    ["Contents1", "Contents2", "Contents3"],
    "Footer"
  );

  const display = new SimpleDisplayArticle(article);
  document.querySelector(".content")!.innerHTML = display.displayHtml();

  document.querySelector(".edit-mode")?.addEventListener("change", (event) => {
    let display;
    if ((<HTMLInputElement>event.target).checked) {
      display = new EditableDisplayArticle(article);
    } else {
      display = new SimpleDisplayArticle(article);
    }
    document.querySelector(".content")!.innerHTML = display.displayHtml();
  });
}
