import Entity from './shared/entity';

import InvalidEmailError from '../shared/errors/invalid-email-error';
import InvalidNameError from '../shared/errors/invalid-name-error';
import InvalidPasswordError from '../shared/errors/invalid-password-error';
import InvalidPropError from '../shared/errors/invalid-prop-error';

import { Either, left, right } from '../shared/either';

import Email from './modules/email';
import Name from './modules/name';
import Password from './modules/password';
import Prop from './modules/prop';

import { EntityMappedType, EntityType } from './shared/entity-type';

import { UserType } from '../types/user-type';

// type UserType = {
//   name: string;
//   email: string;
//   password: string;
//   location: string;
//   avatar?: string;
// };

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

  create(
    props: EntityMappedType<EntityType<UserType>>
  ): Either<
    | InvalidPropError
    | InvalidEmailError
    | InvalidNameError
    | InvalidPasswordError,
    EntityMappedType<EntityType<UserType>>
  > {
    const nameOrError = Name.create(props.name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const emailOrError = Email.create(props.email);

    if (emailOrError.isLeft()) {
      return left(emailOrError.value);
    }

    const passwordOrError = Password.create(props.password);

    if (passwordOrError.isLeft()) {
      return left(passwordOrError.value);
    }

    const locationOrError = Prop.create(props.location);

    if (locationOrError.isLeft()) {
      return left(locationOrError.value);
    }

    // const name = nameOrError.value as unknown as string;
    // const email = emailOrError.value as unknown as string;
    // const password = passwordOrError.value as unknown as string;
    // const location = locationOrError.value as unknown as string;
    // const avatar = props.avatar;

    return right(props);
  }
}
