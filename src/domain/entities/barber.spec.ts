import crypto from 'crypto';

import Barber from './barber';

describe('Barber entity', () => {
  const name = 'John Doe Barber';
  const location = 'Somewhere Over the Heaven';
  const description = 'This is a really good place, please believe me :)';
  const openAtNight = false;
  const openOnWeekends = false;

  it('should be able to create a new barber', () => {
    const name = 'John Doe Barber';
    const location = 'Somewhere Into the Pocket';
    const description = 'This is a really good place, please believe me :)';
    const openAtNight = true;
    const openOnWeekends = true;
    const userId = crypto.randomUUID();

    const response = Barber.create({
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
      userId,
    }).value as Barber;

    expect(response.name.value).toEqual(name);
    expect(response.location.value).toEqual(location);
    expect(response.description.value).toEqual(description);
    expect(response.openAtNight).toEqual(openAtNight);
    expect(response.openOnWeekends).toEqual(openOnWeekends);
    expect(response.userId).toEqual(userId);

    expect(response).toBeInstanceOf(Barber);
  });

  it('should be able to update the barber name', () => {
    const response = Barber.update({
      name,
    }).value as Barber;

    expect(response.name.value).toEqual(name);
  });

  it('should be able to update the barber location', () => {
    const response = Barber.update({ location }).value as Barber;

    expect(response.location.value).toEqual(location);
  });

  it('should be able to update the barber description', () => {
    const response = Barber.update({ description }).value as Barber;

    expect(response.description.value).toEqual(description);
  });

  it('should be able to update the barber open at night boolean', () => {
    const response = Barber.update({ openAtNight }).value as Barber;

    expect(response.openAtNight).toEqual(openAtNight);
  });

  it('should be able to update the open on weekends boolean', () => {
    const response = Barber.update({ openOnWeekends }).value as Barber;

    expect(response.openOnWeekends).toEqual(openOnWeekends);
  });

  it('should be able to update the barber', () => {
    const response = Barber.update({
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
    }).value as Barber;

    expect(response.name.value).toEqual(name);
    expect(response.location.value).toEqual(location);
    expect(response.description.value).toEqual(description);
    expect(response.openAtNight).toEqual(openAtNight);
    expect(response.openOnWeekends).toEqual(openOnWeekends);
  });
});
