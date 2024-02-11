import { FC, ReactElement, PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import FlipProvider from 'FlipProvider';

import Theme from './Theme';

const renderWithProvider = (
  ui: ReactElement,
  renderOptions?: RenderOptions,
): ReturnType<typeof render> => {
  const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
    <ThemeProvider theme={Theme}>
      <FlipProvider>
        {children}
      </FlipProvider>
    </ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithProvider;
