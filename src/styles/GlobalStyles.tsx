import { css, Global } from '@emotion/react'
import { Theme, useTheme } from '@mui/material'

/**
 * Global base styles
 */
const GlobalStyles = () => {
  const theme: Theme = useTheme()

  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          height: 100%;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          color: inherit;
          text-decoration: none;

          &:hover {
            color: ${theme.palette.brand.meadow};
          }
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        img {
          max-width: 100%;
        }

        fieldset {
          margin: 0;
          padding: 0;
          border: 0;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        /* deletes the 'X' from Internet Explorer */
        input[type='search']::-ms-clear {
          display: none;
          width: 0;
          height: 0;
        }

        input[type='search']::-ms-reveal {
          display: none;
          width: 0;
          height: 0;
        }

        /* deletes the 'X' from Chrome */
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          display: none;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          transition: background-color 5000s ease-in-out 0s;
        }
      `}
    />
  )
}

export default GlobalStyles
