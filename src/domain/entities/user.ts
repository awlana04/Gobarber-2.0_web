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
import email from './modules/email';
import password from './modules/password';

// type UserType = {
//   name: string;
//   email: string;
//   password: string;
//   location: string;
//   avatar?: string;
// };

export default class User extends Entity<
  UserType<Name, Email, Password, Prop>
> {
  public name: Name;
  public location: Prop;
  public avatar?: string;

  protected email: Email;

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

    const name = nameOrError.value;

    return right(
      new User().create({
        id: '12345678',
        name,
        email,
        password,
        location,
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar,
      }).value
    );
  }
}
