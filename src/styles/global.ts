import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: none;
    }
    
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }
`
