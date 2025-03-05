import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme['base-background']};
  padding-bottom: 5rem;

  display: flex;
  justify-content: center;
`

export const AppWrapper = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 2rem;
`
