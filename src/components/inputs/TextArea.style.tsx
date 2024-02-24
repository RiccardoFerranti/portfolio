import styled from 'styled-components';

interface IStyledTextArea {
  $error: string | null,
}

export const StyledTextArea = styled.div<IStyledTextArea>`
  color: ${({ theme }) => theme.colors.white};

  textarea {
    color: ${({ theme }) => theme.colors.greyDark1};
    background-color: rgba(255, 255, 255, 0.35);
    border: 1px solid ${({ theme, $error }) => (!$error ? theme.colors.greyDark1 : theme.colors.red)};
    width: 100%;
    min-height: 122px;
    max-height: 122px;
    box-shadow: none;
    border-radius: 6px;
    padding-top: 15px;
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

export const StyledMessageLength = styled.p`
  font-size: 12px;
  text-align: right;
`;
export const StyledTextAreaFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
