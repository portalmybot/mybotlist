import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
    };
  }
  componentDidMount() {
    fetch(`/api/auth/discord/callback/${this.props.location.search}`, {
      headers: new Headers({
        accept: 'application/json'
      })
    })
    .then((response) => {
      if(response.ok) {
        return response.json()
      }
      throw new Error('¡Algo salió mal!');
    })
    .then((data) => {
      this.setState({ loading: false, data });
    })
    .catch((error) => {
      this.setState({ loading: false, error });
      console.log(error);
    })
  }

  render() {
    const { loading, error, data } = this.state;
    if(loading) {
      return <div>Cargando...</div>
    }
    if(error) {
      return (
        <div>
          <p>Error:</p>
          <code>{error.toString()}</code>
        </div>
      )
    }
    return (
      <div>
        <div>
          <p>Here is your info: </p>
          <code>{JSON.stringify(data, null, 2)}</code>
           
        </div>
      </div>
    )
  }
}
