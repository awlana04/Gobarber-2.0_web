'use server';

import { cookies } from 'next/headers';

import { KeyNameType, ApplicationName } from '../types/key-name-type';

const applicationName: ApplicationName = '@GoBarber-2.0';

export async function GetCookies(keyName: KeyNameType) {
  const cookiesStore = await cookies();

  return JSON.parse(cookiesStore.get(`${applicationName}:${keyName}`)!.value);
}

export async function SetCookies(
  name: string,
  data: any,
  options?: { expires: number }
) {
  const cookiesStore = await cookies();

  cookiesStore.set(name, JSON.stringify(data), options);
}

export async function DeleteCookies(name: string) {
  const cookiesStore = await cookies();

  cookiesStore.delete(name);
}
