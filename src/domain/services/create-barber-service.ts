import { Either, left, right } from '../shared/either';

import InvalidNameError from '../shared/errors/invalid-name-error';
import InvalidDescriptionError from '../shared/errors/invalid-description-error';
import InvalidPropError from '../shared/errors/invalid-prop-error';

import Barber from '../entities/barber';

interface ICreateBarberServiceRequest {
  name: string;
  location: string;
  description: string;
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
}

export default class CreateBarberService {
  public async handle({
    name,
    location,
    description,
    openAtNight,
    openOnWeekends,
    userId,
  }: ICreateBarberServiceRequest): Promise<
    Either<
      InvalidNameError | InvalidDescriptionError | InvalidPropError,
      Barber
    >
  > {
    const barberOrError: Either<
      InvalidNameError | InvalidDescriptionError | InvalidPropError,
      Barber
    > = Barber.create({
      name,
      location,
      description,
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
