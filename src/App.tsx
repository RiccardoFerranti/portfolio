import { StyledApp } from "./App.style";
import GlobalStyle from "./GlobalStyle";
import Card from "./components/card/Card";

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
