import Card from 'components/card/Card';

import StyledApp from './App.style';
import GlobalStyle from './GlobalStyle';

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Card />
      </StyledApp>
    </>
  );
}
