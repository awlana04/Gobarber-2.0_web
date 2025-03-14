import { Either } from '@/domain/shared/either';
import InvalidEmailError from '@/domain/shared/errors/invalid-email-error';
import InvalidNameError from '@/domain/shared/errors/invalid-name-error';
import InvalidPasswordError from '@/domain/shared/errors/invalid-password-error';
import InvalidPropError from '@/domain/shared/errors/invalid-prop-error';
import { BarberType } from '@/domain/types/barber-type';
import { UserType } from '@/domain/types/user-type';
import Email from '../modules/email';
import Name from '../modules/name';
import Password from '../modules/password';
import Prop from '../modules/prop';

type EntityType = UserType | BarberType;

type UserReturnPropsType = {
  props: UserType;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type LeftType = InvalidNameError | InvalidEmailError | InvalidPasswordError;

export interface IEntity {
  createUser(
    props: UserType
  ): Either<
    | InvalidEmailError
    | InvalidNameError
    | InvalidPasswordError
    | InvalidPropError,
    UserType
  >;
}
