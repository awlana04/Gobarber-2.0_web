import {
  NameInputRefAndValueType,
  DescriptionInputRefAndValueType,
} from '@/core/types/values-and-refs-input-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import useHandleFilledHook from '@/hooks/use-handle-filled-hook';
import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import SigninBarberScreen from '@/presentation/screens/signin-barber-screen';

type SigninBarberPagePropsType = NameInputRefAndValueType &
  DescriptionInputRefAndValueType &
  SubmitHandlerType;

export default function SigninBarberPage(props: SigninBarberPagePropsType) {
  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();

  const {
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { file, setFile, fileUrl, setFileUrl, handleChange } =
    useHandleImagesHook();

  const { fieldErrored } = useHandleErroredContext();

  return (
    <SigninBarberScreen
      nameRef={props.nameRef}
      nameValue={props.nameValue}
      nameErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((name) => name === 'name')
      }
      nameFilled={!!fieldFilled.find((name) => name === 'name')}
      handleNameFilled={handleFieldFilled}
      descriptionRef={props.descriptionRef}
      descriptionValue={props.descriptionValue}
      descriptionErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((description) => description === 'description')
      }
      descriptionFilled={
        !!fieldFilled.find((description) => description === 'description')
      }
      handleDescriptionFilled={handleFieldFilled}
      locationRef={props.descriptionRef}
      locationValue={props.descriptionValue}
      locationErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((location) => location === 'location')
      }
      locationFilled={!!fieldFilled.find((location) => location === 'location')}
      handleLocationFilled={handleFieldFilled}
      file={file}
      fileUrl={fileUrl}
      setFile={setFile}
      setFileUrl={setFileUrl}
      handleChange={handleChange}
      isOpenAtNight={isOpenAtNight}
      setIsOpenAtNight={setIsOpenAtNight}
      isOpenOnWeekends={isOpenOnWeekends}
      setIsOpenOnWeekends={setIsOpenOnWeekends}
      submitHandler={props.submitHandler}
      isButtonDisabled={
        !!(fieldFilled.length !== 3 && fieldErrored !== undefined)
      }
    />
  );
}
