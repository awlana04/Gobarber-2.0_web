import FetchAPIDataModel from '../adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '../adapters/models/manage-data-in-browser-model';
import APIBase from '../bases/api-base';
import { GetCookies } from '../libs/cookies-next-lib';
import { BarberDataType } from '../types/data-type';

type UpdateBarberFormType = {
  location?: string | any;
  description?: string | any;
  file?: File[];
  openAtNight?: boolean;
  openOnWeekends?: boolean;
};

export default class UpdateBarberFormAPI extends APIBase {
  constructor(
    protected readonly fetchAPIData: FetchAPIDataModel
    // private readonly manageDataInBrowser: ManageDataInBrowserModel
  ) {
    super(fetchAPIData);
  }

  public async fake(data: UpdateBarberFormType) {
    const barber: BarberDataType = await GetCookies('barber');
    console.log(barber.id);

    return await this.fetchAPIData
      .fetch(`/barbers/${barber.id}`, {
        method: 'PUT',
        jsonContent: true,
        data,
      })
      .then(async (response) => {
        const barberUpdated = await response.json();

        console.log(barberUpdated);

        return barberUpdated;
      });
  }
}
