import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Categories from './categoryBanner.jsx'
import Quiz from './quiz.jsx'
import Results from './results.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
      this.state = {
        phase: 'quiz'
      }
  }

  render() {
    var phase = this.state.phase;
    console.log(phase);
    return (
    <div>
      <h1>Trivia QuickDraw</h1>
      <div>
        {(function() {
          switch(phase) {
             case null:
                 return <Categories />;
             case 'quiz':
                 return <Quiz />;
             case 'results':
                  return <Results />;
          }
        })()}
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
