import styled from 'styled-components';

export const StyledLabel = styled.p`
  font-size: 14px;
`;

export const StyledError = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 3px;
`;
