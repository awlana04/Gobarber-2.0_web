import Label from '@components/atoms/Label';

import useHandleUserHook from '@/hooks/useHandleUserHook';

type FormRadioButtonProps = {
  isBarberSelected: boolean;
  setIsBarberSelected: (state: boolean) => void;
};

export default function FormRadioButton({
  isBarberSelected,
  setIsBarberSelected,
}: FormRadioButtonProps) {
  // const { isBarberSelected, setIsBarberSelected } = useHandleUserHook();

  return (
    <div className='my-2 flex items-center justify-center p-4'>
      <div className='mr-24'>
        <input
          type='radio'
          id='openAtNightYes'
          checked={isBarberSelected === true}
          onChange={() => setIsBarberSelected(true)}
          className='peer hidden'
        />

        <Label htmlFor='openAtNightYes'>Sim</Label>
      </div>

      <div>
        <input
          type='radio'
          id='openAtNightNo'
          checked={isBarberSelected === false}
          onChange={() => setIsBarberSelected(false)}
          className='peer hidden'
        />

        <Label htmlFor='openAtNightNo'>Não</Label>
      </div>
    </div>
  );
}
