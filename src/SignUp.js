import React, { Component } from 'react';
import fire from './config/Fire';

class SignUp extends Component {

    signup = (e) => {
        const email = document.getElementById('txtEmail').value;
        const pass = document.getElementById('txtPassword').value;
        const confirmpass = document.getElementById('txtConfirmPassword').value;
        if (pass !== confirmpass) {

        }
        else {
            const promise = fire.auth().createUserWithEmailAndPassword(email, pass);
            promise.then(user => {
                this.props.history.push("./");
            })
                .catch(e => console.log(e))
        }
    }

    render() {
        return (
            <div className="container">
                <input id="txtEmail" type="email" placeholder="Email"></input>
                <input id="txtPassword" type="password" placeholder="Password"></input>
                <input id="txtConfirmPassword" type="password" placeholder="Confirm Password"></input>
                <button id="btnSignUp" className="btn btn-secondary" onClick={this.signup} >Sign Up</button>
            </div>
        );
    }
}
export default SignUp;
