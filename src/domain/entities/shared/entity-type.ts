export type EntityType<T> = T & {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export type EntityMappedType<T> = {
  [EntityType in keyof T]: T[EntityType];
};
