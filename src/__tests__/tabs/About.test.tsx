import { screen } from '@testing-library/react';
import About from 'tabs/About';
import renderWithProvider from 'testUtils';

describe('About', () => {
  beforeEach(() => {
    renderWithProvider(<About />);
  });

  it('should render the profile picture correctly', () => {
    const profilePic = screen.getByTestId('profile-pic');
    expect(profilePic).toBeInTheDocument();
    expect(profilePic).toHaveAttribute('alt', 'profile picture');
    expect(profilePic).toHaveAttribute('title', 'profile picture');
  });

  it('should render the name and role correctly', () => {
    const nameElement = screen.getByText('Riccardo Ferranti');
    expect(nameElement).toBeInTheDocument();

    const subtitleElement = screen.getByText('Lead Front End Developer');
    expect(subtitleElement).toBeInTheDocument();
  });

  it('should render the description correctly', () => {
    const descriptionElement = screen.getByText(/In this role, I guide the development/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
