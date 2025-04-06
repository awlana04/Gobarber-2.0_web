type LabelProps = React.InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  children: React.ReactNode;
};

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label
      htmlFor={props.htmlFor}
      className='hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText cursor-pointer justify-center rounded-lg p-3 px-6 text-center'
    >
      {children}
    </label>
  );
}
