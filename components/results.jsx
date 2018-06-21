import React from 'react'
import {Button} from 'react-bootstrap';

function Results(props) {
  return (
    <div id="reportCard">
     <h3>Report Card</h3>
     <table>
       <tr>
         <td><strong>Subject</strong></td>
         <td class="cardNotes">{subjects[props.category]}</td>
       </tr>
       <tr>
         <td><strong>Number Correct</strong></td>
         <td class="cardNotes">{props.score} for 5</td>
       </tr>
       <tr>
         <td><strong>Grade</strong></td>
         <td class="cardNotes">{grades[props.score]}</td>
       </tr>
     </table>
     <Button bsStyle="primary" bsSize="large" style={{backgroundColor: 'black', color: '#fff1ad', margin: 'auto'}} onClick={props.playAgain}>Play Again?</Button>
    </div>
  );
}

const subjects = {
  17: 'Science',
  25: 'Art',
  23: 'History',
  10: 'Literature',
  19: 'Math',
  22: 'Geography'
}

const grades = {
  0: 'F',
  1: 'D',
  2: 'C',
  3: 'B',
  4: 'B+',
  5: 'A++'
}

export default Results;
