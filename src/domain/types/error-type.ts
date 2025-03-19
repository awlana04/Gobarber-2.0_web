import InvalidDescriptionError from '../errors/invalid-description-error';
import InvalidEmailError from '../errors/invalid-email-error';
import InvalidNameError from '../errors/invalid-name-error';
import InvalidPasswordError from '../errors/invalid-password-error';

export type ErrorType =
  | InvalidNameError
  | InvalidEmailError
  | InvalidPasswordError
  | InvalidDescriptionError;
