import React from 'react'
import Art from '../images/art.jpg'
import Geography from '../images/geography2.jpg'
import History from '../images/history2.jpg'
import Literature from '../images/literature.jpg'
import Math from '../images/math2a.jpg'
import Science from '../images/science2.jpg'
import {Carousel} from 'react-bootstrap'

function Categories(props) {

  return (
       <div>
        <h1 style={{textAlign: 'center'}}>What will todays exam be on?</h1>
        <Carousel id="categoryCarousel">
          {categoryArr.map((tuple) => (
            <Carousel.Item>
              <img src={tuple[0]} alt="art" class="categoryPic" onClick={()=> props.handleClick(tuple[1])} />
              <Carousel.Caption>
                <h3 class="categoryCaption">{tuple[2]}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
       </div>
   );
}

const categoryArr = [[Art, 25, "Art"], [History, 23, "History"], [Literature, 10, "Literature"],
                  [Math, 19, "Math"], [Geography, 22, "Geography"], [Science, 17, "Science"]];

export default Categories;
