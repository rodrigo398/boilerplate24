import { createTheme as createMuiTheme } from '@mui/material/styles'

import {
  fontFamily as circular,
  circularStdBlack,
  circularStdBold,
  circularStdMedium,
  circularStdBook,
} from '@src/utils/fonts/circular'
import {
  fontFamily as karla,
  karlaRegular,
  karlaItalic,
} from '@src/utils/fonts/karla'

export const fontPrimary = circular
export const fontSecondary = karla

const fontFamily = `"${fontPrimary}", Helvetica, Arial, sans-serif`
const fontFamilySecondary = `"${fontSecondary}", Helvetica, Arial, sans-serif`

const fontWeightBlack = 900
const fontWeightBold = 700
const fontWeightMedium = 500
const fontWeightRegular = 400

export const spacingUnit = 8

const spacing = (multiplier: number) => multiplier * spacingUnit

export const palette = {
  primary: {
    main: '#03AD70',
    light: '#6D9EFF',
    xlight: '#F2F6FF',
    dark: '#382638',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#006C45',
    light: '#6D9EFF',
    dark: '#FF6E56',
    contrastText: '#4B87FF',
  },
  background: {
    light: '#F8F7FA',
    default: '#FFFFFF',
    dark: '#000000',
    paper: '#FFFFFF',
  },
  disabled: {
    dark: '#384147',
    main: '#6D6D6D',
    light: '#B8B8B8',
    xlight: '#DBDBDB',
  },
  success: {
    main: '#006C45',
    light: '#CFFFD2',
    xlight: '#F5FDF7',
  },
  warning: {
    main: '#FF8721',
    xlight: '#FFFAEA',
  },
  error: {
    main: '#EC4125',
    light: '#FBE3EE',
    xlight: '#fcedf4',
  },
  text: {
    primary: '#000000',
    secondary: '#4A494A',
    contrast: '#FFFFFF',
    main: '#333333',
    hint: '#6D6D6D',
  },
  divider: '#ECECEC',
  toast: {
    info: '#532C53',
    error: '#D53C23',
    success: '#006C45',
    default: '#000000',
  },
  button: {
    main: '#000000',
    secondary: '#FFFFFF',
  },
  info: {
    main: '#9F549F',
  },
  section: {
    notStarted: '#532C53',
    inProgress: '#D53C23',
    complete: '#006C45',
    submitted: '#006C45',
    locked: '#6D6D6D',
  },
  brand: {
    // Primary
    plum: '#532C53',
    meadow: '#006C45',
    lavender: '#E9C9FF',
    coral: '#FF6E56',

    // Secondary
    lightPlum: '#9F549F',
    darkPlum: '#341B34',
    lightMeadow: '#03AD70',
    darkMeadow: '#004B30',
    lightLavender: '#F7EAFF',
    darkLavender: '#CDABE3',
    lightCoral: '#FF9988',
    darkCoral: '#EC4125',

    // Greys
    white: '#ffffff',
    black: '#000000',
    smoke: '#F8F7FA',
    silver: '#B8B8B8',
    slate: '#6D6D6D',
    charcoal: '#4A494A',

    // Other
    errorText: '#D53C23',
  },
}

