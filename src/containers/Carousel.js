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
                <h2>Salada de tomate</h2>
                <p>Com poucos ingredientes se faz uma salada deliciosa e refrescante.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src = {imagem3}  position= "fixed" width="100%" height="100%"/>
              <Carousel.Caption>
                <h2>Hambúrguer de Couve Flor</h2>
                <p>Hambúrgueres de couve flor são sempre uma ótima ideia!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src = {imagem4}  position= "fixed" width="100%" height="100%"/>
              <Carousel.Caption>
                <h2>Mix de batata doce, bróculos, cajus e tofu</h2>
                <p>Um prato recheado de vários sabores, uma verdadeira tentação!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        );
    }
};

export default DemoCarousel