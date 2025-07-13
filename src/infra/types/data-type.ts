import { EntityMappedType, EntityType } from '@/domain/types/entity-type';
import { UserType } from '@/domain/types/entities/user-type';
import { BarberType } from '@/domain/types/entities/barber-type';

export type RefreshTokenDataType = EntityMappedType<{
  id: string;
  expiresIn: number;
  userId: string;
  createdAt: Date;
  updateAt: Date;
}>;

export type UserDataType = EntityMappedType<EntityType<UserType>>;
export type BarberDataType = EntityMappedType<EntityType<BarberType>> & {
  user: UserDataType;
};

export type DataType = {
  user: UserDataType;
  token: string;
  refreshToken: RefreshTokenDataType;
  barber: BarberDataType;
};
