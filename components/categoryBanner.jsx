import React from 'react'
import art from '../images/art.jpg'
import geography from '../images/geography2.jpg'
import history from '../images/history2.jpg'
import literature from '../images/literature.jpg'
import math from '../images/math2a.jpg'
import science from '../images/science2.jpg'
import {Carousel} from 'react-bootstrap';

function Categories(props) {
  return (
       <div>
        <h1>What will todays exam be on </h1>
        <Carousel id="categoryCarousel">
          <Carousel.Item>
            <img src={science} height={500} class="categoryPic" alt="science" onClick={()=> props.handleClick(17)} />
            <Carousel.Caption>
              <h3 class="categoryCaption">Science</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={art} height={500} alt="art" class="categoryPic"onClick={()=> props.handleClick(25)} />
            <Carousel.Caption>
              <h3 class="categoryCaption">Art</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={history} height={500} alt="history" class="categoryPic" onClick={()=> props.handleClick(23)} />
            <Carousel.Caption>
              <h3 class="categoryCaption">History</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={literature} height={500}  alt="literature" class="categoryPic" onClick={()=> props.handleClick(10)} />
            <Carousel.Caption>
              <h3 class="categoryCaption">Literature</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={math} height={500} alt="math" class="categoryPic" onClick={()=> props.handleClick(19)} />
            <Carousel.Caption>
              <h3 class="categoryCaption">Math</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={geography} height={500} alt="geography" class="categoryPic" onClick={()=> props.handleClick(22)} />
            <Carousel.Caption>
              <h3 class="categoryCaption">Geography</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       </div>
   );
}


export default Categories;
