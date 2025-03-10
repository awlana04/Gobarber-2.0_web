import { Either } from '@/domain/shared/either';
import InvalidPropError from '@/domain/shared/errors/invalid-prop-error';
import { BarberType } from '@/domain/types/barber-type';
import { UserType } from '@/domain/types/user-type';

export type EntityType = UserType | BarberType;
export default abstract class Entity<T = EntityType> {
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
}
