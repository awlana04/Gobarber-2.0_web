import InvalidEmailError from '@/domain/shared/errors/invalid-email-error';
import InvalidNameError from '@/domain/shared/errors/invalid-name-error';
import InvalidPasswordError from '@/domain/shared/errors/invalid-password-error';
import InvalidPropError from '@/domain/shared/errors/invalid-prop-error';
import InvalidDescriptionError from '@/domain/shared/errors/invalid-description-error';

import { Either, left, right } from '@/domain/shared/either';

import { EntityMappedType, EntityType } from './entity-type';

type ErrorType =
  | InvalidNameError
  | InvalidEmailError
  | InvalidPasswordError
  | InvalidDescriptionError;

interface IEntity<T> {
  create(
    props: EntityMappedType<EntityType<T>>
  ): Either<InvalidPropError | ErrorType, EntityMappedType<EntityType<T>>>;
}

export default abstract class Entity<T> implements IEntity<T> {
  protected id: string;

  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: EntityMappedType<EntityType<T>>) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  public create(
    props: EntityMappedType<EntityType<T>>
  ): Either<InvalidPropError | ErrorType, EntityMappedType<EntityType<T>>> {
    if (!props) {
      return left(new InvalidPropError(props));
    }

    return right(props);
  }
}
