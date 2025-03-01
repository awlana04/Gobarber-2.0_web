import Entity from './shared/entity';

import Name from './modules/name';
import Description from './modules/description';
import Prop from './modules/prop';
import Password from './modules/password';

import { Either, left, right } from '../shared/either';

import InvalidNameError from '../shared/errors/invalid-name-error';
import InvalidDescriptionError from '../shared/errors/invalid-description-error';
import InvalidPropError from '../shared/errors/invalid-prop-error';
import InvalidPasswordError from '../shared/errors/invalid-password-error';

export type BarberProps = {
  name: string;
  location: string;
  description: string;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
};

export type BarberValidationProps = {
  name: Name;
  location: Prop;
  description: Description;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
};

export type UpdateBarberProps = {
  name?: string;
  location?: string;
  description?: string;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
};

export type UpdateBarberPassword = {
  password: string;
};

export default class Barber extends Entity<
  BarberProps | BarberValidationProps
> {
  public name: Name;
  public location: Prop;
  public description: Description;
  public openAtNight: boolean;
  public openOnWeekends: boolean;
  // public password: Password;

  private constructor(
    props: BarberValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.name = props.name;
    this.location = props.location;
    this.description = props.description;
    this.openAtNight = props.openAtNight;
    this.openOnWeekends = props.openOnWeekends;
  }

  get userId() {
    return this.props.userId;
  }

  public static create(
    props: BarberProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ): Either<
    InvalidNameError | InvalidDescriptionError | InvalidPropError,
    Barber
  > {
    const nameOrError = Name.create(props.name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const descriptionOrError = Description.create(props.description);

    if (descriptionOrError.isLeft()) {
      return left(descriptionOrError.value);
    }

    const locationOrError = Prop.create(props.location);

    if (locationOrError.isLeft()) {
      return left(locationOrError.value);
    }

    const name: Name = nameOrError.value as Name;
    const location: Prop = locationOrError.value as Prop;
    const description: Description = descriptionOrError.value as Description;
    const images = props.images;
    const openAtNight = props.openAtNight;
    const openOnWeekends = props.openOnWeekends;
    const userId = props.userId;

    return right(
      new Barber(
        {
          name,
          location,
          description,
          images,
          openAtNight,
          openOnWeekends,
          userId,
        },
        id,
        createdAt,
        updatedAt
      )
    );
  }

  public static update(
    props: UpdateBarberProps
  ): Either<
    InvalidNameError | InvalidDescriptionError | InvalidPropError,
    Barber
  > {
    if (props.name) {
      const nameOrError = Name.create(props.name);

      if (nameOrError.isLeft()) {
        return left(nameOrError.value);
      }

      const name: Name = nameOrError.value as Name;

      Barber.prototype.name = name;
    }

    if (props.location) {
      const locationOrError = Prop.create(props.location);

      if (locationOrError.isLeft()) {
        return left(locationOrError.value);
      }

      const location: Prop = locationOrError.value as Prop;

      Barber.prototype.location = location;
    }

    if (props.description) {
      const descriptionOrError = Description.create(props.description);

      if (descriptionOrError.isLeft()) {
        return left(descriptionOrError.value);
      }

      const description: Description = descriptionOrError.value as Description;

      Barber.prototype.description = description;
    }

    if (props.openAtNight !== undefined) {
      const openAtNight = props.openAtNight;

      Barber.prototype.openAtNight = openAtNight;
    }

    if (props.openOnWeekends !== undefined) {
      const openOnWeekends = props.openOnWeekends;

      Barber.prototype.openOnWeekends = openOnWeekends;
    }

    return right(Barber.prototype);
  }

  // public static updatePassword(
  //   props: UpdateBarberPassword
  // ): Either<InvalidPasswordError, Barber> {
  //   const passwordOrError = Password.create(props.password);

  //   if (passwordOrError.isLeft()) {
  //     return left(passwordOrError.value);
  //   }

  //   const password: Password = passwordOrError.value as Password;

  //   Barber.prototype.password = password;

  //   return right(Barber.prototype);
  // }
}
