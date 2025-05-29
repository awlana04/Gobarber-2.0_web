import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import { DataType } from '@/infra/types/data-type';
import HTTPResponse from '@/infra/types/http-response';

type SigninBarberFormType = {
  name: string | any;
  location: string | any;
  description: string | any;
  file: File[];
  openAtNight: boolean;
  openOnWeekends: boolean;
};

export default class SigninBarberFormAPI extends APIBase {
  constructor(
    protected readonly fetchAPIdata: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {
    super(fetchAPIdata);
  }

  public async go(
    data: SigninBarberFormType
  ): Promise<{ server: HTTPResponse; barber?: DataType }> {
    const token = await this.manageDataInBrowser.getData('token');
    const user: DataType = await JSON.parse(
      await this.manageDataInBrowser.getData('user')
    );

    return await this.fetchAPIData
      .fetch(`/barbers/${user.user.id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          name: data.name,
          location: data.location,
          description: data.description,
          openAtNight: data.openAtNight,
          openOnWeekends: data.openOnWeekends,
          userId: user.user.id,
        },
      })
      .then(async (response) => {
        if (response.ok) {
          const barber = await response.json();

          const formData = new FormData();

          data.file.forEach((image) => {
            formData.append('images', image);
          });

          if (barber.value.id !== undefined) {
            await fetch(`http://localhost:3333/barbers/${barber.value.id}`, {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${token}`,
              },
              body: formData,
            });
          }

          if (response.ok) {
            await this.manageDataInBrowser.saveData(
              'barber',
              JSON.stringify(barber)
            );
          }

          return { server: response, barber };
        } else {
          return { server: response };
        }
      });
  }

  public async fake(data: SigninBarberFormType) {
    const user: DataType = JSON.parse(
      await this.manageDataInBrowser.getData('user')
    );

    if (user !== null || user !== undefined) {
      const barber = await this.fetchAPIData.fetch('/barbers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          data,
          userId: user.user.id,
        },
      });

      await this.manageDataInBrowser.saveData('barber', JSON.stringify(barber));
    } else {
      throw new Error('You must have a token to create a barber');
    }
  }
}
