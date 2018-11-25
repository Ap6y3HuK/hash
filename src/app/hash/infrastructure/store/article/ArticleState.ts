import { State } from 'app/hash/infrastructure/store/State';
import { Article } from 'app/hash/infrastructure/domain/Article';

export class ArticleState extends State {
  public articles: Array<Article> = [];
  public selectedArticle: Article = null;
}
