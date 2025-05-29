'use client';

import { useState } from 'react';

const useHandleImagesHook = () => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const images = event.target.files;

    if (!images) {
      return;
    }

    const selectedImages = Array.from(images);

    setFile(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setFileUrl(selectedImagesPreview.concat(fileUrl));
  };

  return { file, setFile, setFileUrl, fileUrl, handleChange };
};

export default useHandleImagesHook;
