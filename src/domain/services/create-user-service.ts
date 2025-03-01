import { Either, left, right } from '../shared/either';

import User from '../entities/user';

import InvalidNameError from '../shared/errors/invalid-name-error';
import InvalidEmailError from '../shared/errors/invalid-email-error';
import InvalidPasswordError from '../shared/errors/invalid-password-error';
import InvalidPropError from '../shared/errors/invalid-prop-error';

type UserType = {
  name: string;
  email: string;
  password: string;
  location: string;
};

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
      User
    >
  > {
    const userOrError: Either<
      | InvalidNameError
      | InvalidEmailError
      | InvalidPasswordError
      | InvalidPropError,
      User
    > = User.create({
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
