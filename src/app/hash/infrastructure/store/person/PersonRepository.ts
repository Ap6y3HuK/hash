import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { storeSymbol } from 'app/hash/infrastructure/store/State';
import { Person } from 'app/hash/infrastructure/domain/Person';

@Injectable()
export class PersonRepository {

  constructor(private store: Store<any>) {
  }

  selectPersons(): Observable<any> {
    return this.store.pipe(select((state: any) => state[storeSymbol].persons.persons));
  }

  getPerson(id: number): Observable<any> {
    return this.store.pipe(select((state: any) => {
      let selectedPerson: Person;
      state[storeSymbol].persons.persons.forEach((person: Person) => {
        if (person.id === id) {
          selectedPerson = person;
        }
      });
      return selectedPerson;
    }));
  }
}
