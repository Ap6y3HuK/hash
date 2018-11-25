import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as Actions from 'app/hash/infrastructure/store/article/ArticleActions'

@Injectable()
export class ArticleCommandDispatcher {

  constructor(private store: Store<any>) {
  }

  initArticles(): void {
    this.store.dispatch(new Actions.InitArticles());
  }
}
