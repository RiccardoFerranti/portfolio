import styled from "styled-components";
import { size } from '../consts/breakpoints';

export const StyledTab = styled.div`
   width: 344px;

  @media screen and (max-width: ${size.mobile}) {
    width: 302px;
  }
`;
