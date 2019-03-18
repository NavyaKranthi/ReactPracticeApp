import React, { Component } from 'react';
import fire from './config/Fire';

class Login extends Component {

    login = (e) => {
        const email = document.getElementById('txtEmail').value;
        const pass = document.getElementById('txtPassword').value;
        const promise = fire.auth().signInWithEmailAndPassword(email, pass);
        promise.then(user => {
            this.props.history.push("./Home");
        })
            .catch(e => console.log(e))
    }

    handleSignUp = (e) => {
        // ReactDOM.render(<SignUp />, document.getElementById('root'));
        e.preventDefault();
        alert('Authentication coming soon!');
        this.props.history.push('/signup')
    }

    render() {
        return (
            <div className="container">
                <input id="txtEmail" type="email" placeholder="Email"></input>
                <input id="txtPassword" type="password" placeholder="Password"></input>
                <button id="btnLogin" className="btn btn-action" onClick={this.login}>Log In</button>
                <button id="btnSignup" className="btn btn-secondary" onClick={this.handleSignUp}>Sign Up</button>
            </div>
        );
    }
}

export default Login;
