import React from 'react'
import Question from './question.jsx'
import AnswerChoice from './answerChoice.jsx'

class Quiz extends React.Component {
  constructor(props) {
  	super(props)
      this.state = {
        questionIndex: 0
      }

    this.shuffleAnswerChoices = this.shuffleAnswerChoices.bind(this);
  }

  shuffleAnswerChoices(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }


  render() {
    var currentQuestion = this.props.questions[this.state.questionIndex];
    
    return (
       <div>
           <h1>THE QUIZ</h1>
           <div>
            <Question content={currentQuestion.question} />
          </div>
       </div>
    )
  }

}


export default Quiz;
