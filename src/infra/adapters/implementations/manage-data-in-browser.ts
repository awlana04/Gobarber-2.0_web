// ManageDataInBrowser's implementation adapter provides the ability to save data in the browser
// nowadays we're using localStorage to store the data, but if we need to change it tomorrow to Cookies strategy, we'd just need to play around here
// We're providing a pre-established application name to be used as an identification of our storage method and a Key Name Type to set out the storages' type

import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import {
  DeleteCookies,
  GetCookies,
  SetCookies,
} from '@/infra/libs/cookies-next-lib';

type KeyNameType = 'token' | 'user' | 'barber';

const applicationName = '@GoBarber-2.0';

export default class ManageDataInBrowser implements ManageDataInBrowserModel {
  async getData(keyName: KeyNameType): Promise<any> {
    // return localStorage.getItem(`${applicationName}:${keyName}`);
    // const cookiesStore = await cookies();
    // return cookiesStore.get(`${applicationName}:${keyName}`);
    await GetCookies(`${applicationName}:${keyName}`);
  }

  async saveData(
    keyName: KeyNameType,
    data: any,
    options?: any
  ): Promise<void> {
    // keyName !== 'token'
    //   ? localStorage.setItem(
    //       `${applicationName}:${keyName}`,
    //       JSON.stringify(data)
    //     )
    //   : localStorage.setItem(`${applicationName}:${keyName}`, data);
    // const cookiesStore = await cookies();
    // cookiesStore.set(`${applicationName}:${keyName}`, data);

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
    //   localStorage.removeItem(`${applicationName}:${keyName}`);
    //   return await this.saveData(keyName, data);
    // }
    // if (!storedData) {
    //   throw new Error('No stored data in browser with this key name!');
    // } else {
    //   const cookiesStore = await cookies();
    //   cookiesStore.delete(`${applicationName}:${keyName}`);
    //   return await this.saveData(keyName, data);
    // }

    const storedData = await this.getData(keyName);

    if (!storedData) {
      throw new Error('No stored data in browser with this key name!');
    } else {
      await DeleteCookies(`${applicationName}:${keyName}`);
      await SetCookies(`${applicationName}:${keyName}`, data, options);
    }
  }

  async deleteData(keyName: KeyNameType): Promise<void> {
    // localStorage.removeItem(`${applicationName}:${keyName}`);
    // const cookiesStore = await cookies();
    // cookiesStore.delete(`${applicationName}:${keyName}`);
    await DeleteCookies(`${applicationName}:${keyName}`);
  }

  async clearAllData(): Promise<void> {
    // localStorage.clear();
    // const cookiesStore = await cookies();
    // cookiesStore.delete(`${applicationName}:token`);
    // cookiesStore.delete(`${applicationName}:user`);
    // cookiesStore.delete(`${applicationName}:barber`);
    await DeleteCookies(`${applicationName}:token`);
    await DeleteCookies(`${applicationName}:user`);
    await DeleteCookies(`${applicationName}:barber`);
  }
}
