import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { Either } from '@/domain/utils/either';

import {
  DefaultEntitiesType,
  EntityMappedType,
  EntityType,
} from '@/domain/types/entity-type';
import { ErrorType } from '@/domain/types/error-type';

export default abstract class EntityBase<T = DefaultEntitiesType> {
  public abstract create(
    props: EntityMappedType<EntityType<T>>
  ): Either<InvalidPropError | ErrorType, EntityMappedType<EntityType<T>>>;
}
