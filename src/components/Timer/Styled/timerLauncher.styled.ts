import styled from "styled-components";

export const StyledTimerLauncher = styled.button`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 1;
  background-color: ${({ theme }) => theme.primaryTwo};
  color: ${({ theme }) => theme.primaryOne};
  border: none;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.5;
  }
`;
