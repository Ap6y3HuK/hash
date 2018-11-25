import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs/index';

import { storeSymbol } from 'app/hash/infrastructure/store/State';

@Injectable()
export class ArticleRepository {

  constructor(private store: Store<any>) {
  }

  selectArticles(): Observable<any> {
    return this.store.pipe(select((state: any) => state[storeSymbol].articles.articles));
  }
}
