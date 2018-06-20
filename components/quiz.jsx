import React from 'react'
import Question from './question.jsx'
import AnswerChoice from './answerChoice.jsx'

class Quiz extends React.Component {
  constructor(props) {
  	super(props)
      this.state = {
        questionIndex: 0,
        currentQuestion: '',
        answer: '',
        answerChoices: [],
        score: 0
      }
    this.handleUserAnswer = this.handleUserAnswer.bind(this);
  }

  componentWillMount() {
    const combinedAnswers = [].concat(this.props.questions[0].incorrect_answers, [this.props.questions[0].correct_answer]);

    this.setState({
      currentQuestion: this.props.questions[0].question,
      answer: this.props.questions[0].correct_answer,
      answerChoices: this.shuffleAnswerChoices(combinedAnswers)
    })

  }

  shuffleAnswerChoices(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleUserAnswer(answer) {
    this.checkAccuracy(answer);
    if (this.state.questionIndex === 4 ) this.props.onCompletion(this.state.score);
    else this.nextQuestion();
  }

  checkAccuracy(answer) {
    console.log(answer, this.state.answer);
    if (answer === this.state.answer) this.setState({score: this.state.score+1});
    console.log(this.state.score);
  }

  nextQuestion() {
    const questionIndex = this.state.questionIndex + 1;
    const combinedAnswers = [].concat(this.props.questions[questionIndex].incorrect_answers, [this.props.questions[questionIndex].correct_answer]);

    this.setState({
        questionIndex: questionIndex,
        currentQuestion: this.props.questions[questionIndex].question,
        answer: this.props.questions[questionIndex].correct_answer,
        answerChoices: this.shuffleAnswerChoices(combinedAnswers)
    });

    console.log("state:", this.state);
  }

  renderAnswerOptions(answer, func) {
    return (
      <AnswerChoice answer={answer} submitChoice={func} />
    );
  }

  render() {

    return (
       <div>
           <h1>THE QUIZ</h1>
           <div>
            <Question content={this.state.currentQuestion} />
              <ul className="answerOptions">
                {this.state.answerChoices.map((ans)=>this.renderAnswerOptions(ans, this.handleUserAnswer))}
              </ul>
          </div>
       </div>
    )
  }

}


export default Quiz;
