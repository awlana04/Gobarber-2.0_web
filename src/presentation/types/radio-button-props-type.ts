export type RadioButtonPropsType =
  React.InputHTMLAttributes<HTMLInputElement> & {
    isBarberSelected: boolean;
    isBarber: boolean;
    setIsBarberSelected(state: boolean): void;
  };
