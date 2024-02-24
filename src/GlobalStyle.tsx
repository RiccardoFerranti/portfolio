import { createGlobalStyle } from 'styled-components';

import { TTheme } from './Theme';

const GlobalStyle = createGlobalStyle<{ theme: TTheme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    // Firefox scrollbar
    /* @-moz-document url-prefix() {
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: 8px;
    } */
  }

  /* Chrome scrollbar */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  *::-webkit-scrollbar-track {
    background-color: auto;
  }
  /* Chrome scrollbar */

  body {
    background:
      radial-gradient(100% 225% at 100% 0%, #000000 0%, #000000 100%),
      linear-gradient(230deg, #000000 0%, #00C2FF 100%),
      linear-gradient(135deg,
        #0F0A3C 0%, #0F0A3C 26%,
        #07456F 26%, #07456F 33%,
        #009F9D 33%, #009F9D 60%,
        #CDFFEB 60%, #CDFFEB 100%);

    background-blend-mode: overlay, hard-light, normal;
    font-family: 'Open Sans', sans-serif;
    height: auto;
    width: 100%;
  }
`;

export default GlobalStyle;
