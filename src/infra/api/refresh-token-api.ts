import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import HTTPResponse from '@/infra/types/http-response';

export default class RefreshTokenAPI extends APIBase {
  constructor(
    protected readonly fetchAPIData: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {
    super(fetchAPIData);
  }

  public async go(data: {
    refresh_token: string;
  }): Promise<{ server: HTTPResponse; token: string }> {
    return await this.fetchAPIData
      .fetch('/refresh-tokens/', {
        jsonContent: true,
        method: 'POST',
        data,
      })
      .then(async (response) => {
        const token: string = await response.json();

        console.log(data.refresh_token, token);

        await this.manageDataInBrowser.deleteData('token');
        await this.manageDataInBrowser.saveData('token', token);

        return { server: response, token };
      });
  }
}
