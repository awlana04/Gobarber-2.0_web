import { useState } from 'react';

export default function useErrorHook() {
  const [isErrored, setIsErrored] = useState(false);
  const [isNameErrored, setIsNameErrored] = useState(false);
  const [isEmailErrored, setIsEmailErrored] = useState(false);
  const [isPasswordErrored, setIsPasswordErrored] = useState(false);
  const [isConfirmPasswordErrored, setIsConfirmPasswordErrored] =
    useState(false);

  return {
    isErrored,
    setIsErrored,
    isEmailErrored,
    setIsEmailErrored,
    isNameErrored,
    setIsNameErrored,
    isPasswordErrored,
    setIsPasswordErrored,
    isConfirmPasswordErrored,
    setIsConfirmPasswordErrored,
  };
}
