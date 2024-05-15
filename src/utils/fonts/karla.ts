import { CSSProperties } from '@mui/material/styles/createTypography'
// .woff2
import karlaBoldWoff2 from '@assets/fonts/karlabold.woff2'
import karlaBoldItalicWoff2 from '@assets/fonts/karlabolditalic.woff2'
import karlaItalicWoff2 from '@assets/fonts/karlaitalic.woff2'
import karlaRegularWoff2 from '@assets/fonts/karlaregular.woff2'
// .woff
import karlaBoldWoff from '@assets/fonts/karlabold.woff'
import karlaBoldItalicWoff from '@assets/fonts/karlabolditalic.woff'
import karlaItalicWoff from '@assets/fonts/karlaitalic.woff'
import karlaRegularWoff from '@assets/fonts/karlaregular.woff'

export const fontFamily = 'Karla'
const fontDisplay = 'swap'

export const karlaBold: CSSProperties = {
  fontFamily,
  fontStyle: 'normal',
  fontDisplay,
  fontWeight: 700,
  src: `
      url(${karlaBoldWoff2}) format('woff2'),
      url(${karlaBoldWoff}) format('woff')
    `,
}

export const karlaBoldItalic: CSSProperties = {
  fontFamily,
  fontStyle: 'italic',
  fontDisplay,
  fontWeight: 700,
  src: `
      url(${karlaBoldItalicWoff2}) format('woff2'),
      url(${karlaBoldItalicWoff}) format('woff')
    `,
}

export const karlaRegular: CSSProperties = {
  fontFamily,
  fontStyle: 'normal',
  fontDisplay,
  fontWeight: 400,
  src: `
      url(${karlaRegularWoff2}) format('woff2'),
      url(${karlaRegularWoff}) format('woff')
    `,
}

export const karlaItalic: CSSProperties = {
  fontFamily,
  fontStyle: 'italic',
  fontDisplay,
  fontWeight: 400,
  src: `
      url(${karlaItalicWoff2}) format('woff2'),
      url(${karlaItalicWoff}) format('woff')
    `,
}
