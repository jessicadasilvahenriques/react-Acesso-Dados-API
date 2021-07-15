import React, { Component } from 'react';
import './Carousel.css'

import imagem1 from "../assets/1.jpg"
import imagem2 from "../assets/2.jpg"
import imagem3 from "../assets/3.jpg"
import imagem4 from "../assets/4.jpg"

import Carousel from 'react-bootstrap/Carousel'

class DemoCarousel  extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img src = {imagem1}  position= "fixed" width="100%" height="100%"/>
              <Carousel.Caption>
                <h2>Hambúrguer de beterraba</h2>
                <p>Uma opção vegan saborosa para todos, até para quem diz não gostar deste legume cor-de-rosa.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src = {imagem2} position= "fixed" width="100%" height="100%"/>
              <Carousel.Caption>
                <h2>Pizza de cebola, tomate e rúcula</h2>
                <p>Com poucos ingredientes se faz uma pizza deliciosa e refrescante.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src = {imagem3}  position= "fixed" width="100%" height="100%"/>
              <Carousel.Caption>
                <h2>Taco de pimento e milho</h2>
                <p>Um taco recheado de vários sabores, uma verdadeira tentação!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src = {imagem4}  position= "fixed" width="100%" height="100%"/>
              <Carousel.Caption>
                <h2>Bolo de chocolate</h2>
                <p>Com cacau e bebida vegetal se pode fazer uma bela sobremesa!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        );
    }
};

export default DemoCarousel