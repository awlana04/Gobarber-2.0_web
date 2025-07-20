import translate from '@/shared/utils/translate';

type TextWithIconPropsType = {
  text: string | number | Date;
  color: 'orange' | 'white' | 'grey' | 'orange-grey';
  icon: React.ElementType;
};

export default function TextWithIcon({
  icon: Icon,
  ...props
}: TextWithIconPropsType) {
  return (
    <div className='flex flex-row items-center'>
      <Icon
        data-color={props.color}
        className='text-orange mr-2.5 data-[color=orange-grey]:text-xl data-[color=white]:text-white'
      />

      <p
        data-color={props.color}
        className='data-[color=orange]:text-orange data-[color=grey]:text-input-text data-[color=orange]:hover:underline data-[color=orange-grey]:text-xl data-[color=orange-grey]:text-white data-[color=white]:text-white data-[color=white]:hover:underline'
      >
        {/* {typeof props.text === 'string' ? translate(props.text) : props.text} */}
        {props.text}
      </p>
    </div>
  );
}
