import ValueObjectModel from './value-object-model';

import NameErrorHandling from '@/domain/validations/name-error-handling';

import { Either, left, right } from '@/utils/either';

import InvalidNameError from '@/domain/errors/invalid-name-error';

export default class Name
  implements ValueObjectModel<string, InvalidNameError, Name>
{
  public readonly value: string;

  constructor(name: string) {
    this.value = name;
  }

  public validate(name: string): boolean {
    const checkName = new NameErrorHandling();

    if (checkName.exists(name) === false) {
      return false;
    }

    if (checkName.length(name) === false) {
      return false;
    }

    return true;
  }

  public create(): Either<InvalidNameError, Name> {
    const name = this.value;

    if (!this.validate(name)) {
      return left(new InvalidNameError(name));
    }

    return right(new Name(name));
  }
}
