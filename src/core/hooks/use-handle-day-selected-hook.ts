'use client';

import { useState } from 'react';

const useHandleDaySelectedHook = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return { selectedDate, setSelectedDate };
};

export default useHandleDaySelectedHook;
