import React, { Component } from 'react'
import './Style.css';
import Questions from './Questions.json';

export default class QuizComponent extends Component {
    constructor(){
        super();
        this.state={
            value:1,
            quiz:Questions[0]
        }
        this.handleNext=this.handleNext.bind(this);
        this.handlePrevious=this.handlePrevious.bind(this);
    }

    handleNext = () =>{
        this.setState({
            value:this.state.value+1,
            quiz:Questions[this.state.value]
        })
    }

    handlePrevious = () =>{
        this.setState({
            value:this.state.value-1,
            quiz:Questions[this.state.value]
        })
    }

    render() {
        return (
            <div className="main">
                <div className="quiz">
                    <h1>Question</h1>
                    <div className="question">
                        <h4>{this.state.value} of 15</h4>
                        <h3>{this.state.quiz.question}</h3>
                    </div>
                    <div className="options">
                        <button className="btn1">{this.state.quiz.optionA}</button>
                        <button className="btn2">{this.state.quiz.optionB}</button>
                        <br/>
                    </div>
                    <div className="options">
                        <button className="btn3 ">{this.state.quiz.optionC}</button>
                        <button className="btn4">{this.state.quiz.optionD}</button>
                        <br></br>
                    </div>
                    <br/>
                    <div className="buttons">
                        <button className="btn5" onClick={this.handlePrevious}>Previous</button>
                        <button className="btn6" onClick={this.handleNext}>Next</button>
                        <button className="btn7">Quit</button>  
                    </div>
                </div>
            </div>
            
        
            )
    }
}
