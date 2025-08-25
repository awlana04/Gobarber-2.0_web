import { useState, useMemo } from 'react';

import { BarberDataType } from '@/infra/types/data-type';

const useHandleCarrouselImagesHook = (barber: BarberDataType) => {
  const [activeImages, setActiveImages] = useState<[string, string, string]>([
    '',
    '',
    '',
  ]);

  // Take the first 3 elements in the barber images array
  const barberImagesArray = barber.images!.slice(0, 3);

  // Save the initial carrousel images state
  useMemo(() => {
    setActiveImages([
      barberImagesArray[0],
      barberImagesArray[1],
      barberImagesArray[2],
    ]);
  }, []);

  // Find the barber image index corresponding to the activeImages array last element
  const barberImageIndex = barber.images!.findIndex(
    (image) => image === activeImages[2]
  );

  const nextImage = () => {
    // With the barberImageIndex index, we create a new array beginning from index of the last visible image and ending in exact index of the new visible image on the right
    const newBarberImagesArrayIndex = barber.images!.slice(
      barberImageIndex - 1,
      barberImageIndex + 2
    );

    // Set the new carrousel state according to the newBarberImagesArrayIndex
    setActiveImages([
      newBarberImagesArrayIndex[0],
      newBarberImagesArrayIndex[1],
      newBarberImagesArrayIndex[2],
    ]);
  };

  const previousImage = () => {
    // With the barberImageIndex index, we create a new array beginning from index of the last visible image and ending in exact previous index of the visible image from the left
    const newBarberImagesArrayIndex = barber.images!.slice(
      barberImageIndex - 3,
      barberImageIndex
    );

    // Set the new carrousel state according to the newBarberImagesArrayIndex
    setActiveImages([
      newBarberImagesArrayIndex[0],
      newBarberImagesArrayIndex[1],
      newBarberImagesArrayIndex[2],
    ]);
  };

  return {
    barberImagesArray,
    barberImageIndex,
    activeImages,
    nextImage,
    previousImage,
  };
};

export default useHandleCarrouselImagesHook;
