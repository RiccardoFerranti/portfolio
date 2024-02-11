import { screen } from '@testing-library/react';
import LABELS from 'consts/labels';
import Contacts from 'tabs/Contacts';
import renderWithProvider from 'testUtils';

describe('Contacts', () => {
  beforeEach(() => {
    renderWithProvider(<Contacts />);
  });

  it('should render the address link correctly', () => {
    const mapLink = screen.getByRole('link', { name: LABELS.tabs.contacts.address });
    expect(mapLink).toBeInTheDocument();
    expect(mapLink).toHaveAttribute('target', '_blank');
  });

  it('should render the email link correctly', () => {
    const emailLink = screen.getByRole('link', { name: /riccardo\.ferranti01@gmail\.com/i });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:riccardo.ferranti01@gmail.com');
  });

  it('should render the linkedin link correctly', () => {
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', LABELS.tabs.contacts.linkedin);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('should render the github link correctly', () => {
    const githubLink = screen.getByRole('link', { name: /GitHub/i });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', LABELS.tabs.contacts.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('should render the button correctly', () => {
    const workWithMeButton = screen.getByRole('button');
    expect(workWithMeButton).toBeInTheDocument();
  });
});
