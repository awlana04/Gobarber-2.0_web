type SigninBarberFormType = {
  name: string | any;
  location: string | any;
  description: string | any;
  file: File[];
  openAtNight: boolean;
  openOnWeekends: boolean;
};

type SigninBarberType = {
  value: {
    id: string;
    name: string | any;
    location: string | any;
    description: string | any;
    images: [];
    openAtNight: boolean;
    openOnWeekends: boolean;
    createdAt: string;
    updatedAt: string;
    userId: string;
  };
};

export const SigninBarberFormHandler = async (data: SigninBarberFormType) => {
  const token = localStorage.getItem('@GoBarber:token');
  const user = JSON.parse(localStorage.getItem('@GoBarber:user')!);

  const response = await fetch(
    `http://localhost:3333/barbers/${user.user.id}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  ).then(async (response) => {
    if (response.ok) {
      const barber = (await response.json()) as SigninBarberType;

      const formData = new FormData();

      data.file.forEach((image) => {
        formData.append('images', image);
      });

      if (barber.value.id) {
        await fetch(`http://localhost:3333/barbers/${barber.value.id}`, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
      }

      if (response.ok) {
        localStorage.setItem('@GoBarber:barber', JSON.stringify(barber));
      }

      return { server: response, barber };
    } else {
      return response.status;
    }
  });

  return { response };
};
