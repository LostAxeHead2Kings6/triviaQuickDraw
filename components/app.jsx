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
        category: null
      }

  }

  render() {
    return (
    <div>
      <h1>THE NAME OF THE APP</h1>
        <Categories />
        <Quiz />
        <Results />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
