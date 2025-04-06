import Label from '@/atoms/label';

type FormRadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isBarberSelected: boolean;
  isBarber: boolean;
  setIsBarberSelected(state: boolean): void;
};

export default function FormRadioButton(props: FormRadioButtonProps) {
  return (
    <div className='my-2 mt-6 flex items-center justify-center p-4'>
      <div className='mr-24'>
        <input
          type='radio'
          id='radioButtonYes'
          checked={props.isBarberSelected === true}
          onChange={() => props.setIsBarberSelected(true)}
          className='peer hidden'
        />

        {props.isBarber ? (
          <Label htmlFor='radioButtonYes'>Sim</Label>
        ) : (
          <Label htmlFor='radioButtonYes'>Sou Cliente</Label>
        )}
      </div>

      <div>
        <input
          type='radio'
          id='radioButtonNo'
          checked={props.isBarberSelected === false}
          onChange={() => props.setIsBarberSelected(false)}
          className='peer hidden'
        />

        {props.isBarber ? (
          <Label htmlFor='radioButtonNo'>Não</Label>
        ) : (
          <Label htmlFor='radioButtonNo'>Sou Barbeiro</Label>
        )}
      </div>
    </div>
  );
}
