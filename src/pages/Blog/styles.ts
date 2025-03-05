import styled from 'styled-components'

export const LoadingOrEmpty = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
`

export const Empty = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-span']};
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 864px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 416px;
  height: 260px;
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-title']};
    }

    span {
      width: 30%;
      text-align: end;
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }

    @media (width <= 545px) {
      flex-direction: column;

      span {
        text-align: start;
      }
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  border: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }

  @media (width <= 545px) {
    padding: 1rem;
  }
`
