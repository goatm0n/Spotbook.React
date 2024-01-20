import './App.css';
import React, {Component} from 'react';
import SpotMap from './components/SpotMap';
import SpotNavBar from './components/SpotNavBar';
import { Outlet } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authToken: {
        refresh: "",
        access: ""
      }
    };
  }

  handleAuthToken = (authToken) => {
    this.setState({authToken: authToken});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <SpotNavBar onLogin={ this.handleAuthToken } auth={ this.state.authToken.access } />
        
        <SpotMap id="spotmap"/>

        <Outlet />
        

      </div>
    );
  }
  
}

export default App;
