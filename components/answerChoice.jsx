import React from 'react';

function AnswerChoice(props) {

  return (
    <li className="answerOption"
        onClick={(e)=>props.submitChoice(`${props.answer}`)}
        type="A"
    >
        {props.answer}
    </li>
  );

}


export default AnswerChoice;
