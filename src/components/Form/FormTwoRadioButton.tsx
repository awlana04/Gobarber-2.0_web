import Label from '../atoms/Label';
import Title from '../atoms/Title';

type FormTwoRadioButtonProps = {
  isOpenAtNight: boolean;
  setIsOpenAtNight: (state: boolean) => void;
  isOpenOnWeekends: boolean;
  setIsOpenOnWeekends: (state: boolean) => void;
};

export default function FormTwoRadioButton({
  isOpenAtNight,
  setIsOpenAtNight,
  isOpenOnWeekends,
  setIsOpenOnWeekends,
}: FormTwoRadioButtonProps) {
  return (
    <div className='flex- my-2 flex flex-col p-4'>
      <Title>Sua barbearia abre à noite?</Title>

      <div className='m-4 flex flex-row items-center justify-center'>
        <div className='mr-24'>
          <input
            type='radio'
            id='openAtNightYes'
            checked={isOpenAtNight === true}
            onChange={() => setIsOpenAtNight(true)}
            className='peer hidden'
          />

          <Label htmlFor='openAtNightYes'>Sim</Label>
        </div>

        <div>
          <input
            type='radio'
            id='openAtNightNo'
            checked={isOpenAtNight === false}
            onChange={() => setIsOpenAtNight(false)}
            className='peer hidden'
          />

          <Label htmlFor='openAtNightNo'>Não</Label>
        </div>
      </div>

      <Title>Sua barbearia abre aos finais de semana?</Title>

      <div className='m-4 flex flex-row items-center justify-center'>
        <div className='mr-24'>
          <input
            type='radio'
            id='openOnWeekendsYes'
            checked={isOpenOnWeekends === true}
            onChange={() => setIsOpenOnWeekends(true)}
            className='peer hidden'
          />

          <Label htmlFor='openOnWeekendsYes'>Sim</Label>
        </div>

        <div>
          <input
            type='radio'
            id='openOnWeekendsNo'
            checked={isOpenOnWeekends === false}
            onChange={() => setIsOpenOnWeekends(false)}
            className='peer hidden'
          />

          <Label htmlFor='openOnWeekendsNo'>Não</Label>
        </div>
      </div>
    </div>
  );
}
