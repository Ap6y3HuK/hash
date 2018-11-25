import { ArticleState } from 'app/hash/infrastructure/store/article/ArticleState';
import * as Actions from 'app/hash/infrastructure/store/article/ArticleActions';

const defaultState: ArticleState = new ArticleState();

export function articleReducer(state: ArticleState = defaultState, action: Actions.Actions): ArticleState {

  switch (action.type) {

    case Actions.ActionTypes.INIT_ARTICLES:
      return { ...state, fetching: true };

      case Actions.ActionTypes.INIT_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload, selectedArticle: action.payload[0],fetched: true, fetching: false };

    default:
      return state;
  }
}
