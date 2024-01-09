import { render } from '@testing-library/react';
import LandingScreen from './landing-screen';

describe('Landing screen layout', () => {
  it('should be able to render the landing screen', () => {
    const { getByText } = render(<LandingScreen />);

    const landingScreenElement = getByText('Fazer logon');

    expect(landingScreenElement).toBeInTheDocument();
  });
});
