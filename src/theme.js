import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#313131',
    },
    secondary: {
      main: '#ca3e47',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#414141',
    },
  },
});

export default theme;
