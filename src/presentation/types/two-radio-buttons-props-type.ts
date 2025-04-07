export type FormTwoRadioButtonProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    isOpenAtNight: boolean;
    setIsOpenAtNight(state: boolean): void;
    isOpenOnWeekends: boolean;
    setIsOpenOnWeekends(state: boolean): void;
  };
