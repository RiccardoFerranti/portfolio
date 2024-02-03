import styled from "styled-components";

import { StyledCard } from "./CommonStyle";

export const StyledCardBack = styled(StyledCard)`
  transform: rotateY(180deg);
  position: absolute;
  z-index: 1;
`;
