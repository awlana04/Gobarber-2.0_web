import Entity from './shared/entity';

import InvalidEmailError from '../shared/errors/invalid-email-error';
import InvalidNameError from '../shared/errors/invalid-name-error';
import InvalidPasswordError from '../shared/errors/invalid-password-error';
import InvalidPropError from '../shared/errors/invalid-prop-error';

import { Either, left, right } from '../shared/either';

import TypeGuard from '../shared/type-guard';

import { EntityMappedType, EntityType } from './shared/entity-type';

import { UserType } from '../types/user-type';

export default class User extends Entity<UserType> {
  public name: string;
  public location: string;
  public avatar?: string;

  protected email: string;

  private password: string;

  constructor(
    id = '',
    name = '',
    email = '',
    password = '',
    location = '',
    avatar = '',
    createdAt = new Date(),
    updatedAt = new Date()
  ) {
    super({
      id,
      name,
      email,
      password,
      location,
      avatar,
      createdAt,
      updatedAt,
    });

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.location = location;
    this.avatar = avatar;
  }

  public create(
    props: EntityMappedType<EntityType<UserType>>
  ): Either<
    | InvalidPropError
    | InvalidEmailError
    | InvalidNameError
    | InvalidPasswordError,
    EntityMappedType<EntityType<UserType>>
  > {
    if (TypeGuard.checkName(props.name).value instanceof InvalidNameError) {
      return left(new InvalidNameError(props.name));
    }

    if (TypeGuard.checkEmail(props.email).value instanceof InvalidEmailError) {
      return left(new InvalidEmailError(props.email));
    }

    if (
      TypeGuard.checkPassword(props.password).value instanceof
      InvalidPasswordError
    ) {
      return left(new InvalidPasswordError(props.password));
    }

    if (TypeGuard.checkName(props.location).value instanceof InvalidPropError) {
      return left(new InvalidPropError(props.location));
    }

    return right(props);
  }
}
