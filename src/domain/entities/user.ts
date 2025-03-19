import crypto from 'crypto';

import Entity from './shared/entity';

import { Either, left, right } from '@/utils/either';
import TypeGuard from '@/utils/type-guard';

import InvalidEmailError from '@/domain/errors/invalid-email-error';
import InvalidNameError from '@/domain/errors/invalid-name-error';
import InvalidPasswordError from '@/domain/errors/invalid-password-error';
import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { EntityMappedType, EntityType } from './shared/entity-type';

import { UserType } from '@/domain/types/user-type';

export default class User implements Entity<UserType> {
  public create(
    props: UserType
  ): Either<
    | InvalidPropError
    | InvalidEmailError
    | InvalidNameError
    | InvalidPasswordError,
    EntityMappedType<EntityType<UserType>>
  > {
    if (TypeGuard.checkName(props.name).isLeft()) {
      return left(new InvalidNameError(props.name));
    }

    if (TypeGuard.checkEmail(props.email).isLeft()) {
      return left(new InvalidEmailError(props.email));
    }

    if (TypeGuard.checkPassword(props.password).isLeft()) {
      return left(new InvalidPasswordError(props.password));
    }

    if (TypeGuard.checkName(props.location).isLeft()) {
      return left(new InvalidPropError(props.location));
    }

    return right({
      id: crypto.randomUUID(),
      name: props.name,
      email: props.email,
      password: props.password,
      location: props.location,
      avatar: props.avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
