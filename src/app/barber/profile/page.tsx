import { GetCookies } from '@/infra/libs/cookies-next-lib';
import BarberProfileWindow from '@/infra/windows/barber-profile-window';

export default async function Profile() {
  const user = await GetCookies('user');

  return <BarberProfileWindow user={user} />;
}
