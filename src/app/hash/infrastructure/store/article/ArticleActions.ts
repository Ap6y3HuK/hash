import { Action } from '@ngrx/store';

const PREFIX = '[Article]';

export const ActionTypes = {
  INIT_ARTICLES: `${PREFIX}INIT_ARTICLES`,
  INIT_ARTICLES_SUCCESS: `${PREFIX}INIT_ARTICLES_SUCCESS`,
};

export class InitArticles implements Action {
  type = ActionTypes.INIT_ARTICLES;

  constructor(public payload?: any) {
  }
}

export class InitArticlesSuccess implements Action {
  type = ActionTypes.INIT_ARTICLES_SUCCESS;

  constructor(public payload: any) {
  }
}

export type Actions =
  InitArticles |
  InitArticlesSuccess;
