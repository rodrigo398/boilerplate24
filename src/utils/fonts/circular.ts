import { CSSProperties } from '@mui/material/styles/createTypography'
// .woff2
import circularStdBlackWoff2 from '@assets/fonts/circularstdblack.woff2'
import circularStdBlackItalicWoff2 from '@assets/fonts/circularstdblackitalic.woff2'
import circularStdBoldWoff2 from '@assets/fonts/circularstdbold.woff2'
import circularStdBoldItalicWoff2 from '@assets/fonts/circularstdbolditalic.woff2'
import circularStdMediumWoff2 from '@assets/fonts/circularstdmedium.woff2'
import circularStdMediumItalicWoff2 from '@assets/fonts/circularstdmediumitalic.woff2'
import circularStdBookWoff2 from '@assets/fonts/circularstdbook.woff2'
import circularStdBookItalicWoff2 from '@assets/fonts/circularstdbookitalic.woff2'
// .woff
import circularStdBlackWoff from '@assets/fonts/circularstdblack.woff'
import circularStdBlackItalicWoff from '@assets/fonts/circularstdblackitalic.woff'
import circularStdBoldWoff from '@assets/fonts/circularstdbold.woff'
import circularStdBoldItalicWoff from '@assets/fonts/circularstdbolditalic.woff'
import circularStdMediumWoff from '@assets/fonts/circularstdmedium.woff'
import circularStdMediumItalicWoff from '@assets/fonts/circularstdmediumitalic.woff'
import circularStdBookWoff from '@assets/fonts/circularstdbook.woff'
import circularStdBookItalicWoff from '@assets/fonts/circularstdbookitalic.woff'

export const fontFamily = 'Circular Std'
const fontDisplay = 'swap'

export const circularStdBlack: CSSProperties = {
  fontFamily,
  fontStyle: 'normal',
  fontDisplay,
  fontWeight: 900,
  src: `
      url(${circularStdBlackWoff2}) format('woff2'),
      url(${circularStdBlackWoff}) format('woff')
    `,
}

export const circularStdBlackItalic: CSSProperties = {
  fontFamily,
  fontStyle: 'italic',
  fontDisplay,
  fontWeight: 900,
  src: `
      url(${circularStdBlackItalicWoff2}) format('woff2'),
      url(${circularStdBlackItalicWoff}) format('woff')
    `,
}

export const circularStdBold: CSSProperties = {
  fontFamily,
  fontStyle: 'normal',
  fontDisplay,
  fontWeight: 700,
  src: `
      url(${circularStdBoldWoff2}) format('woff2'),
      url(${circularStdBoldWoff}) format('woff')
    `,
}

export const circularStdBoldItalic: CSSProperties = {
  fontFamily,
  fontStyle: 'italic',
  fontDisplay,
  fontWeight: 700,
  src: `
      url(${circularStdBoldItalicWoff2}) format('woff2'),
      url(${circularStdBoldItalicWoff}) format('woff')
    `,
}

export const circularStdMedium: CSSProperties = {
  fontFamily,
  fontStyle: 'normal',
  fontDisplay,
  fontWeight: 500,
  src: `
      url(${circularStdMediumWoff2}) format('woff2'),
      url(${circularStdMediumWoff}) format('woff')
    `,
}

export const circularStdMediumItalic: CSSProperties = {
  fontFamily,
  fontStyle: 'italic',
  fontDisplay,
  fontWeight: 500,
  src: `
      url(${circularStdMediumItalicWoff2}) format('woff2'),
      url(${circularStdMediumItalicWoff}) format('woff')
    `,
}

export const circularStdBook: CSSProperties = {
  fontFamily,
  fontStyle: 'normal',
  fontDisplay,
  fontWeight: 400,
  src: `
      url(${circularStdBookWoff2}) format('woff2'),
      url(${circularStdBookWoff}) format('woff')
    `,
}

export const circularStdBookItalic: CSSProperties = {
  fontFamily,
  fontStyle: 'italic',
  fontDisplay,
  fontWeight: 400,
  src: `
      url(${circularStdBookItalicWoff2}) format('woff2'),
      url(${circularStdBookItalicWoff}) format('woff')
    `,
}
