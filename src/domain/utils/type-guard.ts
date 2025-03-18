import Name from '@/entities/modules/name';
import Email from '@/entities/modules/email';
import Password from '@/entities/modules/password';
import Prop from '@/entities/modules/prop';

import InvalidNameError from '@/domain/errors/invalid-name-error';
import InvalidEmailError from '@/domain/errors/invalid-email-error';
import InvalidPasswordError from '@/domain/errors/invalid-password-error';
import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { Either, left, right } from './either';
import Description from '../entities/modules/description';
import InvalidDescriptionError from '../errors/invalid-description-error';

export default class TypeGuard {
  public static checkName(name: string): Either<InvalidNameError, Name> {
    const nameOrError = Name.create(name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    return right(nameOrError.value);
  }

  public static checkEmail(email: string): Either<InvalidEmailError, Email> {
    const emailOrError = Email.create(email);

    if (emailOrError.isLeft()) {
      return left(emailOrError.value);
    }

    return right(emailOrError.value);
  }

  public static checkPassword(
    password: string
  ): Either<InvalidPasswordError, Password> {
    const passwordOrError = Password.create(password);

    if (passwordOrError.isLeft()) {
      return left(passwordOrError.value);
    }

    return right(passwordOrError.value);
  }

  public static checkDescription(
    description: string
  ): Either<InvalidDescriptionError, Description> {
    const descriptionOrError = Description.create(description);

    if (descriptionOrError.isLeft()) {
      return left(descriptionOrError.value);
    }

    return right(descriptionOrError.value);
  }

  public static checkProp(prop: any): Either<InvalidPropError, Prop> {
    const propOrError = Prop.create(prop);

    if (propOrError.isLeft()) {
      return left(propOrError.value);
    }

    return right(propOrError.value);
  }
}
