import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    h2 {
      font-size: 1rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-label']};
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
