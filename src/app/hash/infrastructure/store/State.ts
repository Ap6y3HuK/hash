export const storeSymbol = 'HASH';

export abstract class State {

  fetching: boolean = false;

  fetched: boolean = false;
}
