export default abstract class Entity<T> {
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
