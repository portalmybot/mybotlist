import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#252525',
    },
    secondary: {
      main: '#64dfdf',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#393e46',
    },
  },
});

export default theme;
