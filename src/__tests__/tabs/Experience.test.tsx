import { screen } from '@testing-library/react';
import { ECompanies } from 'commonTypes';
import LABELS from 'consts/labels';
import Experience from 'tabs/Experience';
import { COMPANIES, TAGS } from 'tabs/consts';
import renderWithProvider from 'testUtils';

describe('Experience', () => {
  it('should render timeline items with correct content', () => {
    renderWithProvider(<Experience />);

    COMPANIES.forEach((company: string) => {
      const currentCompany = company as keyof typeof ECompanies;

      const companyName = LABELS.companies[currentCompany];
      const companyPeriod = LABELS.periods[currentCompany];
      const companyPosition = LABELS.positions[currentCompany];

      const companyRegex = new RegExp(companyName, 'i'); // Case-insensitive regex

      expect(screen.getByText(companyRegex)).toBeInTheDocument();
      expect(screen.getByText(companyPeriod)).toBeInTheDocument();

      if (companyPosition === LABELS.positions.kaleyra) {
        const positionElements = screen.getAllByText(/Front End \/ UI Developer/i); // Using regex to match position title
        expect(positionElements).toHaveLength(2);
      } else {
        expect(screen.getByText(companyPosition)).toBeInTheDocument();
      }

      switch (currentCompany) {
        // symplystacking
        case COMPANIES[0]:
          expect(TAGS[currentCompany].length).toBe(17);
          break;
        // catenamedia
        case COMPANIES[1]:
          expect(TAGS[currentCompany].length).toBe(12);
          break;
          // chiarezza
        case COMPANIES[2]:
          expect(TAGS[currentCompany].length).toBe(9);
          break;
          // kaleyra
        case COMPANIES[3]:
          expect(TAGS[currentCompany].length).toBe(8);
          break;
          // accenture
        case COMPANIES[4]:
          expect(TAGS[currentCompany].length).toBe(0);
          break;
        // Add cases for other companies if needed
        default:
          // Handle the default case if necessary
          break;
      }
    });
  });
});
