import styled from 'styled-components';

import BREAKPOINTS from '../consts/breakpoints';

const StyledTab = styled.div`
   width: 344px;

  @media screen and (max-width: ${BREAKPOINTS.mobile}) {
    width: 302px;
  }
`;

export default StyledTab;
