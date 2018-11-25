export class Article {

  constructor (public readonly id: number,
               public readonly authorId: number,
               public readonly title: string,
               public readonly content: string) {
  }

  static fromRaws(raws: Array<any>): Array<Article> {
    let articles: Array<Article> = [];

    raws.forEach((raw: any) => {
      let article = new Article(raw.id, raw.authorId, raw.title, raw.content);
      articles.push(article);
    });
    return articles;
  }
}
