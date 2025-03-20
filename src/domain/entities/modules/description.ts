import ValueObjectModel from './value-object-model';

import InvalidDescriptionError from '@/domain/errors/invalid-description-error';

import { Either, left, right } from '@/utils/either';

export default class Description
  implements ValueObjectModel<string, InvalidDescriptionError, Description>
{
  public readonly value: string;

  constructor(description: string) {
    this.value = description;
  }

  public validate(description: string): boolean {
    if (!description) {
      return false;
    }

    if (description.length < 32 || description.length > 512) {
      return false;
    }

    return true;
  }

  public create(): Either<InvalidDescriptionError, Description> {
    const description = this.value;

    if (!this.validate(description)) {
      return left(new InvalidDescriptionError(description));
    }

    return right(new Description(description));
  }
}
