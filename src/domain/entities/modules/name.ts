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

  // public static async validate(name: string) {
  //   const checkName = new NameErrorHandling();

  //   await checkName.exists(name);
  //   await checkName.length(name);

  //   return true;
  // }

  public static validate(name: string): boolean {
    if (!name) {
      return false;
    }

    if (name.trim().length < 3 || name.trim().length > 128) {
      return false;
    }

    return true;
  }

  public static create(name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) {
      return left(new InvalidNameError(name));
    }

    return right(new Name(name));
  }
}
