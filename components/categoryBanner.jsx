import React from 'react'
import art from '../images/art.jpg'
import geography from '../images/geography.jpg'
import history from '../images/history.jpg'
import literature from '../images/literature.jpg'
import math from '../images/math.jpg'
import science from '../images/science2.jpg'

function Categories(props) {
  return (
       <div>
           THE CATEGORIES!!!!!!!!!!!!!
           <img src={science} alt="science" onClick={()=> props.handleClick(17)} />
           <img src={art} alt="art" onClick={()=> props.handleClick(25)} />
           <img src={history} alt="history" onClick={()=> props.handleClick(23)} />
           <img src={literature} alt="literature" onClick={()=> props.handleClick(10)} />
           <img src={math} alt="math" onClick={()=> props.handleClick(19)} />
           <img src={geography} alt="geography" onClick={()=> props.handleClick(22)} />
       </div>
   );
}


export default Categories;
