import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiPlus } from 'react-icons/fi';

export default function FormImagesInput() {
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

  return (
    <div className='h-fit w-fit items-center justify-center'>
      <input
        type='file'
        id='images[]'
        multiple
        onChange={handleChange}
        className='file hidden'
      />

      {file && fileUrl && (
        <div className='flex h-fit w-96 flex-wrap gap-4'>
          {fileUrl.map((image) => {
            return (
              <div
                key={image}
                className='flex h-28 w-28 justify-end rounded-xl'
              >
                <div
                  onClick={() => {
                    const imageFile = fileUrl.findIndex(
                      (file) => file === image
                    );

                    const fileIndex = file.at(imageFile);

                    setFile(
                      file.filter((files) => files.name !== fileIndex!.name)
                    );

                    setFileUrl(fileUrl.filter((files) => files !== image));
                  }}
                  className='absolute grid cursor-pointer items-center justify-center rounded-bl-lg rounded-se-lg bg-orange p-2 text-2xl text-inputText hover:h-28 hover:w-28 hover:rounded-lg hover:bg-red hover:text-4xl hover:opacity-60'
                >
                  <FiX />
                </div>

                <Image
                  key={image}
                  src={image}
                  alt={image}
                  width={112}
                  height={112}
                />
              </div>
            );
          })}

          <label
            htmlFor='images[]'
            className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl bg-input hover:bg-orange hover:text-buttonText'
          >
            <FiPlus size={24} className='text-inputText' />
          </label>
        </div>
      )}
    </div>
  );
}
