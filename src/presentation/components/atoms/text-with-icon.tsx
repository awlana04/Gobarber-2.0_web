type TextWithIconType = {
  text: string | number;
  color: 'orange' | 'white' | 'grey' | 'orange-grey';
  icon: React.ElementType;
};

export default function TextWithIcon({
  icon: Icon,
  ...props
}: TextWithIconType) {
  return (
    <div className='flex flex-row items-center'>
      <Icon
        data-color={props.color}
        className='text-orange mx-2.5 data-[color=white]:text-white'
      />

      <p
        data-color={props.color}
        className='data-[color=orange]:text-orange data-[color=grey]:text-input-text data-[color=orange-grey]:text-white data-[color=white]:text-white'
      >
        {props.text}
      </p>
    </div>
  );
}
