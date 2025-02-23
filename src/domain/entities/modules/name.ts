import { Either, left, right } from '../../shared/either';

export default class Name {
  public readonly value: string;

  constructor(name: string) {
    this.value = name;
  }

  get name() {
    return this.value;
  }

  public static validate(name: string): boolean {
    if (!name) {
      return false;
    }

    if (name.trim().length < 3 || name.trim().length > 128) {
      return false;
    }

    return true;
  }

  public static create(name: string): Either<Error, Name> {
    if (!Name.validate(name)) {
      return left(new Error('Invalid name: ' + name + '.'));
    }

    return right(new Name(name));
  }
}
