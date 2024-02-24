import styled from 'styled-components';

import StyledTab from './CommonStyle';

export const StyledAbout = styled(StyledTab)`
  height: 400px;
`;

export const StyledProfile = styled.img`
  display: block;
  width: 171px;
  height: 171px;
  margin: 12px auto 0;
  border: ${({ theme }) => `2px solid  ${theme.colors.aqua}`};
  border-radius: 86px;
`;

export const StyledTitle = styled.p`
  font-size: 32px;
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-shadow: 0px 1px rgba(0, 0, 0, 0.4);
`;

export const StyledSubTitle = styled.p`
  font-size: 18px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.aqua};
  text-align: center;
  text-transform: uppercase;
`;

export const StyledDescription = styled.p`
  font-size: 14px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 20px;
  font-weight: 400;
`;
