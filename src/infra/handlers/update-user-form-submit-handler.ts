import FormSubmitHandlerBase from '@/infra/bases/form-submit-handler-base';

import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import { UpdateUserFormDataType } from '@/infra/types/form-data-types';

export default class UpdateUserFormSubmitHandler extends FormSubmitHandlerBase {
  constructor(private readonly updateUserFormAPI: APIBaseInterface) {
    super(updateUserFormAPI);
  }

  public async submitHandler({
    data,
    addToast,
  }: UpdateUserFormDataType): Promise<void> {
    await this.updateUserFormAPI.fake(data);
  }
}
