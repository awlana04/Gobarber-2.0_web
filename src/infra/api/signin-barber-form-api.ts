import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import HTTPResponse from '@/infra/types/http-response';

import { DataType, UserDataType } from '@/infra/types/data-type';

type SigninBarberFormType = {
  name: string | any;
  location: string | any;
  description: string | any;
  file: File[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  cookies: {
    user: UserDataType;
    token: string;
  };
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
    return await this.fetchAPIData
      .fetch(`/barbers/${data.cookies.user.id}`, {
        jsonContent: true,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${data.cookies.token}`,
        },
        data: {
          name: data.name,
          location: data.location,
          description: data.description,
          openAtNight: data.openAtNight,
          openOnWeekends: data.openOnWeekends,
          userId: data.cookies.user.id,
        },
      })
      .then(async (response) => {
        if (response.ok) {
          const barber = await response.json();

          const formData = new FormData();

          data.file.forEach((image) => {
            formData.append('images', image);
          });

          if (barber.value) {
            await this.fetchAPIData
              .fetch(`/barbers/${barber.value.id}`, {
                method: 'PATCH',
                headers: {
                  Authorization: `Bearer ${data.cookies.token}`,
                },
                data: formData,
              })
              .then(async (imagesResponse) => {
                if (imagesResponse.ok) {
                  const barberWithImages = await imagesResponse.json();

                  await this.manageDataInBrowser.saveData(
                    'barber',
                    barberWithImages
                  );
                }
              });
          }

          if (response.ok) {
            await this.manageDataInBrowser.saveData('barber', barber);
          }

          return { server: response, barber };
        } else {
          return { server: response };
        }
      });
  }

  public async fake(data: SigninBarberFormType) {
    // const user: DataType = JSON.parse(
    //   await this.manageDataInBrowser.getData('user')
    // );

    if (data.cookies.user !== null || data.cookies.user !== undefined) {
      const barber = await this.fetchAPIData.fetch('/barbers/', {
        jsonContent: true,
        method: 'POST',
        data: {
          data,
          userId: data.cookies.user.id,
        },
      });

      await this.manageDataInBrowser.saveData('barber', barber);
    } else {
      throw new Error('You must have a token to create a barber');
    }
  }
}
