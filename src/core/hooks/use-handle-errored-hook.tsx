'use client';

import { useReducer } from 'react';

type Action = {
  type:
    | 'SET_NAME_ERROR'
    | 'SET_NAME_SUCCESS'
    | 'SET_EMAIL_ERROR'
    | 'SET_EMAIL_SUCCESS'
    | 'SET_PASSWORD_ERROR'
    | 'SET_PASSWORD_SUCCESS'
    | 'SET_CONFIRM_PASSWORD_ERROR'
    | 'SET_CONFIRM_PASSWORD_SUCCESS';
  // | 'SET_CLIENT_SELECTED'
  // | 'SET_BARBER_SELECTED'
  // | 'SET_OPEN_AT_NIGHT_SELECTED'
  // | 'SET_CLOSE_AT_NIGHT_SELECTED'
  // | 'SET_OPEN_ON_WEEKENDS'
  // | 'SET_CLOSE_ON_WEEKENDS';
};

type formState = {
  isNameErrored: boolean;
  isEmailErrored: boolean;
  isPasswordErrored: boolean;
  isConfirmPasswordErrored: boolean;
  // isClientSelected: boolean;
  // isBarberSelected: boolean;
  // isOpenAtNightSelected: boolean;
  // isCloseAtNightSelected: Boolean;
  // isOpenAtWeekSelected: boolean;
  // isCloseAtWeekSelected: Boolean;
};

const initialState: formState = {
  isNameErrored: false,
  isEmailErrored: false,
  isPasswordErrored: false,
  isConfirmPasswordErrored: false,
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
    // case 'SET_CLIENT_SELECTED':
    //   return { ...state, isClientSelected: true };
    // case 'SET_BARBER_SELECTED':
    //   return { ...state, isBarberSelected: false };
    default:
      return state;
  }
};

export default function useHandleErroredHook() {
  const [state, dispatch] = useReducer(handleErrored, initialState);

  return { state, dispatch };
}
