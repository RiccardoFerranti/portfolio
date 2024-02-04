import styled from 'styled-components';

interface IStyledButton {
  $bgDark?: boolean;
}

const StyledButton = styled('button')<IStyledButton>`
  width: 100%;
  height: 54px;
  background-color: ${({ theme, $bgDark }) => (!$bgDark ? theme.colors.aqua : theme.colors.grayDark)};
  border: 1px solid
    ${({ theme, $bgDark }) => (!$bgDark ? theme.colors.aquaDark : theme.colors.grayDark2)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 4px 3px -2px rgba(0, 0, 0, 0.4);
  }
`;

export default StyledButton;
