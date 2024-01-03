import { SigninBarberType } from '@/validations/SigninBarberForm';

import api from '@/services/api';

type SigninBarberFormHandlerType = SigninBarberType & {
  file: File[];
  isOpenAtNight: boolean;
  isOpenOnWeekends: boolean;
};

export const SigninBarberFormHandler = async ({
  name,
  location,
  description,
  file,
  isOpenAtNight,
  isOpenOnWeekends,
}: SigninBarberFormHandlerType) => {
  const token = localStorage.getItem('@GoBarber:token');
  const user = JSON.parse(localStorage.getItem('@GoBarber:user')!);

  api.defaults.headers.authorization = `Bearer ${token}`;

  const response = await api.post(`/barbers/${user.id}`, {
    name: name,
    location: location,
    description: description,
    openAtNight: isOpenAtNight,
    openOnWeekends: isOpenOnWeekends,
    userId: user.id,
  });

  const barber = response.data.value;

  const formData = new FormData();

  file.forEach((image) => {
    formData.append('images', image);
  });

  api.patch(`/barbers/${barber.id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  localStorage.setItem('@GoBarber:barber', JSON.stringify(barber));

  return { response };
};
