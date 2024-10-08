import { Palette, PaletteVariant, ThemeColor, ThemeVariant } from "./theme.types"

const palettes: Record<ThemeVariant, Record<PaletteVariant, Palette>> = {
  default: {
    neutral: {
      50: "#FAFBFD",
      100: "#F1F4F8",
      200: "#E3E8F2",
      300: "#C5CBD8",
      400: "#9EA4B2",
      500: "#6D7280",
      600: "#4F566E",
      700: "#363E5C",
      800: "#22294A",
      900: "#141B3D",
      light: "#E3E8F2",
      main: "#6D7280",
      dark: "#363E5C",
      contrastText: "#FFFFFF",
    },
    primary: {
      50: "#FFF9EA",
      100: "#FFF2D5",
      200: "#FFE0AC",
      300: "#FFCB82",
      400: "#FFB663",
      500: "#FF9330",
      600: "#DB7123",
      700: "#B75318",
      800: "#933A0F",
      900: "#7A2709",
      light: "#FFE0AC",
      main: "#FF9330",
      dark: "#B75318",
      contrastText: "#FFFFFF",
    },
    secondary: {
      50: "#EDFFF2",
      100: "#D9FCE2",
      200: "#B3FACD",
      300: "#8BF1BA",
      400: "#6BE3AE",
      500: "#3ED29F",
      600: "#2DB493",
      700: "#1F9785",
      800: "#137974",
      900: "#0B6064",
      light: "#B3FACD",
      main: "#3ED29F",
      dark: "#1F9785",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      50: "#FFE9FD",
      100: "#FFD3FC",
      200: "#FEA7FF",
      300: "#F47BFF",
      400: "#E55AFF",
      500: "#CD24FF",
      600: "#A11ADB",
      700: "#7912B7",
      800: "#570B93",
      900: "#3E067A",
      light: "#FEA7FF",
      main: "#CD24FF",
      dark: "#7912B7",
      contrastText: "#FFFFFF",
    },
    success: {
      50: "#E2FCDB",
      100: "#E2FCDB",
      200: "#BFF9B8",
      300: "#BFF9B8",
      400: "#71DF7A",
      500: "#46CA5D",
      600: "#33AD54",
      700: "#23914B",
      800: "#167541",
      900: "#0D603B",
      light: "#BFF9B8",
      main: "#46CA5D",
      dark: "#23914B",
      contrastText: "#FFFFFF",
    },
    error: {
      50: "#FFEFEC",
      100: "#FEDAD2",
      200: "#FDADA6",
      300: "#FA7879",
      400: "#F65667",
      500: "#F0214A",
      600: "#CE184D",
      700: "#AC104D",
      800: "#8B0A48",
      900: "#730645",
      light: "#FDADA6",
      main: "#F0214A",
      dark: "#AC104D",
      contrastText: "#FFFFFF",
    },
    warning: {
      50: "#FFFAE2",
      100: "#FFF6CC",
      200: "#FFEB99",
      300: "#FFDC66",
      400: "#FFCE3F",
      500: "#FFB700",
      600: "#DB9600",
      700: "#B77900",
      800: "#935D00",
      900: "#7A4900",
      light: "#FFEB99",
      main: "#FFB700",
      dark: "#B77900",
      contrastText: "#FFFFFF",
    },
    info: {
      50: "#E5FAFF",
      100: "#CCF5FF",
      200: "#99E5FF",
      300: "#66D0FF",
      400: "#3FB9FF",
      500: "#0094FF",
      600: "#0072DB",
      700: "#0055B7",
      800: "#003C93",
      900: "#002B7A",
      light: "#99E5FF",
      main: "#0094FF",
      dark: "#0055B7",
      contrastText: "#FFFFFF",
    },
  },
}

export const colors: Record<ThemeVariant, ThemeColor> = {
  default: {
    palette: palettes.default,

    transparent: "rgba(0, 0, 0, 0)",

    text: palettes.default.neutral[800],

    textDim: palettes.default.neutral[600],

    background: palettes.default.neutral[200],

    border: palettes.default.neutral[400],

    tint: palettes.default.primary[500],

    separator: palettes.default.neutral[300],

    error: palettes.default.error[500],

    errorBackground: palettes.default.error[100],
  },
}
