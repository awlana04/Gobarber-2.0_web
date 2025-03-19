import ServiceModel from './service-model';

import { Either, left, right } from '@/utils/either';

import InvalidNameError from '@/domain/errors/invalid-name-error';
import InvalidEmailError from '@/domain/errors/invalid-email-error';
import InvalidPasswordError from '@/domain/errors/invalid-password-error';
import InvalidPropError from '@/domain/errors/invalid-prop-error';

import User from '@/entities/user';

import { UserType } from '@/domain/types/user-type';

export default class CreateUserService implements ServiceModel<UserType> {
  public handle({
    name,
    email,
    password,
    location,
  }: UserType): Either<
    | InvalidNameError
    | InvalidEmailError
    | InvalidPasswordError
    | InvalidPropError,
    UserType
  > {
    const userOrError: Either<
      | InvalidNameError
      | InvalidEmailError
      | InvalidPasswordError
      | InvalidPropError,
      UserType
    > = new User().create({
      name,
      email,
      password,
      location,
    });

    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    return right(userOrError.value);
  }
}
