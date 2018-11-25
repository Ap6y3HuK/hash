import { Injectable } from '@angular/core';

import { switchMap, map } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { ActionTypes as ArticleActionsTypes } from 'app/hash/infrastructure/store/article/ArticleActions';
import * as ArticleActions from 'app/hash/infrastructure/store/article/ArticleActions';
import { HashResource } from 'app/hash/infrastructure/HashResource';
import { Article } from 'app/hash/infrastructure/domain/Article';

@Injectable()
export class ArticleEffects {

  @Effect()
  initArticles$ = this.actions$.pipe(
    ofType(ArticleActionsTypes.INIT_ARTICLES),
    switchMap((action) => {
       return this.hashResource.initArticles().pipe(
          map((articles: Array<Article>) => {
            return new ArticleActions.InitArticlesSuccess(articles);
          }));
    }));

    constructor(private actions$: Actions,
                private hashResource: HashResource) {
    }
}
