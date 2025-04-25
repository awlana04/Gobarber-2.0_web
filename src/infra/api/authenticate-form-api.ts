import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import HttpResponse from '@/infra/types/http-response';
import { DataType } from '@/infra/types/data-type';

type AuthenticateFormDataType = {
  email: string;
  password: string;
};

export default class AuthenticateFormAPI {
  constructor(
    private readonly fetchAPIData: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {}

  public async go(
    data: AuthenticateFormDataType
  ): Promise<{ server: HttpResponse; user: DataType }> {
    return await this.fetchAPIData
      .fetch('/users/session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      })
      .then(async (response) => {
        const user: DataType = await response.json();

        await this.manageDataInBrowser.clearAllData();

        if (response.ok) {
          await this.manageDataInBrowser.saveData('user', user.token);
          await this.manageDataInBrowser.saveData('user', JSON.stringify(user));

          if (user.barber !== null) {
            await this.manageDataInBrowser.saveData(
              'barber',
              JSON.stringify(user.barber)
            );
          }
        }

        return { server: response, user };
      });
  }

  public async fake(data: AuthenticateFormDataType) {
    return await this.fetchAPIData.fetch('/users').then(async (response) => {
      const user: AuthenticateFormDataType[] = await response.json();

      const selectedUser = user.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (selectedUser) {
        const token = `gobarber_fake_server_token-${Math.random().toExponential(12).toString()}`;

        await this.manageDataInBrowser.saveData('token', token);
        await this.manageDataInBrowser.saveData(
          'user',
          JSON.stringify(selectedUser)
        );
      } else {
        throw new Error('User not found');
      }
    });
  }
}
