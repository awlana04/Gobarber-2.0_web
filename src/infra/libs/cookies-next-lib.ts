'use server';

import { cookies } from 'next/headers';

export async function GetCookies(name: string) {
  const cookiesStore = await cookies();

  return JSON.parse(cookiesStore.get(name)!.value);
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
