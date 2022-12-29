import { blue, cyan } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from '@next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: cyan[800]
    },
    secondary: {
      main: blue[500]
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});

export default theme;
