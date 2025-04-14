import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import LandingScreen from './landing-screen';

describe('Landing screen layout', () => {
  it('should be able to render the landing screen', () => {
    const { getByRole } = render(<LandingScreen />);

    const landingScreenElement = getByRole('button', { name: /fazer logon/i });

    expect(landingScreenElement).toBeInTheDocument();
  });

  it('should not ble able to render the landing screen', () => {
    const { queryByText } = render(<LandingScreen />);

    const landingScreenElement = queryByText('Não fazer logon');

    expect(landingScreenElement).not.toBeInTheDocument();
  });
});
