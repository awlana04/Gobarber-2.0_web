import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

export default class ManageDataInBrowser implements ManageDataInBrowserModel {
  async getData(keyName: string): Promise<any> {
    return localStorage.getItem(keyName);
  }

  async saveData(keyName: string, data: any): Promise<void> {
    localStorage.setItem(keyName, data);
  }

  async updateData(keyName: string, data: any): Promise<any> {
    const storedData = this.getData(keyName);

    if (!storedData) {
      throw new Error('No stored data in browser with this key name!');
    } else {
      localStorage.removeItem(keyName);

      return this.saveData(keyName, data);
    }
  }

  async deleteData(keyName: string): Promise<void> {
    localStorage.removeItem(keyName);
  }

  async clearAllData(): Promise<void> {
    localStorage.clear();
  }
}
