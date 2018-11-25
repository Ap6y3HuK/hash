import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as Actions from 'app/hash/infrastructure/store/person/PersonActions'

@Injectable()
export class PersonCommandDispatcher {

  constructor(private store: Store<any>) {
  }

  initPersons(): void {
    this.store.dispatch(new Actions.InitPersons());
  }
}
