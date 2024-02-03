import styled from "styled-components";
import { size } from '../../consts/breakpoints';

interface IStyledCardWrapper {
  $flip: boolean
}

export const StyledCardWrapper = styled("div")<IStyledCardWrapper>`
  width: 416px;
  height: 576px;
  position: relative;

  & > div {
    transform: ${props => props.$flip ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  }
`;

export const StyledCardFlip = styled.div`
  width: 416px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  transition: 0.6s 0.1s;
  // it is used to define whether child elements should be transformed in 3D space relative to the parent element.
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${size.mobile}) {
    width: 375px;
  }
`;

export const StyledCard = styled.div`
  width: 400px;
  height: 560px;
  background: rgba(118,131,150,.8);
  background: radial-gradient(circle, rgba(118,131,150,.8) 0%, rgba(96,113,137,.8) 25%, rgba(59,69,81,.8) 100%);
  border: 6px solid #2ee7e5;
  border-radius: 12px;
  padding: 22px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0px 0px 4px #000;
  
  // it will prevent the back face of the card from being visible during the flip animation.
  backface-visibility: hidden;

  &::before {
    content: "";
    width: 388px;
    height: 548px;
    top: -4px;
    left: -4px;
    border-radius: 12px;
    border: 4px solid #45eaef;
    position: absolute;
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 358px;

    &::before {
      width: 346px;
    }
  }
`;
