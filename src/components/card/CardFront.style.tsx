import styled from "styled-components";
import { StyledCard } from "./CommonStyle";
import { size } from "../../consts/breakpoints";

export const StyledCardFront = styled(StyledCard)`
  transform: rotateY(0deg);
  position: absolute;
  z-index: 3;
`;

export const StyledCardContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

interface IStyledCardTabs {
  tabSelected?: number;
}

export const StyledCardContent = styled.div<IStyledCardTabs>`
  height: 100%;
  width: 1032px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  transition: all 0.3s;

  ${({ tabSelected }) => tabSelected === 1 && `left: 0;`}
  ${({ tabSelected }) => tabSelected === 2 && `left: -344px;`}
  ${({ tabSelected }) => tabSelected === 3 && `left: -688px;`}

  @media screen and (max-width: ${size.mobile}) {
    ${({ tabSelected }) => tabSelected === 1 && `left: 0;`}
    ${({ tabSelected }) => tabSelected === 2 && `left: -302px;`}
    ${({ tabSelected }) => tabSelected === 3 && `left: -604px;`}
  }
`;

export const StyledCardNavTabs = styled.ul<IStyledCardTabs>`
  list-style: none;
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: -22px;
  position: relative;
  border-top: 2px solid #445161;
  z-index: 3;

  li {
    width: 33.333%;
    height: 56px;
    padding: 32px 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:nth-child(1):hover ~ li.tab__slider {
      left: 0;
      width: 33.333%;
    }

    &:nth-child(2):hover ~ li.tab__slider {
      left: 33.333%;
      width: 33.333%;
    }

    &:nth-child(3):hover ~ li.tab__slider {
      left: 66.666%;
      width: 33.333%;
    }

    &.tab__slider {
      position: absolute;
      width: 0;
      height: 2px;
      top: -2px;
      left: 0;
      padding: 0;
      background-color: ${({ theme }) => theme.colors.aqua};
      z-index: 3;
    }

    &:nth-child(${({ tabSelected }) => tabSelected}) {
      font-weight: 400;

      & ~ li.tab__slider-active {
        position: absolute;
        top: -2px;
        width: 33.333%;
        padding: 0;
        height: 2px;
        background-color: #45eaef;
        font-weight: 400;
        z-index: 3;

        ${({ tabSelected }) => tabSelected === 1 && `left: 0;`}
        ${({ tabSelected }) => tabSelected === 2 && `left: 33.333%`}
        ${({ tabSelected }) => tabSelected === 3 && `left: 66.666%`}
      }
    }
  }
`;
