import User from '../entities/user';
import { UserType } from '../types/user-type';

import CreateBarberService from './create-barber-service';

describe('Create barber service', () => {
  const user = new User().create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as UserType;

  console.log(user);

  it('should be able to create a new barber', () => {
    const createBarberService = new CreateBarberService();

    const name = 'John Doe Barber';
    const location = 'Somewhere Into the Pocket';
    const description = 'This is a really good place, please believe me :)';
    const openAtNight = true;
    const openOnWeekends = true;

    const barber = createBarberService.handle({
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
      userId: '12345678',
    });

    expect(barber).toBeDefined();
  });
});
