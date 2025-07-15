import FormSubmitHandlerBase from '@/infra/bases/form-submit-handler-base';

import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import { GetAllBarbersDataType } from '@/infra/types/form-data-types';

export default class GetAllBarbersHandler extends FormSubmitHandlerBase {
  constructor(private readonly authenticateFormAPI: APIBaseInterface) {
    super(authenticateFormAPI);
  }

  public async submitHandler({
    updateStatefulValue,
    addToast,
  }: GetAllBarbersDataType): Promise<void> {
    process.env.NEXT_PUBLIC_ENV === 'dev' &&
      (await this.authenticateFormAPI
        .go(updateStatefulValue)
        .then(async (result) => {
          return result.barbers;
        }));
  }
}
