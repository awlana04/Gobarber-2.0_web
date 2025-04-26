// this is a hook that is being consumed by the useHandleErroredContext in Contexts Core Layer and is being called in the useHandleErroredContextFactory in Factories Infra Layer
// the state of this hook is used in the Pages Core Layer as request for errored by some Screen Props
// but the functions are used in the Usecases Core Layer to Save a new errored field with the validation identify an error or it removes a field which is not errored anymore

import { useState } from 'react';

const useHandleErroredHook = () => {
  const [fieldErrored, setFieldErrored] = useState(['']);

  // saves a new errored field which is called in Usecases Core Layer by passing the fieldName
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

  // removes an errored field which is called by default in the Usecases Core Layer switch statement by passing the fieldName to remove
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
