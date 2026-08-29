import { GetCookies } from '@/infra/libs/cookies-next-lib';

import SigninBarberWindow from '@/infra/windows/signin-barber-window';

export default async function Signin() {
  const user = await GetCookies('user');
  const token = await GetCookies('token');

  return <SigninBarberWindow user={user} token={token} />;
}
