import React from 'react'

function Results(props) {
  return (
       <div>
           THE Results: {props.score}
           <button type="button" onClick={props.playAgain}>Try Again?</button>
       </div>
   );
}


export default Results;
