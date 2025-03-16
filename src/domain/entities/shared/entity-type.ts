export type EntityType<T> = T & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type EntityMappedType<T> = {
  [EntityType in keyof T]: T[EntityType];
};
