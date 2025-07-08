import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import RefreshTokenAPI from './refresh-token-api';

import HTTPResponse from '@/infra/types/http-response';
import { DataType } from '@/infra/types/data-type';

type AuthenticateFormDataType = {
  email: string;
  password: string;
};

export default class AuthenticateFormAPI extends APIBase {
  constructor(
    protected readonly fetchAPIData: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel,
    private readonly refreshTokenAPI: RefreshTokenAPI
  ) {
    super(fetchAPIData);
  }

  public async go(
    data: AuthenticateFormDataType
  ): Promise<{ server: HTTPResponse; user: DataType }> {
    return await this.fetchAPIData
      .fetch('/users/session/', {
        jsonContent: true,
        method: 'POST',
        data,
      })
      .then(async (response) => {
        const user: DataType = await response.json();

        // if the user is making the Sign in again, we must ensure there's no other stored data in browser
        await this.manageDataInBrowser.clearAllData();

        if (response.ok) {
          await this.manageDataInBrowser.saveData('user', user.user);

          // verify if the user is a Barber to save its data into a new different storage data
          if (user.barber !== null) {
            await this.manageDataInBrowser.saveData('barber', user.barber);
          }

          // generate a refresh token to get authenticated in the application
          await this.refreshTokenAPI.go({
            refresh_token: user.refreshToken.id,
          });
        }

        return { server: response, user };
      });
  }

  public async fake(data: AuthenticateFormDataType) {
    return await this.fetchAPIData.fetch('/users').then(async (response) => {
      const user: AuthenticateFormDataType[] = await response.json();

      // search in the fake database for the provided email and return it if exists
      const selectedUser = user.find(
        (user) => user.email === data.email && user.password === data.password
      );

      // if there's the selected user, then save the data into the browser and create a fake Token
      if (selectedUser) {
        const token = `gobarber_fake_server_token-${Math.random().toExponential(12).toString()}`;

        await this.manageDataInBrowser.saveData('token', token);
        await this.manageDataInBrowser.saveData('user', selectedUser);

        // ** FUTURE IMPLEMENTATION **
        // ** By now is has not been implemented the check analysis for a Barber **
        // ** FUTURE IMPLEMENTATION **
      } else {
        // if there's no user in fake database, throw an Error to be catch in the handler and send it back properly to the user by a toast
        throw new Error('User not found');
      }
    });
  }
}
