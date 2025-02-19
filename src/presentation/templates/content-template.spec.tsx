import { render, screen } from '@testing-library/react';

import ContentTemplate from './content-template';

describe('Content template', () => {
  beforeEach(() => {
    render(
      <ContentTemplate position='left' src='/image.png' alt='Image'>
        Template
      </ContentTemplate>
    );
  });
  it('should be able to render the content template', () => {
    const ContentTemplateElement = screen.getByText('Template');

    expect(ContentTemplateElement).toBeInTheDocument();
  });

  it('should not be able to render the content template', () => {
    const ContentTemplateElement = screen.queryByText('Wrong template');

    expect(ContentTemplateElement).not.toBeInTheDocument();
  });
});
