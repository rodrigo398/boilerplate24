import type { Theme as MuiTheme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface ToastPalette {
    info: string
    error: string
    success: string
    default: string
  }

  interface BrandPalette {
    plum: string
    meadow: string
    lavender: string
    coral: string
    lightPlum: string
    darkPlum: string
    lightMeadow: string
    darkMeadow: string
    lightLavender: string
    darkLavender: string
    lightCoral: string
    darkCoral: string
    white: string
    black: string
    smoke: string
    silver: string
    slate: string
    charcoal: string
    errorText: string
  }

  interface SectionPalette {
    notStarted: string
    inProgress: string
    complete: string
    submitted: string
    locked: string
  }

  interface ExtraPaletteOptions {
    toast: ToastPalette
    disabled: SimplePaletteColorOptions
    brand: BrandPalette
    section: SectionPalette
  }

  interface Palette extends ExtraPaletteOptions {}

  interface PaletteOptions extends ExtraPaletteOptions {}

  interface SimplePaletteColorOptions {
    xlight?: string
    secondary?: string
  }

  interface TypeText {
    contrast: string
  }

  interface TypeBackground {
    grey: string
    dark: string
    light: string
  }
}

declare module '@mui/material/styles/createTypography' {
  interface FontStyle {
    fontFamilySecondary: CSSProperties['fontFamily']
    fontWeightBlack: React.CSSProperties['fontWeight']
  }
}

// Extend the module declarations with our MuiTheme to give us type information inside emotion
declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}
