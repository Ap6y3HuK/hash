import { Action } from '@ngrx/store';

const PREFIX = '[Person]';

export const ActionTypes = {
  INIT_PERSONS: `${PREFIX}INIT_PERSONS`,
  INIT_PERSONS_SUCCESS: `${PREFIX}INIT_PERSONS_SUCCESS`,
};

export class InitPersons implements Action {
  type = ActionTypes.INIT_PERSONS;

  constructor(public payload?: any) {
  }
}

export class InitPersonsSuccess implements Action {
  type = ActionTypes.INIT_PERSONS_SUCCESS;

  constructor(public payload: any) {
  }
}

export type Actions =
  InitPersons |
  InitPersonsSuccess;
