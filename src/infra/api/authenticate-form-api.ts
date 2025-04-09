import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

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
    createdAt: Date;
    updatedAt: Date;
    barber: {
      id: string;
      name: string;
      location: string;
      description: string;
      images: [];
      openAtNight: boolean;
      openOnWeekends: boolean;
      userId: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
  token: string;
  refreshToken: {
    id: string;
    expiresIn: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };
  barber: {
    id: string;
    name: string;
    location: string;
    description: string;
    images: [];
    openAtNight: boolean;
    openOnWeekends: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export default class AuthenticateFormAPI {
  constructor(
    private readonly fetchAPIData: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {}

  public async go(
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

  public async fake(data: AuthenticateFormType) {
    return await this.fetchAPIData.fetch('/users').then(async (response) => {
      const user = (await response.json()) as Array<AuthenticateFormType>;

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
