'use server';

import { cookies } from 'next/headers';

type KeyNameType = 'token' | 'user' | 'barber';

const applicationName = '@GoBarber-2.0';

export default async function GetCookies(keyName: KeyNameType) {
  const cookiesStore = await cookies();

  cookiesStore.get(`${applicationName}:${keyName}`);
}
