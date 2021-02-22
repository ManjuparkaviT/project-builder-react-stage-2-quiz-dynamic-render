import React, { Component } from 'react'
import './Style.css';
export default class HomeComponent extends Component {
    render() {
        return (
            <div className="Home">
                <h1 className="text">Quiz App</h1>
                <button className="playnow"> Play Now</button>
            </div>
        )
    }
}
