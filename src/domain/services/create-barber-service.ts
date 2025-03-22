import ServiceModel from '@/domain/bases/service-base';

import { Either, left, right } from '@/domain/utils/either';

import InvalidNameError from '@/domain/errors/invalid-name-error';
import InvalidDescriptionError from '@/domain/errors/invalid-description-error';
import InvalidPropError from '@/domain/errors/invalid-prop-error';

import Barber from '@/entities/barber';

import { BarberType } from '@/domain/types/entities/barber-type';

export default class CreateBarberService implements ServiceModel<BarberType> {
  public handle({
    name,
    location,
    description,
    images,
    openAtNight,
    openOnWeekends,
    userId,
  }: BarberType): Either<
    InvalidNameError | InvalidDescriptionError | InvalidPropError,
    BarberType
  > {
    const barberOrError: Either<
      InvalidNameError | InvalidDescriptionError | InvalidPropError,
      BarberType
    > = new Barber().create({
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
      userId,
    });

    if (barberOrError.isLeft()) {
      return left(barberOrError.value);
    }

    return right(barberOrError.value);
  }
}
