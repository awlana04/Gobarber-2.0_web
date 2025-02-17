import Form from 'next/form';

type FormRootProps = {
  children: React.ReactNode;
  submitHandler: (data: FormData) => void;
};

export default function FormRoot({ children, submitHandler }: FormRootProps) {
  return <Form action={submitHandler}>{children}</Form>;
}

// import { FormHTMLAttributes, ReactNode } from 'react';

// type FormRootProps = FormHTMLAttributes<HTMLFormElement> & {
//   children: ReactNode;
// };

// export default function FormRoot({ children, ...rest }: FormRootProps) {
//   return (
//     <form {...rest} className='flex flex-col'>
//       {children}
//     </form>
//   );
// }
