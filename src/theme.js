import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6930c3',
    },
    background: {
      paper: '#252525',
    }
  }
});

export default theme;
