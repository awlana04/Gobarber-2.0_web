'use server';

import { cookies } from 'next/headers';

type KeyNameType = 'token' | 'user' | 'barber';

const applicationName = '@GoBarber-2.0';

export default async function SetCookies(keyName: KeyNameType, data: any) {
  const cookiesStore = await cookies();

  cookiesStore.set(`${applicationName}:${keyName}`, data);
}
