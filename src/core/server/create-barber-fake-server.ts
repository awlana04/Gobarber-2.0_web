type SigninBarberFakeServerType = {
  barberName: string;
  location: string;
  description: string;
  images: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
};

export const CreateBarberFakeServer = async ({
  barberName,
  location,
  description,
  images,
  openAtNight,
  openOnWeekends,
}: SigninBarberFakeServerType) => {
  const user = JSON.parse(localStorage.getItem('@GoBarber:user')!);

  if (user !== null || user !== undefined) {
    const barber = await fetch('http://localhost:4000/barbers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        barberName,
        location,
        description,
        images,
        openAtNight,
        openOnWeekends,
        userId: user.id,
      }),
    });

    localStorage.setItem('@GoBarber:barber', JSON.stringify(barber));
  } else {
    alert('You must have a token to create a barber');
  }
};
