import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { BarberDataType } from '@/infra/types/data-type';

import useHandleCarrouselImagesHook from '@/hooks/use-handle-carrousel-images-hook';

import ViewYourselfBarberScreen from '@/screens/view-yourself-barber-screen';

type ViewYourselfBarberPagePropsType = HeaderPropsType & {
  barber: BarberDataType;
  locationRef: React.Ref<HTMLDivElement>;
};

export default function ViewYourselfBarberPage(
  props: ViewYourselfBarberPagePropsType
) {
  const {
    barberImageIndex,
    barberImagesArray,
    activeImages,
    nextImage,
    previousImage,
  } = useHandleCarrouselImagesHook(props.barber);

  return (
    <ViewYourselfBarberScreen
      barberImageIndex={barberImageIndex}
      barberImagesArray={barberImagesArray}
      activeImages={activeImages}
      nextImage={nextImage}
      previousImage={previousImage}
      {...props}
    />
  );
}
