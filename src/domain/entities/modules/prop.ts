import ValueObjectModel from '@/domain/bases/value-object-base';

import { Either, left, right } from '@/domain/utils/either';

import InvalidPropError from '@/domain/errors/invalid-prop-error';

export default class Prop
  implements ValueObjectModel<string, InvalidPropError, Prop>
{
  public readonly value: string;

  constructor(prop: string) {
    this.value = prop;
  }

  public validate(prop: string): boolean {
    if (!prop) {
      return false;
    }

    if (prop.length < 3 || prop.length > 128) {
      return false;
    }

    return true;
  }

  public create(): Either<InvalidPropError, Prop> {
    const prop = this.value;

    if (!this.validate(prop)) {
      return left(new InvalidPropError(prop));
    }

    return right(new Prop(prop));
  }
}
