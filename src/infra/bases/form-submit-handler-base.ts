import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import { FormFunctionsSubmitHandlerType } from '../types/form-data-types';

export default abstract class FormSubmitHandlerBase {
  constructor(private readonly formAPIBase: APIBaseInterface) {}

  public async submitHandler(
    props: FormFunctionsSubmitHandlerType
  ): Promise<void> {}
}
