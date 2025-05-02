import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import HTTPResponse from '@/infra/types/http-response';
import { DataType } from '@/infra/types/data-type';

type SigninFormDataType = {
  name: string;
  email: string;
  password: string | any;
  location: 'Somewhere Over the Rainbow';
  avatar: File | any;
};

export default class SigninFormAPI extends APIBase {
  constructor(
    protected readonly fetchAPIData: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {
    super(fetchAPIData);
  }

  public async go(
    data: SigninFormDataType
  ): Promise<{ server: HTTPResponse; user: DataType }> {
    return await this.fetchAPIData
      .fetch('/users/', {
        method: 'POST',
        data,
      })
      .then(async (response) => {
        const user: DataType = await response.json();

        await this.manageDataInBrowser.clearAllData();

        if (response.ok) {
          await this.manageDataInBrowser.saveData('token', user.token);
          await this.manageDataInBrowser.saveData('user', JSON.stringify(user));
        }

        return { server: response, user };
      });
  }

  public async fake(data: SigninFormDataType) {
    return await this.fetchAPIData.fetch('/users/').then(async (response) => {
      const users: DataType[] = await response.json();

      if (users.find((dataFetched) => dataFetched.user.email === data.email)) {
        throw new Error('User already exists');
      } else {
        const user = await this.fetchAPIData.fetch('/users/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data,
        });

        const token = `gobarber_fake_server_token-${Math.random().toExponential(12).toString()}`;

        await this.manageDataInBrowser.saveData('token', token);
        await this.manageDataInBrowser.saveData('user', user);
      }
    });
  }
}
