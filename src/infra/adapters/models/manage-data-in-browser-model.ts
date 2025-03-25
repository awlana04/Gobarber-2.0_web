export default interface ManageDataInBrowserModel {
  getData(keyName: string): Promise<any>;
  saveData(keyName: string, data: any): Promise<void>;
  updateData(keyName: string, data: any): Promise<any>;
  deleteData(keyName: string): Promise<void>;
  clearAllData(): Promise<void>;
}
