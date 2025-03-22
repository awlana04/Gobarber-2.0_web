import crypto from 'crypto';

import Entity from '@/domain/bases/entity-base';

import { Either, left, right } from '@/domain/utils/either';
import TypeGuard from '@/domain/utils/type-guard';

import InvalidNameError from '@/domain/errors/invalid-name-error';
import InvalidDescriptionError from '@/domain/errors/invalid-description-error';
import InvalidPropError from '@/domain/errors/invalid-prop-error';

import { EntityMappedType, EntityType } from '@/domain/types/entity-type';

import { BarberType } from '@/domain/types/entities/barber-type';

export default class Barber implements Entity<BarberType> {
  public create(
    props: BarberType
  ): Either<
    InvalidPropError | InvalidNameError | InvalidDescriptionError,
    EntityMappedType<EntityType<BarberType>>
  > {
    if (TypeGuard.checkName(props.name).isLeft()) {
      return left(new InvalidNameError(props.name));
    }

    if (TypeGuard.checkDescription(props.description).isLeft()) {
      return left(new InvalidDescriptionError(props.description));
    }

    if (TypeGuard.checkProp(props.description).isLeft()) {
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
