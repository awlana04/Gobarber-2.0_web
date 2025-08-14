import APIBase from '@/infra/bases/api-base';

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

import { GetCookies } from '@/infra/libs/cookies-next-lib';

import { UserDataType } from '@/infra/types/data-type';

export default class UpdateUserFormAPI extends APIBase {
  constructor(protected readonly fetchAPIData: FetchAPIDataModel) {
    super(fetchAPIData);
  }

  public async fake(data: { password: string }) {
    const user: UserDataType = await GetCookies('user');

    return await this.fetchAPIData.fetch(`/users/${user.id}`, {
      method: 'PUT',
      jsonContent: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        location: user.location,
        password: data.password,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: new Date(),
      },
    });
  }
}
