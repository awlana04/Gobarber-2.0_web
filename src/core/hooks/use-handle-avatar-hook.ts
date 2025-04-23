import { useState } from 'react';

const useHandleAvatarHook = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);

      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };

  const handleRemove = () => {
    setFileUrl(undefined);
    setFile(undefined);
  };

  return { file, fileUrl, handleChange, handleRemove };
};

export default useHandleAvatarHook;
