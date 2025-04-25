import { useState } from 'react';

const useHandleErroredHook = () => {
  const [fieldErrored, setFieldErrored] = useState(['']);

  function handleFieldErrored(fieldName: string) {
    // identify and save if the error already exists
    const errorAlreadyExists = fieldErrored.filter(
      (error) => error === fieldName
    );

    // check if the error already exists to not save it in the Array again
    if (errorAlreadyExists.length === 0) {
      // push the new error into the Array
      fieldErrored.push(fieldName);

      // Remove the Array's blank string
      setFieldErrored([...fieldErrored.filter((blank) => blank !== '')]);
    }
  }

  return { fieldErrored, handleFieldErrored };
};

export default useHandleErroredHook;
