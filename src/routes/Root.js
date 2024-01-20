import React, {Component} from 'react';
import SpotNavBar from '../components/SpotNavBar';
import { Outlet } from 'react-router-dom';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authToken: {
        refresh: "",
        access: ""
      },
      userId: null,
    };
  }

  handleAuthToken = (authToken, userId) => {
    this.setState({authToken: authToken});
    this.setState({userId: userId});
  }

  resetState = () => {
    this.setState({
      authToken: {
        refresh: "",
        access: ""
      },
      userId: null,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <SpotNavBar 
          onLogin={ this.handleAuthToken } 
          auth={ this.state.authToken.access } 
          userId={ this.state.userId }
          onLogout = { this.resetState }
          />

        <Outlet context={{auth: this.state.authToken.access, userId: this.state.userId}}/>
        

      </div>
    );
  }
  
}

export default Root;