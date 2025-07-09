import { cookies } from 'next/headers';

export default async function DeleteCookies() {
  const cookiesStore = await cookies();

  cookiesStore.delete('@GoBarber-2.0:user');
  cookiesStore.delete('@GoBarber-2.0:token');
  cookiesStore.delete('@GoBarber-2.0:barber');
}
