import styled from 'styled-components'

export const MarkdownContainer = styled.div`
  max-width: 864px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    color: ${({ theme }) => theme['base-text']};
  }

  ul {
    padding-left: 1.5rem;
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  li {
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: normal;
  }

  pre {
    background: ${({ theme }) => theme['base-post']};
    color: #fff;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    max-width: 100%;
    white-space: pre-wrap;
  }

  code {
    background: ${({ theme }) => theme['base-post']};
    padding: 2px 5px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    overflow-wrap: break-word;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1rem 0;
    border-radius: 5px;
  }
`
