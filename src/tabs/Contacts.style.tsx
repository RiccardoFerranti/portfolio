import styled, { css } from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsGeoAltFill } from 'react-icons/bs';
import { PiGithubLogoFill } from 'react-icons/pi';
import BREAKPOINTS from 'consts/breakpoints';

import StyledTab from './CommonStyle';

export const StyledContacts = styled(StyledTab)`
  height: 400px;
`;

export const StyledContactsContent = styled('section')`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  button {
    margin-top: 70px;
  }
`;

export const StyledContactsContentRow = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
  height: 60px;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 400;
  }
`;

export const StyledIconContainer = styled('div')`
  display: flex;
  align-items: start;
  width: 40px;

  @media screen and (max-width: ${BREAKPOINTS.mobile}) {
    width: 25px;
  }
`;

const commonIconStyles = css`
  color: ${({ theme }) => theme.colors.aqua};
  font-size: 24px;

  @media screen and (max-width: ${BREAKPOINTS.mobile}) {
    width: 20px;
  }
`;

export const StyledFaLinkedinIn = styled(FaLinkedinIn)`
  ${commonIconStyles}
`;

export const StyledMdEmail = styled(MdEmail)`
  ${commonIconStyles}
`;

export const StyledBsGeoAltFill = styled(BsGeoAltFill)`
  ${commonIconStyles}
`;

export const StyledPiGithubLogoFill = styled(PiGithubLogoFill)`
  ${commonIconStyles}
  font-size: 28px;
`;
