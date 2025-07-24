import { AppointmentDataType } from '@/infra/types/data-type';

import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

export default class DeleteAppointmentAPI extends APIBase {
  constructor(protected readonly fetchAPIData: FetchAPIDataModel) {
    super(fetchAPIData);
  }

  public async fake(
    id: string
  ): Promise<{ appointments: AppointmentDataType[] | null }> {
    return await this.fetchAPIData
      .fetch(`/appointments/${id}`, {
        method: 'DELETE',
      })
      .then(async (response) => {
        const appointments = await response.json();

        return { appointments };
      });
  }
}
