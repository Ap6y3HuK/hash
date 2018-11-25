import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { storeSymbol } from 'app/hash/infrastructure/store/State';

@Injectable()
export class PersonRepository {

  constructor(private store: Store<any>) {
  }

  selectPersons(): Observable<any> {
    return this.store.pipe(select((state: any) => state[storeSymbol].persons.persons));
  }
}
