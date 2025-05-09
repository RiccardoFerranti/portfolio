import styled from 'styled-components';

interface IStyledInputText {
  $error: string | null,
}

const StyledInputText = styled.div<IStyledInputText>`
  color: ${({ theme }) => theme.colors.white};

  input {
    color: ${({ theme }) => theme.colors.greyDark1};
    background-color: rgba(255, 255, 255, 0.35);
    border: 1px solid ${({ theme, $error }) => (!$error ? theme.colors.greyDark1 : theme.colors.red)};
    width: 100%;
    height: 45px;
    box-shadow: none;
    border-radius: 6px;
    padding-left: 10px;


    &:active,
    &:focus {
      outline: none;
      box-shadow: 1px 4px 3px -2px rgba(0, 0, 0, 0.4);
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.greyDark1};
      opacity: 0.62;
    }
  }
`;

export default StyledInputText;
