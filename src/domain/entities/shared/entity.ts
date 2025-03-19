import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { Either } from '@/utils/either';

import { EntityMappedType, EntityType } from './entity-type';

import { ErrorType } from '@/domain/types/error-type';

export default abstract class Entity<T> {
  public abstract create(
    props: EntityMappedType<EntityType<T>>
  ): Either<InvalidPropError | ErrorType, EntityMappedType<EntityType<T>>>;
}
