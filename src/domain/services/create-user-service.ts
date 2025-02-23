import { Either, left, right } from '../shared/either';

import User from '../entities/user';
import InvalidNameError from '../shared/errors/invalid-name-error';

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
  }: UserType): Promise<Either<InvalidNameError | Error, User>> {
    const userOrError: Either<InvalidNameError | Error, User> = User.create({
      name,
      email,
      password,
      location,
    });

    if (userOrError.isLeft()) {
      // console.log(userOrError.value);
      return left(userOrError.value);
    }

    return right(userOrError.value);
  }
}
