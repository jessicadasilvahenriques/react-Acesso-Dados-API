import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import imagem1 from "../assets/1.jpg"
import imagem2 from "../assets/2.jpg"
import imagem3 from "../assets/3.jpg"

import Carousel from 'react-bootstrap/Carousel'

class DemoCarousel  extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img src = {imagem1}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src = {imagem2}/>
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src = {imagem3}/>
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        );
    }
};

export default DemoCarousel