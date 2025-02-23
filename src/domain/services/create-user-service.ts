import { Either, left, right } from '../shared/either';

import User from '../entities/user';

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
  }: UserType): Promise<Either<Error, User>> {
    const userOrError: Either<Error, User> = User.create({
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
