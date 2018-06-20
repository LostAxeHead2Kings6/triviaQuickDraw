import React from 'react';

function AnswerChoice(props) {

  return (
    <li className="answerOption"
        onClick={(e)=>props.submitChoice(`${props.answer}`)}
        id={props.answer}
        value={props.answer}
    >
        {props.answer}
    </li>
  );

}


export default AnswerChoice;
