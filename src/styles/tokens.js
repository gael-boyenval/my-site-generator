const tokens = {
  family: {
    sans: '"Bw Modelica", "Helvetica Neue", Helvetica, Arial, sans-serif',
    serif:
      '"Gauthier FY", "Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif',
  },
  colors: {
    base: {
      darkest: '#0D1B2A',
      darker: '#1B263B',
      light: '#415A77',
      lighter: '#778DA9',
    },
    white: {
      dark: '#E0E1DD',
      light: '#F4F5F2',
    },
    electric: '#62E0BB',
  },
  fontSizes: {
    xxxs: 12,
    xxs: 14,
    xs: 16,
    s: 20,
    m: 24,
    l: 30,
    xl: 36,
    xxl: 64,
    xxxl: 72,
  },
  unit: 12,
  spaces: {
    none: 0,
    xxs: 4,
    xs: 6,
    s: 12,
    m: 24,
    l: 36,
    xl: 48,
    xxl: 52,
    xxxl: 72,
    wide: 120,
  },
};

export const { colors } = tokens;
export const { family } = tokens;
export const { fontSizes } = tokens;
export const { unit } = tokens;
export const { spaces } = tokens;

export default tokens;
