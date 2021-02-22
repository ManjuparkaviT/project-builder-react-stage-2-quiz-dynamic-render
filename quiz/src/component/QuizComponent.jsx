import React, { Component } from 'react'
import './Style.css';

export default class QuizComponent extends Component {
    render() {
        return (
            <div className="main">
                <div className="quiz">
                    <h1>Question</h1>
                    <div className="question">
                        <h4>4 of 15</h4>
                        <h3>Which is the only mammal that can't jump?</h3>
                    </div>
                    <div className="options">
                        <button className="btn1">Dog</button>
                        <button className="btn2">Goat</button>
                        <br/>
                    </div>
                    <div className="options">
                        <button className="btn3 ">Elephant</button>
                        <button className="btn4">Lion</button>
                        <br></br>
                    </div>
                    <br/>
                    <div className="buttons">
                        <button className="btn5">Previous</button>
                        <button className="btn6">Next</button>
                        <button className="btn7">Quit</button>  
                    </div>
                </div>
            </div>
            
        
            )
    }
}
