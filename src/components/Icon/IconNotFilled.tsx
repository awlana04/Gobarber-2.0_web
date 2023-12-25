import IconProps from './IconProps';

export default function IconNotFilled({ icon: Icon }: IconProps) {
  return (
    <Icon className='absolute mx-8 -ml-72 mt-5 text-inputText group-focus-within:text-orange' />
  );
}