const theme = createMuiTheme({
  palette,
  spacing,
  transitions: {
    duration: {
      short: 250,
      complex: 250,
      shorter: 250,
      shortest: 250,
      standard: 250,
      leavingScreen: 250,
      enteringScreen: 250,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily,
    fontFamilySecondary,
    fontWeightBlack,
    fontWeightBold,
    fontWeightMedium,
    fontWeightRegular,
  },
})

// TOOD: Remove this when we have a better solution
export const colorHover = palette.brand.silver

export const anchorStyles = {
  fontWeight: fontWeightBold,
  textDecoration: 'none',
  color: palette.brand.meadow,
  borderBottom: `1px solid ${palette.brand.meadow}`,
  '&:focus': {
    outline: `${theme.typography.pxToRem(2)} solid ${
      theme.palette.brand.darkCoral
    }`,
  },
  '&:hover': {
    color: palette.brand.meadow,
    backgroundColor: palette.background.light,
  },
  '&:visited': {
    color: palette.brand.meadow,
  },
  '[data-js-focus-visible] &:focus:not([data-focus-visible-added])': {
    outline: 'none',
  },
}

// We can only use typography function such as pxToRem after the createMuiTheme
theme.typography = {
  ...theme.typography,
  fontFamily,
  fontFamilySecondary,
  h1: {
    ...theme.typography.h1,
    fontFamily,
    fontWeight: fontWeightBlack,
    fontSize: theme.typography.pxToRem(30),
    lineHeight: theme.typography.pxToRem(36),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(56),
      lineHeight: theme.typography.pxToRem(58),
    },
  },
  h2: {
    ...theme.typography.h2,
    fontFamily,
    fontWeight: fontWeightBold,
    fontSize: theme.typography.pxToRem(24),
    lineHeight: theme.typography.pxToRem(28),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(48),
      lineHeight: theme.typography.pxToRem(52),
    },
  },
  h3: {
    ...theme.typography.h3,
    fontFamily,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(24),
    lineHeight: theme.typography.pxToRem(32),
  },
  subtitle1: {
    fontFamilySecondary,
    ...theme.typography.subtitle1,
  },
  subtitle2: {
    fontFamilySecondary,
    ...theme.typography.subtitle2,
  },
  body1: {
    ...theme.typography.body1,
    color: palette.text.secondary,
    fontFamily: fontFamilySecondary,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: theme.typography.pxToRem(20),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(28),
    },
    '& a': anchorStyles,
  },
  body2: {
    ...theme.typography.body2,
    fontFamily: fontFamilySecondary,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: theme.typography.pxToRem(22),
  },
  button: {
    ...theme.typography.button,
    fontFamily,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1,
  },
}

