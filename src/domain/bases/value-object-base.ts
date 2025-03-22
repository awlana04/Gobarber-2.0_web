import { Either } from '@/domain/utils/either';

import { ErrorType } from '@/domain/types/error-type';

export default abstract class ValueObjectBase<
  Value extends string,
  ErrorType,
  Object,
> {
  public readonly value: Value;

  private constructor(value: Value) {
    this.value = value;
  }

  abstract validate(value: Value): boolean;

  abstract create(value: Value): Either<ErrorType, Object>;
}
