import crypto from 'crypto';

import { Either, left, right } from '../shared/either';

import User from '../entities/user';

import InvalidNameError from '../shared/errors/invalid-name-error';
import InvalidEmailError from '../shared/errors/invalid-email-error';
import InvalidPasswordError from '../shared/errors/invalid-password-error';
import InvalidPropError from '../shared/errors/invalid-prop-error';

import { UserType } from '../types/user-type';

export default class CreateUserService {
  public async handle({
    name,
    email,
    password,
    location,
  }: UserType): Promise<
    Either<
      | InvalidNameError
      | InvalidEmailError
      | InvalidPasswordError
      | InvalidPropError,
      UserType
    >
  > {
    const userOrError: Either<
      | InvalidNameError
      | InvalidEmailError
      | InvalidPasswordError
      | InvalidPropError,
      UserType
    > = new User().create({
      id: crypto.randomUUID(),
      name,
      email,
      password,
      location,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    return right(userOrError.value);
  }
}
