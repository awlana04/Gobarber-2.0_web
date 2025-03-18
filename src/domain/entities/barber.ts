import crypto from 'crypto';

import Entity from './shared/entity';

import { Either, left, right } from '@/utils/either';
import TypeGuard from '../utils/type-guard';

import InvalidNameError from '@/domain/errors/invalid-name-error';
import InvalidDescriptionError from '@/domain/errors/invalid-description-error';
import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { BarberType } from '../types/barber-type';

import { EntityMappedType, EntityType } from './shared/entity-type';

export default class Barber implements Entity<BarberType> {
  public create(
    props: BarberType
  ): Either<
    InvalidPropError | (InvalidNameError | InvalidDescriptionError),
    EntityMappedType<EntityType<BarberType>>
  > {
    if (TypeGuard.checkName(props.name).value instanceof InvalidNameError) {
      return left(new InvalidNameError(props.name));
    }

    if (
      TypeGuard.checkDescription(props.description).value instanceof
      InvalidDescriptionError
    ) {
      return left(new InvalidDescriptionError(props.description));
    }

    if (
      TypeGuard.checkProp(props.description).value instanceof InvalidPropError
    ) {
      return left(new InvalidPropError(props.description));
    }

    return right({
      id: crypto.randomUUID(),
      name: props.name,
      location: props.location,
      description: props.description,
      images: props.images,
      openAtNight: props.openAtNight,
      openOnWeekends: props.openOnWeekends,
      userId: props.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
