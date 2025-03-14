import Name from '../entities/modules/name';
import { Either, left, right } from '../shared/either';
import InvalidNameError from '../shared/errors/invalid-name-error';

export function NameOrErrorFunction() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    console.log(target, key, descriptor.value);

    // descriptor.value = function (...args: any[]) {
    //   // const nameOrError = Name.create(target);

    //   // if (nameOrError.isLeft()) {
    //   //   return left(nameOrError.value);
    //   // }

    //   console.log(target, key);

    //   originalMethod.apply(this, args);
    // };

    return descriptor;
  };
}
