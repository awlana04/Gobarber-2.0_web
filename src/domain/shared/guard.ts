import Name from '../entities/modules/name';
import { Either, left, right } from './either';
import InvalidNameError from './errors/invalid-name-error';

export default class Guard {
  public static checkName(name: string): Either<InvalidNameError, Name> {
    const nameOrError = Name.create(name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    return right(nameOrError.value);
  }
}
