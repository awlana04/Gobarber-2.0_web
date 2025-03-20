import { Either } from '@/domain/utils/either';

export default abstract class ValueObjectModel<
  Value extends string,
  InvalidError,
  Object,
> {
  public readonly value: Value;

  private constructor(value: Value) {
    this.value = value;
  }

  abstract validate(value: Value): boolean;

  abstract create(value: Value): Either<InvalidError, Object>;
}
