'use client';

import { useState } from 'react';

export default function useHandleImagesHook() {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);

    setFile(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setFileUrl(selectedImagesPreview.concat(fileUrl));
  };

  return { file, setFile, setFileUrl, fileUrl, handleChange };
}
