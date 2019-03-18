import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';


class App extends Component {

  constructor() {
    super();
    this.state = {
      user:{}
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
          <Route path='/home' component={Home} />
            <Route path='/signup' component={SignUp} />
            <Route exact path='/' component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