// Overrides are assigned here so we can use theme.breakpoints
theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    ...theme.components?.MuiCssBaseline,
    styleOverrides: {
      '@global': {
        '@font-face': [
          circularStdBlack,
          circularStdBold,
          circularStdMedium,
          circularStdBook,
          karlaRegular,
          karlaItalic,
        ],
      },
    },
  },
  MuiButtonBase: {
    ...theme.components?.MuiButtonBase,
    styleOverrides: {
      root: {
        '&:before': {
          content: `''`,
          display: 'flex',
          width: `calc(100% + ${theme.typography.pxToRem(10)})`,
          height: `calc(100% + ${theme.typography.pxToRem(10)})`,
          position: 'absolute',
          top: theme.typography.pxToRem(-5),
          left: theme.typography.pxToRem(-5),
          borderRadius: 'inherit',
          border: `${theme.typography.pxToRem(2)} solid ${
            theme.palette.brand.darkCoral
          }`,
          transform: 'scale(0.98)',
          opacity: 0,
          transition: 'transform 0.16s ease',
          pointerEvents: 'none',
        },
        '&:focus:not(:hover)': {
          '&:before': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        '[data-js-focus-visible] &:focus:not([data-focus-visible-added])': {
          '&:before': {
            content: 'none',
          },
        },
      },
    },
  },
  MuiButton: {
    ...theme.components?.MuiButton,
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontFamily,
        fontWeight: fontWeightBold,
        borderRadius: '10em',
        '&:disabled': {
          color: palette.disabled.main,
        },
      },
      endIcon: {
        marginLeft: theme.typography.pxToRem(18),
      },
      contained: {
        minWidth: 100,
        minHeight: theme.typography.pxToRem(50),
        fontSize: theme.typography.pxToRem(15),
        backgroundColor: palette.button.secondary,
        color: palette.text.primary,
        padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(
          30
        )}`,
        [theme.breakpoints.up('md')]: {
          minHeight: theme.typography.pxToRem(60),
          fontSize: theme.typography.pxToRem(16),
        },
        '&:hover, &:focus': {
          color: palette.primary.dark,
          backgroundColor: palette.background.light,
        },
        '&:disabled': {
          color: palette.text.contrast,
          backgroundColor: palette.disabled.main,
        },
      },
      containedPrimary: {
        backgroundColor: palette.button.main,
        color: palette.text.contrast,
        '&&:focus, &&:active': {
          color: palette.text.contrast,
          backgroundColor: palette.button.main,
          '@media (hover: none)': {
            backgroundColor: palette.button.main,
          },
        },
        '&&:hover': {
          color: palette.text.contrast,
          backgroundColor: palette.primary.dark,
        },
        '&:disabled': {
          color: palette.text.contrast,
          backgroundColor: palette.disabled.main,
        },
      },
      containedSecondary: {
        backgroundColor: 'transparent',
        color: palette.text.primary,
        '&:hover, &:focus': {
          color: palette.text.primary,
        },
        '&&:hover': {
          backgroundColor: palette.background.light,
          '@media (hover: none)': {
            backgroundColor: palette.background.light,
          },
        },
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
      containedSizeSmall: {
        padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(
          30
        )}`,
      },
      outlined: {
        minWidth: 100,
        minHeight: theme.typography.pxToRem(50),
        fontSize: theme.typography.pxToRem(15),
        color: palette.text.primary,
        borderColor: 'currentColor',
        padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(
          30
        )}`,
        [theme.breakpoints.up('md')]: {
          minHeight: theme.typography.pxToRem(60),
          fontSize: theme.typography.pxToRem(16),
        },
        '&:hover, &:focus': {
          borderColor: 'currentColor',
          color: palette.primary.dark,
        },
        '&:disabled': {
          color: palette.disabled.main,
          borderColor: 'currentColor',
        },
      },
      outlinedPrimary: {
        color: palette.text.primary,
        borderColor: 'currentColor',
        '&:focus': {
          color: palette.text.primary,
        },
        '&:hover': {
          color: palette.primary.dark,
          borderColor: 'currentColor',
          backgroundColor: palette.background.light,
        },
        '&:disabled': {
          color: palette.disabled.main,
          borderColor: 'currentColor',
        },
      },
      outlinedSizeSmall: {
        padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(
          30
        )}`,
      },
      text: {
        color: palette.secondary.main,
        fontSize: theme.typography.pxToRem(20),
        padding: `${theme.typography.pxToRem(7.5)} ${theme.typography.pxToRem(
          15
        )}`,
        '&:before': {
          borderColor: theme.palette.secondary.main,
        },
        '&:hover': {
          backgroundColor: palette.background.light,
        },
        '&.MuiButton-colorInherit': {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      textPrimary: {
        color: palette.secondary.main,
        '&:hover': {
          backgroundColor: palette.background.light,
        },
      },
    },
  },
  MuiInputBase: {
    ...theme.components?.MuiInputBase,
    styleOverrides: {
      root: {
        height: theme.typography.pxToRem(60),
        fontFamily: fontFamily,
        fontSize: theme.typography.pxToRem(18),
        border: `${theme.typography.pxToRem(2)} solid transparent`,
        backgroundColor: palette.disabled.light,

        [theme.breakpoints.up('md')]: {
          height: theme.typography.pxToRem(80),
        },

        '&.Mui-error': {
          borderColor: palette.error.main,
        },
      },
      input: {
        padding: `${theme.typography.pxToRem(15)} ${theme.typography.pxToRem(
          37.5
        )}`,
        '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button':
          {
            appearance: 'none',
          },
        '&::placeholder': {
          opacity: 1,
          color: palette.disabled.main,
        },
      },
    },
  },
  MuiFormControl: {
    ...theme.components?.MuiFormControl,
    styleOverrides: {
      root: {
        marginTop: `${theme.spacing(5)}`,
        '& + &': {
          marginTop: `${theme.spacing(7)}`,
        },
      },
    },
  },
  MuiFormControlLabel: {
    ...theme.components?.MuiFormControlLabel,
    styleOverrides: {
      label: {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: theme.typography.pxToRem(22),
        '& a': {
          color: palette.brand.meadow,
        },
      },
    },
  },
  MuiTextField: {
    ...theme.components?.MuiTextField,
    styleOverrides: {
      root: {
        marginTop: 0,
      },
    },
  },
  MuiFilledInput: {
    ...theme.components?.MuiFilledInput,
    styleOverrides: {
      root: {
        backgroundColor: palette.background.light,
        '&&': {
          borderRadius: '10em',
          '&:hover': {
            backgroundColor: palette.background.light,
          },
        },
        '&.Mui-disabled': {
          backgroundColor: palette.brand.smoke,
          '.MuiInputBase-input': {
            // color: fade(palette.brand.slate, 0.7),
          },
        },
        '&.Mui-focused': {
          backgroundColor: palette.background.light,
          borderColor: palette.brand.plum,
        },
      },
      colorSecondary: {
        backgroundColor: palette.background.paper,
        '&&:hover, &.Mui-focused': {
          backgroundColor: palette.background.paper,
        },
        '&.Mui-disabled': {
          backgroundColor: palette.background.paper,
        },
      },
      input: {
        padding: `${theme.typography.pxToRem(26.25)} ${theme.typography.pxToRem(
          30
        )}`,
        [theme.breakpoints.up('md')]: {
          padding: `${theme.typography.pxToRem(15)} ${theme.typography.pxToRem(
            37.5
          )}`,
        },
      },
      underline: {
        '&:before, &:after': {
          content: 'none',
        },
      },
    },
  },
  MuiFormLabel: {
    ...theme.components?.MuiFormLabel,
    styleOverrides: {
      root: {
        fontFamily,
        color: palette.text.hint,
        margin: `${theme.typography.pxToRem(30)} 0 ${theme.typography.pxToRem(
          30
        )} ${theme.typography.pxToRem(25)}`,
        [theme.breakpoints.up('md')]: {
          fontSize: theme.typography.pxToRem(22),
          margin: `${theme.typography.pxToRem(12)} 0 ${theme.typography.pxToRem(
            15
          )} ${theme.typography.pxToRem(35)}`,
        },
        '&.Mui-error': {
          color: palette.text.hint,
        },
        '&.Mui-focused': {
          color: palette.text.hint,
        },
        '&.Mui-disabled': {
          color: palette.text.hint,
        },
      },
      colorSecondary: {
        color: palette.text.hint,
        '&.Mui-focused': {
          color: palette.text.hint,
        },
      },
    },
  },
  MuiInputLabel: {
    ...theme.components?.MuiInputLabel,
    styleOverrides: {
      root: {
        zIndex: 1,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflowX: 'hidden',
        lineHeight: 1.3,
        maxWidth: `calc(100% - ${theme.spacing(10)})`,
        fontSize: theme.typography.pxToRem(14),
        [theme.breakpoints.up('md')]: {
          fontSize: theme.typography.pxToRem(20),
        },
        '&.MuiInputLabel-shrink': {
          marginTop: `${theme.spacing(1.5)}`,
          transform: `translateY(-${theme.spacing(
            3.125
          )}) translate(0, -100%) scale(1)`,
        },
      },
      formControl: {
        transform: 'scale(1)',
        [theme.breakpoints.up('md')]: {
          transform: 'translateY(50%) scale(1)',
        },
      },
      filled: {
        pointerEvents: 'all',
        transform: 'scale(1)',
        [theme.breakpoints.up('md')]: {
          transform: 'translateY(50%) scale(1)',
        },
        '&.MuiInputLabel-shrink': {
          whiteSpace: 'normal',
          overflowX: 'visible',
          lineHeight: 1,
          marginTop: `${theme.spacing(1.5)}`,
          transform: `translateY(-${theme.spacing(
            3.125
          )}) translate(0, -100%) scale(1)`,
          '&.MuiInputLabel-marginDense': {
            '&&': {
              transform: `translateY(-${theme.spacing(
                3.75
              )}) translate(0, -100%) scale(1)`,
            },
          },
        },
        '&.MuiInputLabel-marginDense': {
          transform: 'translateY(0) scale(1)',
          margin: `${theme.typography.pxToRem(20)} 0 ${theme.typography.pxToRem(
            20
          )} ${theme.typography.pxToRem(30)}`,
          [theme.breakpoints.up('md')]: {
            margin: `${theme.typography.pxToRem(17)} ${theme.typography.pxToRem(
              30
            )}`,
          },
        },
      },
      shrink: {
        transform: `translateY(-${theme.spacing(
          3.75
        )}) translate(0, -100%) scale(1)`,
      },
    },
  },
  MuiTypography: {
    ...theme.components?.MuiTypography,
    styleOverrides: {
      root: {
        '&.MuiTypography-h2': {
          fontSize: theme.typography.pxToRem(30),
          [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(48),
          },
        },
      },
      gutterBottom: {
        '&.MuiTypography-h2': {
          marginBottom: '0.56em',
          [theme.breakpoints.up('md')]: {
            marginBottom: '0.42em',
          },
        },
        '&.MuiTypography-overline': {
          marginBottom: '0.85em',
        },
      },
    },
  },
  MuiCard: {
    ...theme.components?.MuiCard,
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
}

export default theme
