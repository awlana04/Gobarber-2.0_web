import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { Either, left, right } from '@/utils/either';

export default class Prop {
  public readonly value: string;

  private constructor(prop: string) {
    this.value = prop;
  }

  get prop() {
    return this.value;
  }

  private static validate(prop: string): boolean {
    if (!prop) {
      return false;
    }

    if (prop.length < 3 || prop.length > 128) {
      return false;
    }

    return true;
  }

  public static create(prop: string): Either<InvalidPropError, Prop> {
    if (!Prop.validate(prop)) {
      return left(new InvalidPropError(prop));
    }

    return right(new Prop(prop));
  }
}
