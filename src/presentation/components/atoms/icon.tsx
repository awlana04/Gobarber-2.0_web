type IconProps = React.ImgHTMLAttributes<HTMLCanvasElement> & {
  icon: React.ElementType;
  filled: boolean;
  errored: boolean;
};

export default function Icon({ icon: Icon, ...props }: IconProps) {
  return (
    <Icon
      data-testid='iconElement'
      data-filled={props.filled}
      data-errored={props.errored}
      className='text-input-text data-[errored=true]:text-red data-[filled=true]:data-[errored=false]:text-orange group-focus-within:data-[errored=false]:text-orange absolute mx-8 mt-5 -ml-72 max-lg:-ml-52'
    />
  );
}
