import React from 'react'

function Question(props) {

  return (
       <div>
           <h1>THE QUESTION</h1>
           <p>{props.content}</p>
       </div>
   );
}


export default Question;
