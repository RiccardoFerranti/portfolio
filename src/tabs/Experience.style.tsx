import styled from 'styled-components';

import StyledTab from './CommonStyle';

export const StyledExperience = styled(StyledTab)`
  height: 400px;
`;

export const StyledExperienceTimelineContainer = styled('section')`
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  @-moz-document url-prefix() {
    padding-top: 1px; /* Adjust the padding value for Firefox */
  }
`;

export const StyledExperienceTimeline = styled('div')`
  position: relative;

  &:after {
    content: "";
    width: 2px;
    position: absolute;
    top: 0.5rem;
    bottom: 0rem;
    left: 80px;
    z-index: 1;
    background: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledExperienceTimelineItem = styled('article')`
  position: relative;
  cursor: pointer;
`;

export const StyledExperienceTimelineYear = styled('h3')`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  top: 0;
`;

export const StyledExperienceTimelineContent = styled('div')`
  position: relative;
  padding: 0 0 10px 93px;

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 3px;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    font-style: italic;
    margin-bottom: 6px;
  }

  p {
    font-size: 13px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 10px 0 0;
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  &:hover {
    &:first-of-type:after {
      background: ${({ theme }) => theme.colors.aquaLight1};
    }
  }

  &:first-of-type:after {
    content: "";
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.grey};
    border: ${({ theme }) => `3px solid ${theme.colors.greyDark4}`};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 73px;
    z-index: 2;
  }

  @-moz-document url-prefix() {
    &:first-of-type:after {
      top: -1px;
    }
  }
`;

export const StyledExperienceTimelineTags = styled('ul')`
  display: inline-flex;
  list-style: none;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 5px 0 0;

  li {
    margin-right: 5px;
    margin-bottom: 3px;
    padding: 3px;
    background-color: ${({ theme }) => theme.colors.greyDark5};
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.greyLight}`};
  }
`;
