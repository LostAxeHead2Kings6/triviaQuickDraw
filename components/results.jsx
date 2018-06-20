import React from 'react'

function Results(props) {
  return (
       <div>
           THE Results: {props.score}
           <button onClick={props.playAgain} />
       </div>
   );
}


export default Results;
