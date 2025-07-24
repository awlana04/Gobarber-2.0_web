import barber from '@/domain/entities/barber';
import FetchAPIDataModel from '../adapters/models/fetch-api-data-model';
import APIBase from '../bases/api-base';
import {
  AppointmentDataType,
  BarberDataType,
  UserDataType,
} from '../types/data-type';
import { GetCookies } from '../libs/cookies-next-lib';

export default class DeleteAppointmentAPI extends APIBase {
  constructor(protected readonly fetchAPIData: FetchAPIDataModel) {
    super(fetchAPIData);
  }

  public async fake(
    id: string
  ): Promise<{ appointments: AppointmentDataType[] | null }> {
    const barber: BarberDataType = await GetCookies('barber');

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
