import crypto from 'crypto';

import { Either, left, right } from '@/utils/either';

import User from '@/entities/user';

import InvalidNameError from '@/domain/errors/invalid-name-error';
import InvalidEmailError from '@/domain/errors/invalid-email-error';
import InvalidPasswordError from '@/domain/errors/invalid-password-error';
import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { UserType } from '@/domain/types/user-type';

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
