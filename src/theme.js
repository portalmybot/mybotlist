import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f05454',
    },
    secondary: {
      main: '#ce6262',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#214252',
    },
  },
});

export default theme;
