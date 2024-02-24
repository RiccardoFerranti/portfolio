import styled from 'styled-components';

interface IStyledButton {
  $bgDark?: boolean;
  $shadow?: boolean;
}

const StyledButton = styled('button')<IStyledButton>`
  width: 100%;
  height: 54px;
  background-color: ${({ theme, $bgDark }) => (!$bgDark ? theme.colors.aqua : theme.colors.greyDark1)};
  border: 1px solid
    ${({ theme, $bgDark }) => (!$bgDark ? theme.colors.aquaDark : theme.colors.greyDark2)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 4px 3px -2px rgba(0, 0, 0, 0.4);
    box-shadow:  ${({ $shadow }) => ($shadow ? '1px 4px 3px -2px rgba(0, 0, 0, 0.4)' : 'none')};
  }
`;

export default StyledButton;
