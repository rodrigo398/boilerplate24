import { PropsWithChildren } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@src/styles/GlobalStyles'
import theme from '@src/styles/theme'

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
