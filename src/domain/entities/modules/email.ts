import InvalidEmailError from '@/domain/errors/invalid-email-error';

import { Either, left, right } from '@/utils/either';

import EmailErrorHandling from '../../validations/email-error-handling';

export default class Email {
  public readonly value: string;

  private constructor(email: string) {
    this.value = email;
  }

  // get email() {
  //   return this.value;
  // }

  private static validate(email: string): boolean {
    if (!email) {
      return false;
    }

    if (email.length > 320) {
      return false;
    }

    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!emailRegex.test(email)) {
      return false;
    }

    const [local, domain] = email.split('@');

    if (local.length > 64 || local.length === 0) {
      return false;
    }

    if (domain.length > 255 || domain.length === 0) {
      return false;
    }

    const domainParts = domain.split('.');

    if (
      domainParts.some(function (part) {
        return part.length > 63;
      })
    ) {
      return false;
    }

    return true;
  }

  // private static async validate(email: string): Promise<boolean> {
  //   const checkEmail = new EmailErrorHandling();

  //   await checkEmail.exists(email);
  //   await checkEmail.length(email);
  //   await checkEmail.isValid(email);

  //   console.log(email);

  //   return true;
  // }

  // public static async create(
  //   email: string
  // ): Promise<Either<InvalidEmailError, Email>> {
  //   if (await !Email.validate(email)) {
  //     return left(new InvalidEmailError(email));
  //   }

  //   return right(new Email(email));
  // }

  public static create(email: string): Either<InvalidEmailError, Email> {
    if (!Email.validate(email)) {
      return left(new InvalidEmailError(email));
    }

    return right(new Email(email));
  }
}
