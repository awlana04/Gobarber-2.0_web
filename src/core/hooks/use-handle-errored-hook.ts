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

  function clearFieldErrored(fieldName: string) {
    // find the error's index in fieldErrored state
    const errorIndexInArray = fieldErrored.findIndex(
      (error) => error === fieldName
    );

    // if there's an index in errorIndexInArray, executes the splice
    if (errorIndexInArray > -1) {
      // the function executes every time is called in a usecase, so it'll delete on by one
      fieldErrored.splice(errorIndexInArray, 1);
    }
  }

  return { fieldErrored, handleFieldErrored, clearFieldErrored };
};

export default useHandleErroredHook;
