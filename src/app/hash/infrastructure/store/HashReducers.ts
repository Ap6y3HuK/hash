import { articleReducer } from 'app/hash/infrastructure/store/article/ArticleReducer';
import { personReducer } from 'app/hash/infrastructure/store/person/PersonReducer';

export const reducers = {
  articles: articleReducer,
  persons: personReducer
};
