import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import RefreshTokenAPI from './refresh-token-api';

import HTTPResponse from '@/infra/types/http-response';
import { DataType } from '@/infra/types/data-type';

type SigninFormDataType = {
  name: string;
  email: string;
  password: string | any;
  location: string;
  avatar: File | any;
};

export default class SigninFormAPI extends APIBase {
  constructor(
    protected readonly fetchAPIData: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel,
    private readonly refreshTokenAPI: RefreshTokenAPI
  ) {
    super(fetchAPIData);
  }

  public async go(
    data: SigninFormDataType & {
      isBarberSelected: boolean;
    }
  ): Promise<{ server: HTTPResponse; user: DataType }> {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('location', data.location);
    formData.append('avatar', data.avatar);

    return await this.fetchAPIData
      .fetch('/users/', {
        jsonContent: false,
        method: 'POST',
        data: formData,
      })
      .then(async (response) => {
        const user = await response.json();

        await this.manageDataInBrowser.clearAllData();

        if (response.ok) {
          await this.refreshTokenAPI.go({
            refresh_token: user.value.refreshToken.id,
          });

          await this.manageDataInBrowser.saveData('user', user);
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
          jsonContent: true,
          method: 'POST',
          data,
        });

        const token = `gobarber_fake_server_token-${Math.random().toExponential(12).toString()}`;

        await this.manageDataInBrowser.saveData('token', token);
        await this.manageDataInBrowser.saveData('user', user);
      }
    });
  }
}
