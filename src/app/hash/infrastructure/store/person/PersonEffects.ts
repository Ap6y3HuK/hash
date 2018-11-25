import { Injectable } from '@angular/core';

import { switchMap, map } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { ActionTypes as PersonActionsTypes } from 'app/hash/infrastructure/store/person/PersonActions';
import * as PersonActions from 'app/hash/infrastructure/store/person/PersonActions';
import { HashResource } from 'app/hash/infrastructure/HashResource';
import { Person } from 'app/hash/infrastructure/domain/Person';

@Injectable()
export class PersonEffects {

  @Effect()
  initArticles$ = this.actions$.pipe(
    ofType(PersonActionsTypes.INIT_PERSONS),
    switchMap((action) => {
      return this.hashResource.initPersons().pipe(
        map((persons: Array<Person>) => {
          return new PersonActions.InitPersonsSuccess(persons);
        }));
    }));

  constructor(private actions$: Actions,
              private hashResource: HashResource) {
  }
}
