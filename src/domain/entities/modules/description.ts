import { Either, left, right } from '@/utils/either';

import InvalidDescriptionError from '@/domain/errors/invalid-description-error';

export default class Description {
  public readonly value: string;

  constructor(description: string) {
    this.value = description;
  }

  private static validate(description: string): boolean {
    if (!description) {
      return false;
    }

    if (description.length < 32 || description.length > 512) {
      return false;
    }

    return true;
  }

  public static create(
    description: string
  ): Either<InvalidDescriptionError, Description> {
    if (!Description.validate(description)) {
      return left(new InvalidDescriptionError(description));
    }

    return right(new Description(description));
  }
}
