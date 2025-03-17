import InvalidNameError from '@/domain/errors/invalid-name-error';

import { Either, left, right } from '@/utils/either';

import NameErrorHandling from '@/domain/validations/name-error-handling';

export default class Name {
  public readonly value: string;

  constructor(name: string) {
    this.value = name;
  }

  // get name() {
  //   return this.value;
  // }

  public static validate(name: string): boolean {
    const checkName = new NameErrorHandling();

    if (checkName.exists(name) === false) {
      return false;
    }

    if (checkName.length(name) === false) {
      return false;
    }

    return true;
  }

  public static create(name: string): Either<InvalidNameError, Name> {
    console.log(Name.validate(name));
    if (!Name.validate(name)) {
      return left(new InvalidNameError(name));
    }

    return right(new Name(name));
  }
}
