import React from 'react';
import { Carousel,Container,Row } from 'react-bootstrap';
import CardRecetas from './Recetas/CardRecetas';
const Inicio = () => {  
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block carrusel"
            src="https://th.bing.com/th/id/R.0dbc4a30d1d9373a2dd244b2ac2a0b4b?rik=QdSJI9YQQZ3MnA&riu=http%3a%2f%2fholamujer03.akamaized.net%2fwp-content%2fuploads%2f2017%2f02%2fFotolia_109759077_Subscription_Monthly_M.jpg&ehk=Cfq0THBsDQR4XfrKGr2j7%2fB94PiJfegi3pylbyyb%2fXE%3d&risl=&pid=ImgRaw&r=0"
            alt="espaguetti"
          />
          <Carousel.Caption className="text-black bg-light bg-opacity-50">
            <h3>Espaguetti</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carrusel"
            src="https://th.bing.com/th/id/R.c87125516ba2b70cc0136760f08dac3d?rik=ikBBnVLMfTN1yQ&pid=ImgRaw&r=0"
            alt="ñoquis"
          />

          <Carousel.Caption className="text-black bg-light bg-opacity-50">
            <h3>Ñoquis</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carrusel"
            src="https://th.bing.com/th/id/OIP.pr8_SdRtF7INm7cldRRYfAHaHa?pid=ImgDet&w=1000&h=1000&rs=1"
            alt="ravioles"
          />

          <Carousel.Caption className="text-black bg-light bg-opacity-50">
            <h3>ravioles</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <h1 className="display-4">Recetas</h1>
        <hr />
        <Row>
          <CardRecetas></CardRecetas>
        </Row>
      </Container>
    </>
  );
};
export default Inicio;