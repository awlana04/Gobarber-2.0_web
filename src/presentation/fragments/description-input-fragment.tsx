import { FiMessageSquare } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

export default function DescriptionInputFragment() {
  return (
    <>
      <Form.Textarea
        placeholder='Descrição'
        name='description'
        iconName={FiMessageSquare}
        // errored={descriptionInput.errored}
      />
    </>
  );
}
