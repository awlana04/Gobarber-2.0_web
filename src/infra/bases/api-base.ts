import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

export default abstract class APIBase {
  constructor(protected readonly fetchAPIData: FetchAPIDataModel) {}

  public async go(data?: any): Promise<any> {}
  public async fake(data?: any) {}
}
