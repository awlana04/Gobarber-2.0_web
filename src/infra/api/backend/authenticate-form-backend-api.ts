import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';
import IFetchAPIData from '@/infra/interfaces/i-form-backend-api';

type AuthenticateFormType = {
  email: string;
  password: string;
};

type AuthenticateData = {
  user: {
    id: string;
    name: string;
    email: string;
    location: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    barber: object;
  };
  token: string;
  refreshToken: {
    id: string;
    expiresIn: number;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
  barber: object;
};

export default class AuthenticateFormBackendAPI {
  constructor(
    private readonly fetchAPIData: IFetchAPIData,
    private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {}

  public async run(
    data: AuthenticateFormType
  ): Promise<{ server: Response; user: AuthenticateData }> {
    return await this.fetchAPIData
      .fetch('/users/session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      })
      .then(async (response) => {
        const user = (await response.json()) as AuthenticateData;

        await this.manageDataInBrowser.clearAllData();

        if (response.ok) {
          await this.manageDataInBrowser.saveData(
            '@GoBarber:token',
            user.token
          );
          await this.manageDataInBrowser.saveData(
            '@GoBarber:user',
            JSON.stringify(user)
          );

          if (user.barber !== null) {
            await this.manageDataInBrowser.saveData(
              '@GoBarber:barber',
              JSON.stringify(user.barber)
            );
          }
        }
        return { server: response, user };
      });
  }
}
