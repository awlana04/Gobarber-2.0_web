'use server';

import { cookies } from 'next/headers';

export async function GetCookies(name: string) {
  'use server';
  const cookiesStore = await cookies();

  return JSON.parse(cookiesStore.get(name)!.value);
}

export async function SetCookies(
  name: string,
  data: any,
  options?: { expires: number }
) {
  'use server';

  const cookiesStore = await cookies();

  cookiesStore.set(name, JSON.stringify(data), options);
}

export async function DeleteCookies(name: string) {
  'use server';

  const cookiesStore = await cookies();

  cookiesStore.delete(name);
}
