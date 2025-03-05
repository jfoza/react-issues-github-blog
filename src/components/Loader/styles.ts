import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.blue};
    animation: ${spin} 1s linear infinite;
  }
`
