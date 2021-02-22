import React from 'react';
import './App.css';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent';
import ResultComponent from './component/ResultComponent';

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent/>
      <ResultComponent/>
    </div>
  );
}

export default App;
