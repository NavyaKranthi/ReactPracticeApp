import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';


class Home extends Component {
    constructor() {
        super();

        const dbref = firebase.database().ref().child('laptops');
        dbref.on('value', snap => {
            let laptops = snap.val();
            this.setState(laptops);
        });
    }
    componentDidUpdate = () => {
        this.laptopsList = Object.keys(this.state).map(laptop => {
            return (
                <div key={Math.random()}>
                       {laptop}
                </div>
            )
        })
        console.log("laptops List in function", this.laptopsList);
        ReactDOM.render(this.laptopsList, document.getElementById("laptop-List"));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="routes-list">
                    <h1>You are Home</h1>
                    <ul id="laptop-List">
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;