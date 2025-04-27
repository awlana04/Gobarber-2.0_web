// ManageDataInBrowser's implementation adapter provides the ability to save data in the browser
// nowadays we're using localStorage to store the data, but if we need to change it tomorrow to Cookies strategy, we'd just need to play around here
// We're providing a pre-established application name to be used as an identification of our storage method and a Key Name Type to set out the storages' type

import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

type KeyNameType = 'token' | 'user' | 'barber';

const applicationName = '@GoBarber-2.0';

export default class ManageDataInBrowser implements ManageDataInBrowserModel {
  async getData(keyName: KeyNameType): Promise<any> {
    return localStorage.getItem(`${applicationName}:${keyName}`);
  }

  async saveData(keyName: KeyNameType, data: any): Promise<void> {
    localStorage.setItem(`${applicationName}:${keyName}`, data);
  }

  async updateData(keyName: KeyNameType, data: any): Promise<any> {
    const storedData = await this.getData(keyName);

    if (!storedData) {
      throw new Error('No stored data in browser with this key name!');
    } else {
      localStorage.removeItem(`${applicationName}:${keyName}`);

      return await this.saveData(keyName, data);
    }
  }

  async deleteData(keyName: KeyNameType): Promise<void> {
    localStorage.removeItem(`${applicationName}:${keyName}`);
  }

  async clearAllData(): Promise<void> {
    localStorage.clear();
  }
}
