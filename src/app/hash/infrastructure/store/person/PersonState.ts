import { State } from 'app/hash/infrastructure/store/State';
import { Person } from 'app/hash/infrastructure/domain/Person';

export class PersonState extends State {
  public persons: Array<Person> = [];
}
