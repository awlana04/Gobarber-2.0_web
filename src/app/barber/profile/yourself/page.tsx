import { GetCookies } from '@/infra/libs/cookies-next-lib';
import Logout from '@/infra/utils/logout';
import ViewYourselfBarberScreen from '@/presentation/screens/view-yourself-barber-screen';

export default async function ViewYourselfBarber() {
  const user = await GetCookies('user');
  const barber = await GetCookies('barber');

  return (
    <ViewYourselfBarberScreen
      user={user}
      barber={barber}
      // logoutOnclick={Logout}
    />
  );
}
