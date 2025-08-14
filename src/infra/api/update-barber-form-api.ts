import { BarberDataType } from '@/infra/types/data-type';

import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';
import ManageDataInBrowserModel from '@/adapters/models/manage-data-in-browser-model';

import { GetCookies } from '@/infra/libs/cookies-next-lib';

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

    return await this.fetchAPIData.fetch(`/barbers/${barber.id}`, {
      method: 'PUT',
      jsonContent: true,
      data: {
        id: barber.id,
        name: barber.name,
        location: data.location ? data.location : barber.location,
        description: data.description ? data.description : barber.description,
        openAtNight: data.openAtNight,
        openOnWeekends: data.openOnWeekends,
        images: barber.images,
        userId: barber.userId,
        user: barber.user,
        createdAt: barber.createdAt,
        updatedAt: new Date(),
      },
    });
  }
}
