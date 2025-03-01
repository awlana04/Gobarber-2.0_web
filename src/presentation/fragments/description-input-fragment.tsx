import { FiMessageSquare } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type DescriptionInputFragmentType = {
  errored: boolean;
};

export default function DescriptionInputFragment({
  errored,
}: DescriptionInputFragmentType) {
  return (
    <>
      <Form.Textarea
        placeholder='Descrição'
        name='description'
        iconName={FiMessageSquare}
        errored={errored}
      />
    </>
  );
}
