import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

type FormRootProps = SubmitHandlerType & {
  children: React.ReactNode;
};

export default function FormRoot({ children, ...props }: FormRootProps) {
  return <form action={props.submitHandler}>{children}</form>;
}
