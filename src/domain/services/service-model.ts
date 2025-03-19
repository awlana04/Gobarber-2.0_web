import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { ErrorType } from '@/domain/types/error-type';

import { Either } from '@/utils/either';

export default abstract class ServiceModel<T> {
  public abstract handle(props: T): Either<InvalidPropError | ErrorType, T>;
}
