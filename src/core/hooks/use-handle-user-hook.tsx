'use client';

import { useState } from 'react';

export default function useHandleUserHook() {
  const [isClientSelected, setIsClientSelected] = useState(true);
  const [isOpenAtNight, setIsOpenAtNight] = useState(false);
  const [isOpenOnWeekends, setIsOpenOnWeekends] = useState(false);

  return {
    isClientSelected,
    setIsClientSelected,
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  };
}
