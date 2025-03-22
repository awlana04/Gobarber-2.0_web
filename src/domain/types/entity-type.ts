import { BarberType } from './entities/barber-type';
import { UserType } from './entities/user-type';

export type DefaultEntitiesType = UserType | BarberType;

export type EntityType<T = DefaultEntitiesType> = T & {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export type EntityMappedType<T = DefaultEntitiesType> = {
  [EntityType in keyof T]: T[EntityType];
};
