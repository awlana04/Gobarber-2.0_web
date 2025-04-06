import Title from '@/atoms/title';
import Label from '@/atoms/label';

type FormTwoRadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isOpenAtNight: boolean;
  setIsOpenAtNight(state: boolean): void;
  isOpenOnWeekends: boolean;
  setIsOpenOnWeekends(state: boolean): void;
};

export default function FormTwoRadioButton(props: FormTwoRadioButtonProps) {
  return (
    <div className='flex- my-2 flex flex-col p-4'>
      <Title>Sua barbearia abre à noite?</Title>

      <div className='m-4 mb-8 flex flex-row items-center justify-center'>
        <div className='mr-24'>
          <input
            type='radio'
            id='openAtNightYes'
            checked={props.isOpenAtNight === true}
            onChange={() => props.setIsOpenAtNight(true)}
            className='peer hidden'
          />

          <Label htmlFor='openAtNightYes'>Sim</Label>
        </div>

        <div>
          <input
            type='radio'
            id='openAtNightNo'
            checked={props.isOpenAtNight === false}
            onChange={() => props.setIsOpenAtNight(false)}
            className='peer hidden'
          />

          <Label htmlFor='openAtNightNo'>Não</Label>
        </div>
      </div>

      <Title>Sua barbearia abre aos finais de semana?</Title>

      <div className='m-4 mb-8 flex flex-row items-center justify-center'>
        <div className='mr-24'>
          <input
            type='radio'
            id='openOnWeekendsYes'
            checked={props.isOpenOnWeekends === true}
            onChange={() => props.setIsOpenOnWeekends(true)}
            className='peer hidden'
          />

          <Label htmlFor='openOnWeekendsYes'>Sim</Label>
        </div>

        <div>
          <input
            type='radio'
            id='openOnWeekendsNo'
            checked={props.isOpenOnWeekends === false}
            onChange={() => props.setIsOpenOnWeekends(false)}
            className='peer hidden'
          />

          <Label htmlFor='openOnWeekendsNo'>Não</Label>
        </div>
      </div>
    </div>
  );
}
