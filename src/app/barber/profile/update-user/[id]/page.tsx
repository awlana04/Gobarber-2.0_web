import { GetCookies } from '@/infra/libs/cookies-next-lib';
import UpdateUserWindow from '@/infra/windows/update-user-window';
// import Logout from '@/infra/utils/logout';
import UpdateUserScreen from '@/presentation/screens/update-user-screen';
// import { useRef } from 'react';

export default async function UpdateUser() {
  const user = await GetCookies('user');
  // const ref = useRef<HTMLInputElement>(null);

  return <UpdateUserWindow user={user} />;
}
