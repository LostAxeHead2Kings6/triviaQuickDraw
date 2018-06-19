import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
//import Banner from 'categoryBanner.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  }

  render() {
    return (
      <h1>Le Voici</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
