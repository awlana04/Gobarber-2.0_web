import { redirect } from 'next/navigation';

import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';

export default async function Logout() {
  await new ManageDataInBrowser().clearAllData();

  redirect('../../logon');
}
