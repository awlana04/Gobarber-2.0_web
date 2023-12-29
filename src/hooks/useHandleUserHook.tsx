'use client';

import { useState } from 'react';

export default function useHandleUserHook() {
  const [isBarberSelected, setIsBarberSelected] = useState(false);

  return { isBarberSelected, setIsBarberSelected };
}
