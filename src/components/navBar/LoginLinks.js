/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

/* const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
})); */

export default class LoginLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleLoginUrl: null,
    };
  }
  componentDidMount() {
    
    fetch('http://127.0.0.1:8000/api/auth/google/url', {
        headers: new Headers({
          accept: 'application/json'
        })
      })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong!');
      })
      .then((data) => this.setState({
        googleLoginUrl: data.url
      }))
      .catch((error) => console.error(error));
  }
  render() {
    const { googleLoginUrl } = this.state;
    return (
      
      <Typography>
        {googleLoginUrl && (
            <a href={googleLoginUrl}>
              Sign in with Google
            </a>
          )}
        <Link component={RouterLink} to="/register" color="inherit">
          {'Registrar2'}
          </Link>
        </Typography>
    ); 
  }

}
/* export default function LoginLink() {
  const classes = useStyles();
  const { googleLoginUrl } = this.state;


} */
