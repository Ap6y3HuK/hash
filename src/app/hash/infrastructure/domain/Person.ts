export class Person {

  constructor (public readonly id: number,
               public readonly age: number,
               public readonly name: string,
               public readonly nick: string,
               public readonly summary: string) {
  }

  static fromRaws(raws: Array<any>): Array<Person> {
    let persons: Array<Person> = [];

    raws.forEach((raw: any) => {
      let person = new Person(raw.id, raw.age, raw.name, raw.nick, raw.summary);
      persons.push(person);
    });
    return persons;
  }
}
