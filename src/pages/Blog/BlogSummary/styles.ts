import styled from 'styled-components'

export const BlogSummaryContainer = styled.div`
  width: 100%;
  height: 212px;
  padding: 2rem;
  margin-top: -88px;

  display: flex;
  gap: 2rem;

  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 6px;
  }

  @media (width < 545px) {
    height: max-content;
    display: flex;
    flex-direction: column;

    img {
      margin: 0 auto;
    }
  }
`

export const BlogSummaryInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`

export const BlogSummaryInfoHeader = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.875rem;

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-size: 0.875rem;

    svg {
      margin-left: 5px;
    }
  }

  @media (width < 545px) {
    display: flex;
    flex-direction: column;
  }
`

export const BlogSummaryInfoMain = styled.section`
  p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;
  }
`

export const BlogSummaryInfoFooter = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`

export const Flag = styled.div`
  width: max-content;
  display: flex;
  gap: 5px;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  svg {
    color: ${({ theme }) => theme['base-label']};
  }
`
