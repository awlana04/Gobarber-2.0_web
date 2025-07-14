import { BarberDataType } from '@/infra/types/data-type';

import APIBase from '@/infra/bases/api-base';

import HTTPResponse from '@/infra/types/http-response';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

type GetAllBarbersStorageMethodType = {
  user: any;
  userToken: string;
  setBarbers(value: BarberDataType[] | undefined): void;
};

export default class GetAllBarbersAPI extends APIBase {
  constructor(
    protected readonly fetchAPIData: FetchAPIDataModel,
    private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {
    super(fetchAPIData);
  }

  public async go(
    storageMethod: GetAllBarbersStorageMethodType
  ): Promise<{ server: HTTPResponse; barbers: BarberDataType[] }> {
    // const user = await this.manageDataInBrowser.getData('user');
    // const token = await this.manageDataInBrowser.getData('token');

    return await this.fetchAPIData
      .fetch(`/barbers/all/${storageMethod.user.id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${storageMethod.userToken}`,
        },
      })
      .then(async (response) => {
        const allBarbers = await response.json();

        if (response.ok) {
          storageMethod.setBarbers(allBarbers);
        }

        return { server: response, barbers: allBarbers };
      });
  }
}
