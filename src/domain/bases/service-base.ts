import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { DefaultEntitiesType } from '@/domain/types/entity-type';
import { ErrorType } from '@/domain/types/error-type';

import { Either } from '@/domain/utils/either';

export default abstract class ServiceBase<T = DefaultEntitiesType> {
  public abstract handle(props: T): Either<InvalidPropError | ErrorType, T>;
}
