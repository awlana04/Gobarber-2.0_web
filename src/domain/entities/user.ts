import { Either, left, right } from '../shared/either';
import InvalidPropError from '../shared/errors/invalid-prop-error';
import Prop from './modules/prop';

type EntityType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

type IEntity<Type> = {
  [Property in keyof Type]: Type[Property];
};

type UserType = {
  name: string;
  email: string;
  password: string;
};

interface EntityInterface<Type> {
  create(
    props: IEntity<EntityType & Type>
  ): Either<InvalidPropError, IEntity<EntityType & Type>>;
}

abstract class Entity<Type> implements EntityInterface<Type> {
  protected id: string;

  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: IEntity<EntityType & Type>) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  create(
    props: IEntity<EntityType & Type>
  ): Either<InvalidPropError, IEntity<EntityType & Type>> {
    if (!props) {
      return left(new InvalidPropError(props));
    }

    return right(props);
  }
}

export default class User extends Entity<UserType> {
  // protected id: string;

  name: string;
  email: string;

  private password: string;

  // readonly createdAt: Date;
  // readonly updatedAt: Date;

  constructor(
    id = '',
    name = '',
    email = '',
    password = '',
    createdAt = new Date(),
    updatedAt = new Date()
  ) {
    super({ id, name, email, password, createdAt, updatedAt });

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  create(
    props: IEntity<EntityType & UserType>
  ): Either<InvalidPropError, IEntity<EntityType & UserType>> {
    // const userName = props.name;
    // const userEmail = props.email;
    // const userPassword = props.password;

    const nameOrError = Prop.create(props.name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    // const { id, name, password, email } = new User(
    //   userName,
    //   userEmail,
    //   userPassword
    // );

    // const user = new User(userName, userEmail, userPassword);

    return right(props);

    // return { id, name, password, email };
  }
}

// import Entity, { IEntity } from './shared/entity';

// import Name from './modules/name';
// import Email from './modules/email';
// import Password from './modules/password';
// import Prop from './modules/prop';

// import { Either, left, right } from '../shared/either';

// import InvalidNameError from '../shared/errors/invalid-name-error';
// import InvalidEmailError from '../shared/errors/invalid-email-error';
// import InvalidPasswordError from '../shared/errors/invalid-password-error';
// import InvalidPropError from '../shared/errors/invalid-prop-error';

// import { UserType } from '../types/user-type';

// import { NameOrErrorFunction } from '../functions/name-or-error-function';
// // import { IEntity } from './shared/entity-type';
// import { BarberType } from '../types/barber-type';

// type UpdateUserProps = {
//   name?: string;
//   password?: string;
//   location?: string;
// };

// // type Validation = Name & Email & Password & Prop;

// type UserReturnPropsType = {
//   props: UserType;
//   id?: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// };

// export default class User extends Entity<
//   UserType<Name, Email, Password, Prop>,
//   UserType
// > {
//   public name: Name;
//   public email: Email;
//   public password: Password;
//   public location: Prop;

//   private constructor(
//     props: UserType<Name, Email, Password, Prop>,
//     id?: string,
//     createdAt?: Date,
//     updatedAt?: Date
//   ) {
//     super(props, id, createdAt, updatedAt);

//     this.name = props.name;
//     this.email = props.email;
//     this.password = props.password;
//     this.location = props.location;
//   }

//   // set userName(name: string) {
//   //   const nameOrError = Name.create(name);

//   //   if (nameOrError.isLeft()) {
//   //     left(nameOrError.value);
//   //   }

//   //   right((this.name = nameOrError.value as Name));
//   // }

//   public create(
//     entity: IEntity<UserType>,
//     props: UserType
//   ): Either<
//     | InvalidNameError
//     | InvalidEmailError
//     | InvalidPasswordError
//     | InvalidPropError,
//     UserType<Name, Email, Password, Prop>
//   > {
//     const nameOrError = Name.create(props.name);

//     if (nameOrError.isLeft()) {
//       return left(nameOrError.value);
//     }

//     const emailOrError = Email.create(props.email);

//     if (emailOrError.isLeft()) {
//       return left(emailOrError.value);
//     }

//     const passwordOrError = Password.create(props.password);

//     if (passwordOrError.isLeft()) {
//       return left(passwordOrError.value);
//     }

//     const locationOrError = Prop.create(props.location);

//     if (locationOrError.isLeft()) {
//       return left(locationOrError.value);
//     }

//     const name = nameOrError.value;
//     const email = emailOrError.value;
//     const password = passwordOrError.value;
//     const location = locationOrError.value;
//     const avatar = props.avatar;

//     return right(new User({ name, email, password, location, avatar }));
//   }
//   // create(
//   //   entity: IEntity<UserType<Name, Email, Password, Prop>>,
//   //   props: UserType<Name, Email, Password, Prop>
//   // ):
//   //   | InvalidEmailError
//   //   | InvalidNameError
//   //   | InvalidPasswordError
//   //   | InvalidPropError
//   //   | UserType {
//   //   const nameOrError = Name.create();

//   //   const email = this.email;
//   //   const password = this.password;
//   //   const location = this.location;
//   //   const avatar = this.props.avatar;

//   //   const user = { name, email, password, location, avatar };

//   //   return right(new User(user));
//   // }

//   // export default class User implements IEntity {
//   // public name: Name;
//   // public password: Password;
//   // public location: Prop;

//   // public readonly email: Email;

//   // private constructor(
//   //   props: UserType<Name, Email, Password, Prop>,
//   //   id?: string,
//   //   createdAt?: Date,
//   //   updatedAt?: Date
//   // ) {
//   //   super(props, id, createdAt, updatedAt);

//   //   this.name = props.name;
//   //   this.email = props.email;
//   //   this.password = props.password;
//   //   this.location = props.location;
//   // }

//   // createUser(
//   //   props: UserType
//   // ): Either<
//   //   | InvalidEmailError
//   //   | InvalidNameError
//   //   | InvalidPasswordError
//   //   | InvalidPropError,
//   //   UserType
//   // > {
//   // const nameOrError = Name.create(props.name);

//   // if (nameOrError.isLeft()) {
//   //   return left(nameOrError.value);
//   // }

//   // const emailOrError = Email.create(props.email);

//   // if (emailOrError.isLeft()) {
//   //   return left(emailOrError.value);
//   // }

//   // const passwordOrError = Password.create(props.password);

//   // if (passwordOrError.isLeft()) {
//   //   return left(passwordOrError.value);
//   // }

//   // const locationOrError = Prop.create(props.location);

//   // if (locationOrError.isLeft()) {
//   //   return left(locationOrError.value);
//   // }

//   // const name = nameOrError.value;
//   // const email = emailOrError.value;
//   // const password = passwordOrError.value;
//   // const location = locationOrError.value;
//   //   const name = props.name;
//   //   const email = props.email;
//   //   const password = props.password;
//   //   const location = props.location;
//   //   const avatar = props.avatar;

//   //   const user = new User().createUser({
//   //     name,
//   //     email,
//   //     password,
//   //     location,
//   //     avatar,
//   //   }).value as UserType;

//   //   return right(user);
//   // }

//   // createUser(
//   //   props: UserType
//   // ): Either<
//   //   | (InvalidNameError | InvalidEmailError | InvalidPasswordError)
//   //   | InvalidPropError,
//   //   UserType
//   // > {
//   //   const nameOrError = Name.create(props.name);

//   //   if (nameOrError.isLeft()) {
//   //     return left(nameOrError.value);
//   //   }

//   //   const emailOrError = Email.create(props.email);

//   //   if (emailOrError.isLeft()) {
//   //     return left(emailOrError.value);
//   //   }

//   //   const passwordOrError = Password.create(props.password);

//   //   if (passwordOrError.isLeft()) {
//   //     return left(passwordOrError.value);
//   //   }

//   //   const locationOrError = Prop.create(props.location);

//   //   if (locationOrError.isLeft()) {
//   //     return left(locationOrError.value);
//   //   }

//   //   const name = nameOrError.value;
//   //   const email = emailOrError.value;
//   //   const password = passwordOrError.value;
//   //   const location = locationOrError.value;
//   //   const avatar = props.avatar;

//   //   return right(
//   //     new User().createUser({
//   //       name,
//   //       email,
//   //       password,
//   //       location,
//   //       avatar,
//   //     })
//   //   );
//   // }

//   // public static create(
//   //   props: UserType,
//   //   id?: string,
//   //   createdAt?: Date,
//   //   updatedAt?: Date
//   // ): Either<
//   //   | InvalidNameError
//   //   | InvalidEmailError
//   //   | InvalidPasswordError
//   //   | InvalidPropError,
//   //   User
//   // > {
//   //   const nameOrError = Name.create(props.name);

//   //   if (nameOrError.isLeft()) {
//   //     return left(nameOrError.value);
//   //   }

//   //   const emailOrError = Email.create(props.email);

//   //   if (emailOrError.isLeft()) {
//   //     return left(emailOrError.value);
//   //   }

//   //   const passwordOrError = Password.create(props.password);

//   //   if (passwordOrError.isLeft()) {
//   //     return left(passwordOrError.value);
//   //   }

//   //   const locationOrError = Prop.create(props.location);

//   //   if (locationOrError.isLeft()) {
//   //     return left(locationOrError.value);
//   //   }

//   //   const name = nameOrError.value;
//   //   const email = emailOrError.value;
//   //   const password = passwordOrError.value;
//   //   const location = locationOrError.value;
//   //   const avatar = props.avatar;

//   //   return right(
//   //     new User(
//   //       { name, email, password, location, avatar },
//   //       id,
//   //       createdAt,
//   //       updatedAt
//   //     )
//   //   );
//   // }

//   // public static update(props: UpdateUserProps): Either<Error, User> {
//   //   if (props.name) {
//   //     const nameOrError = Name.create(props.name);

//   //     if (nameOrError.isLeft()) {
//   //       return left(nameOrError.value);
//   //     }

//   //     const name: Name = nameOrError.value as Name;

//   //     User.prototype.name = name;
//   //   }

//   //   if (props.password) {
//   //     const passwordOrError = Password.create(props.password);

//   //     if (passwordOrError.isLeft()) {
//   //       return left(passwordOrError.value);
//   //     }

//   //     const password: Password = passwordOrError.value as Password;

//   //     User.prototype.password = password;
//   //   }

//   //   if (props.location) {
//   //     const locationOrError = Prop.create(props.location);

//   //     if (locationOrError.isLeft()) {
//   //       return left(locationOrError.value);
//   //     }

//   //     const location: Prop = locationOrError.value as Prop;

//   //     User.prototype.location = location;
//   //   }

//   //   return right(User.prototype);
//   // }
// }
