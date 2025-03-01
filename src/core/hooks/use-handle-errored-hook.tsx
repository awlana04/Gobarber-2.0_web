'use client';

import { ReactNode, useReducer } from 'react';

import { HandleErroredContext } from '../contexts/use-handle-errored-context';

import { formState } from '../types/handle-errored-context-data-type';

type Action = {
  type:
    | 'SET_NAME_ERROR'
    | 'SET_NAME_SUCCESS'
    | 'SET_EMAIL_ERROR'
    | 'SET_EMAIL_SUCCESS'
    | 'SET_PASSWORD_ERROR'
    | 'SET_PASSWORD_SUCCESS'
    | 'SET_CONFIRM_PASSWORD_ERROR'
    | 'SET_CONFIRM_PASSWORD_SUCCESS'
    | 'SET_LOCATION_ERROR'
    | 'SET_LOCATION_SUCCESS'
    | 'SET_DESCRIPTION_ERROR'
    | 'SET_DESCRIPTION_SUCCESS';
  // | 'SET_CLIENT_SELECTED'
  // | 'SET_BARBER_SELECTED'
  // | 'SET_OPEN_AT_NIGHT_SELECTED'
  // | 'SET_CLOSE_AT_NIGHT_SELECTED'
  // | 'SET_OPEN_ON_WEEKENDS'
  // | 'SET_CLOSE_ON_WEEKENDS';
};

const initialState: formState = {
  isNameErrored: false,
  isEmailErrored: false,
  isPasswordErrored: false,
  isConfirmPasswordErrored: false,
  isLocationErrored: false,
  isDescriptionErrored: false,
  // isClientSelected: false,
  // isBarberSelected: false,
  // isOpenAtNightSelected: false,
  // isCloseAtNightSelected: false,
  // isOpenAtWeekSelected: false,
  // isCloseAtWeekSelected: false,
};

const handleErrored = (state: formState, action: Action) => {
  switch (action.type) {
    case 'SET_NAME_ERROR':
      return { ...state, isNameErrored: true };
    case 'SET_NAME_SUCCESS':
      return { ...state, isNameErrored: false };
    case 'SET_EMAIL_ERROR':
      return { ...state, isEmailErrored: true };
    case 'SET_EMAIL_SUCCESS':
      return { ...state, isEmailErrored: false };
    case 'SET_PASSWORD_ERROR':
      return { ...state, isPasswordErrored: true };
    case 'SET_PASSWORD_SUCCESS':
      return { ...state, isPasswordErrored: false };
    case 'SET_CONFIRM_PASSWORD_ERROR':
      return { ...state, isConfirmPasswordErrored: true };
    case 'SET_CONFIRM_PASSWORD_SUCCESS':
      return { ...state, isConfirmPasswordErrored: false };
    case 'SET_LOCATION_ERROR':
      return { ...state, isLocationErrored: true };
    case 'SET_LOCATION_SUCCESS':
      return { ...state, isLocationErrored: false };
    case 'SET_DESCRIPTION_ERROR':
      return { ...state, isDescriptionErrored: true };
    case 'SET_DESCRIPTION_SUCCESS':
      return { ...state, isDescriptionErrored: false };
    // case 'SET_CLIENT_SELECTED':
    //   return { ...state, isClientSelected: true };
    // case 'SET_BARBER_SELECTED':
    //   return { ...state, isBarberSelected: false };
    default:
      return state;
  }
};

type HandleErroredHookProps = {
  children?: ReactNode;
};

export default function UseHandleErroredHook({
  children,
}: HandleErroredHookProps) {
  const [state, dispatch] = useReducer(handleErrored, initialState);

  return (
    <HandleErroredContext.Provider value={{ state, dispatch }}>
      {children}
    </HandleErroredContext.Provider>
  );
}
