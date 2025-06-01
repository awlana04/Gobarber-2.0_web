'use client';

// this hook is used in the Pages Core Layer as request for filled and handle filled by some Screens Props
// saves the fieldFilled Array state according to the inputs name provided by the ChangeEvent in React
// deletes the fields that are not filled anymore by checking if the event.target.value is empty now by checking the current field name and associating with the existence of the same field name in the State Array

import { useState } from 'react';

const useHandleFilledHook = () => {
  const [fieldFilled, setFieldFilled] = useState(['']);

  // by a React's ChangeEvent, it constantly verify if the input was changed to Save or Remove an item from the Array
  const handleFieldFilled = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // check if the fieldname already exists in Array
    const fieldNameAlreadyExists = fieldFilled
      .filter((field) => field === event.target.name)
      .toLocaleString();

    // ensures if there's a value and if the fieldname does not already exists in Array
    if (event.target.value) {
      if (event.target.name !== fieldNameAlreadyExists)
        // save the new state with the fieldname provided by the input event name and deletes the initial blank spaces
        setFieldFilled([
          ...fieldFilled.filter((blank) => blank !== ''),
          event.target.name,
        ]);
    } else {
      // if there's not a value, then delete the empty fieldname in Array
      setFieldFilled([
        ...fieldFilled.filter((empty) => empty !== event.target.name),
      ]);
    }
  };

  return { fieldFilled, handleFieldFilled };
};

export default useHandleFilledHook;
