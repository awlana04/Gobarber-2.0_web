import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

export default abstract class APIBase implements APIBaseInterface {
  constructor(protected readonly fetchAPIData: FetchAPIDataModel) {}

  public async go(data?: any): Promise<any> {}
  public async fake(data?: any) {}
}
