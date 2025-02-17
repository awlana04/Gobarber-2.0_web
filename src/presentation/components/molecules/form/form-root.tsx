import Form from 'next/form';

type FormRootProps = {
  children: React.ReactNode;
  submitHandler: (data: FormData) => void;
};

export default function FormRoot({ children, submitHandler }: FormRootProps) {
  return <Form action={submitHandler}>{children}</Form>;
}
