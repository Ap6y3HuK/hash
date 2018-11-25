import { PersonState } from 'app/hash/infrastructure/store/person/PersonState';
import * as Actions from 'app/hash/infrastructure/store/person/PersonActions';

const defaultState: PersonState = new PersonState();

export function personReducer(state: PersonState = defaultState, action: Actions.Actions): PersonState {

  switch (action.type) {

    case Actions.ActionTypes.INIT_PERSONS:
      return { ...state, fetching: true };

    case Actions.ActionTypes.INIT_PERSONS_SUCCESS:
      return { ...state, persons: action.payload, fetched: true, fetching: false };

    default:
      return state;
  }
}
