// ManageDataInBrowser's implementation adapter provides the ability to save data in the browser
// We're providing a pre-established application name to be used as an identification of our storage method and a Key Name Type to set out the storages' type

import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import { DeleteCookies, SetCookies } from '@/infra/libs/cookies-next-lib';

import { KeyNameType, ApplicationName } from '@/infra/types/key-name-type';

const applicationName: ApplicationName = '@GoBarber-2.0';

export default class ManageDataInBrowser implements ManageDataInBrowserModel {
  async saveData(
    keyName: KeyNameType,
    data: any,
    options?: any
  ): Promise<void> {
    await SetCookies(`${applicationName}:${keyName}`, data, options);
  }

  async updateData(
    keyName: KeyNameType,
    data: any,
    options?: any
  ): Promise<any> {
    // const storedData = await this.getData(keyName);

    // if (!storedData) {
    //   throw new Error('No stored data in browser with this key name!');
    // } else {
    await DeleteCookies(`${applicationName}:${keyName}`);
    await SetCookies(`${applicationName}:${keyName}`, data, options);
    // }
  }

  async deleteData(keyName: KeyNameType): Promise<void> {
    await DeleteCookies(`${applicationName}:${keyName}`);
  }

  async clearAllData(): Promise<void> {
    await DeleteCookies(`${applicationName}:token`);
    await DeleteCookies(`${applicationName}:user`);
    await DeleteCookies(`${applicationName}:barber`);
  }
}
