import styled from 'styled-components'

export const DetailsSummaryContainer = styled.div`
  width: 100%;
  height: 168px;
  padding: 2rem;
  margin-top: -88px;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;

  @media (width < 545px) {
    height: max-content;
    display: flex;
    flex-direction: column;
  }
`

export const DetailsSummaryInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
`

export const DetailsSummaryInfoHeader = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.875rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-size: 0.875rem;

    display: flex;
    align-items: center;
  }

  a:first-child {
    svg {
      margin-right: 5px;
    }
  }

  a:last-child {
    svg {
      margin-left: 5px;
    }
  }

  @media (width < 545px) {
    display: flex;
    flex-direction: column;
  }
`

export const DetailsSummaryInfoMain = styled.section`
  h2 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
  }
`

export const DetailsSummaryInfoFooter = styled.section`
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
