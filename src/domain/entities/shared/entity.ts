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

type EntityType = UserType & BarberType;

type LeftType = InvalidNameError | InvalidEmailError | InvalidPasswordError;

// interface IEntity<L = LeftType, R = EntityType> {
//   createUser(
//     props: UserType,
//     id?: string,
//     createdAt?: Date,
//     updatedAt?: Date
//   ): Either<L | InvalidPropError, R>;
// }

export interface IEntity<T> {
  createUser(
    props: T
  ): Either<
    | InvalidEmailError
    | InvalidNameError
    | InvalidPasswordError
    | InvalidPropError,
    UserType<Name, Email, Password, Prop>
  >;
}

export default class Entity<T, Type> {
  protected _id: string;

  public props: T;

  protected createdAt: Date;
  protected updatedAt: Date;

  constructor(props: T, id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id ?? Math.random().toExponential();

    this.props = props;

    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }

  public create(entity: IEntity<Type>, props: Type) {
    return entity.createUser(props);
  }
}

// import { Either, right } from '@/domain/shared/either';
// import InvalidEmailError from '@/domain/shared/errors/invalid-email-error';
// import InvalidNameError from '@/domain/shared/errors/invalid-name-error';
// import InvalidPasswordError from '@/domain/shared/errors/invalid-password-error';
// import InvalidPropError from '@/domain/shared/errors/invalid-prop-error';
// import { BarberType } from '@/domain/types/barber-type';
// import { UserType } from '@/domain/types/user-type';

// type EntityType = UserType | BarberType;
// type LeftType = InvalidNameError | InvalidEmailError | InvalidPasswordError;

// interface IEntity<T = EntityType, L = LeftType, R = EntityType> {
//   create(
//     props: T,
//     id?: string,
//     createdAt?: Date,
//     updatedAt?: Date
//   ): Either<L | InvalidPropError, R>;
// }

// export default abstract class Entity<
//   T = EntityType,
//   L = LeftType,
//   R = EntityType,
// > {
//   protected _id: string;

//   public props: T;

//   protected createdAt: Date;
//   protected updatedAt: Date;

//   constructor(props: T, id?: string, createdAt?: Date, updatedAt?: Date) {
//     this._id = id ?? Math.random().toExponential();

//     this.props = props;

//     this.createdAt = createdAt ?? new Date();
//     this.updatedAt = updatedAt ?? new Date();
//   }

//   abstract create(
//     props: EntityType,
//     id?: string,
//     createdAt?: Date,
//     updatedAt?: Date
//   ): Either<LeftType | InvalidPropError, EntityType> {}
// }
