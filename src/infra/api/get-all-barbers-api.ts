import { BarberDataType } from '@/infra/types/data-type';

import APIBase from '@/infra/bases/api-base';

import { UpdateStatefulValueType } from '@/infra/types/update-stateful-value-mapped-types';
import HTTPResponse from '@/infra/types/http-response';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

import { GetCookies } from '@/infra/libs/cookies-next-lib';

export default class GetAllBarbersAPI extends APIBase {
  constructor(protected readonly fetchAPIData: FetchAPIDataModel) {
    super(fetchAPIData);
  }

  public async go(
    updateStatefulValue: UpdateStatefulValueType
  ): Promise<{ server: HTTPResponse; barbers: BarberDataType[] }> {
    const user = await GetCookies('user');
    const token = await GetCookies('token');

    return await this.fetchAPIData
      .fetch(`/barbers/all/${user.id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        const allBarbers = await response.json();

        if (response.ok) {
          updateStatefulValue.setBarbers(allBarbers);
        }

        return { server: response, barbers: allBarbers };
      });
  }

  public async fake(updateStatefulValue: UpdateStatefulValueType) {
    return await this.fetchAPIData
      .fetch('/barbers/', {
        method: 'GET',
      })
      .then(async (response) => {
        const allBarbers = await response.json();

        if (response.ok) {
          updateStatefulValue.setBarbers(allBarbers);
        }
      });
  }
}
