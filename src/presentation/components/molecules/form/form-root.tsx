import Form from 'next/form';

import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

type FormRootProps = SubmitHandlerType & {
  children: React.ReactNode;
};

export default function FormRoot({ children, ...props }: FormRootProps) {
  return <Form action={props.submitHandler}>{children}</Form>;
}
