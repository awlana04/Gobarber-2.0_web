import { render } from '@testing-library/react';
import LandingScreen from './landing-screen';

describe('Landing screen layout', () => {
  it('should be able to render the landing screen', () => {
    const { getByRole } = render(<LandingScreen />);

    expect(getByRole('paragraph')).toHaveAttribute('class');
  });
});
