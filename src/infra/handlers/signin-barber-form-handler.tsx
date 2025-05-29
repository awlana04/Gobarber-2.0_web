import useDescriptionUsecase from '@/usecases/use-description-usecase';
import useNameUsecase from '@/usecases/use-name-usecase';

import SigninBarberFormAPI from '@/api/signin-barber-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';

export default function SigninBarberFormHandler() {
  const { handleNameUsecase } = useNameUsecase();
  const { handleDescriptionUsecase } = useDescriptionUsecase();

  const submitHandler = async (
    barberName: string,
    location: string,
    description: string,
    file: File[],
    openAtNight: boolean,
    openOnWeekends: boolean
  ) => {
    handleNameUsecase(barberName);
    handleDescriptionUsecase(description);

    const signinBarberFormAPI = new SigninBarberFormAPI(
      new FetchAPIData(),
      new ManageDataInBrowser()
    );

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await signinBarberFormAPI
            .go({
              name: barberName,
              description,
              location,
              file,
              openAtNight,
              openOnWeekends,
            })
            .then(async (result) => {
              console.log(result);
            })
        : await signinBarberFormAPI.fake({
            name: barberName,
            description,
            location,
            file,
            openAtNight,
            openOnWeekends,
          });
  };

  return { submitHandler };
}
