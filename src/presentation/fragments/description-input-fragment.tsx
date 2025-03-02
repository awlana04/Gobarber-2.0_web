import { FiMessageSquare } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type DescriptionInputFragmentType = {
  errored: boolean;
  value: string;
};

export default function DescriptionInputFragment({
  errored,
  value,
}: DescriptionInputFragmentType) {
  return (
    <>
      <Form.Textarea
        value={value}
        placeholder='Descrição'
        name='description'
        iconName={FiMessageSquare}
        errored={errored}
      />
    </>
  );
}
