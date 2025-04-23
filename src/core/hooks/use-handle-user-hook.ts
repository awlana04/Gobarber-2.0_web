import { useState } from 'react';

const useHandleUserHook = () => {
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
};

export default useHandleUserHook;
