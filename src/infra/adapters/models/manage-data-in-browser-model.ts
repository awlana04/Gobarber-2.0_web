type KeyNameType = 'token' | 'user' | 'barber';

export default interface ManageDataInBrowserModel {
  getData(keyName: KeyNameType): Promise<any>;
  saveData(keyName: KeyNameType, data: any): Promise<void>;
  updateData(keyName: KeyNameType, data: any): Promise<any>;
  deleteData(keyName: KeyNameType): Promise<void>;
  clearAllData(): Promise<void>;
}
