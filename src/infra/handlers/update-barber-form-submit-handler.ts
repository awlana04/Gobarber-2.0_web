import FormSubmitHandlerBase from '../bases/form-submit-handler-base';
import APIBaseInterface from '../interfaces/api-base-interface';
import { UpdateBarberFormDataType } from '../types/form-data-types';
import transformLocationLonLatForm from '../utils/transform-location-lon-lat-form';

export default class UpdateBarberFormSubmitHandler extends FormSubmitHandlerBase {
  constructor(private readonly updateBarberFormAPI: APIBaseInterface) {
    super(updateBarberFormAPI);
  }

  public async submitHandler({
    data,
    addToast,
    pinLocation,
  }: UpdateBarberFormDataType): Promise<void> {
    await this.updateBarberFormAPI.fake({
      description: data?.description,
      file: data?.file,
      openAtNight: data?.openAtNight,
      openOnWeekends: data?.openOnWeekends,
      location: pinLocation && transformLocationLonLatForm(pinLocation),
    });
  }
}
