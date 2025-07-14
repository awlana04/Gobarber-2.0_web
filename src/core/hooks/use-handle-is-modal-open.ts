'use client';

import { useState } from 'react';

const useHandleIsModalOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return { isModalOpen, setIsModalOpen };
};

export default useHandleIsModalOpen;
