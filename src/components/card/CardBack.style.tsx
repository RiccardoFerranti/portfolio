import styled from 'styled-components';

import { StyledCard } from './CommonStyle';

const StyledCardBack = styled(StyledCard)`
  transform: rotateY(180deg);
  position: absolute;
  // it's needed to contain the blur background of the form
  /* overflow: hidden; */
  z-index: 1;
`;

export default StyledCardBack;
