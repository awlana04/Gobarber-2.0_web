'use client';

import { useState } from 'react';

export default function useHandleUserHook() {
  const [isBarberSelected, setIsBarberSelected] = useState(false);
  const [isOpenAtNight, setIsOpenAtNight] = useState(false);
  const [isOpenOnWeekends, setIsOpenOnWeekends] = useState(false);

  return {
    isBarberSelected,
    setIsBarberSelected,
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  };
}
