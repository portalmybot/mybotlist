import React, { Component } from 'react'

export default class LoginGoogle extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {},
    };
  }
  componentDidMount() {
    fetch(`http://127.0.0.1:8000/api/auth/google/callback/${this.props.location.search}`, {
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
      
      console.log(data);
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
            <details>
              {/* <summary>Welcome {data.user.name}</summary> */}
              <p>Here is your info: </p>
              <code>{JSON.stringify(data, null, 2)}</code>
            </details>
          </div>
      </div>
    )
  }
}
