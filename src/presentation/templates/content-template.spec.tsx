import { render } from '@testing-library/react';

import ContentTemplate from './content-template';

describe('Content template', () => {
  it('should be able to render the content template', () => {
    const { getByText } = render(
      <ContentTemplate position='left' src='/image.png' alt='Image'>
        Template
      </ContentTemplate>
    );

    const ContentTemplateElement = getByText('Template');

    expect(ContentTemplateElement).toBeInTheDocument();
  });

  it('should not be able to render the content template', () => {
    const { queryByText } = render(
      <ContentTemplate position='left' src='/image' alt='Imagem da barbearia'>
        Template
      </ContentTemplate>
    );

    const ContentTemplateElement = queryByText('Wrong template');

    expect(ContentTemplateElement).not.toBeInTheDocument();
  });
});
