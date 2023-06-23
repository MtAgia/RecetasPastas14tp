import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { obtenerRecetas } from '../../helpers/queries';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardRecetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);
    return (
      <>
      
      {recetas?.map((receta) => (
        <Col md={4} ld={3} className="mb-3" key={receta.id}>
          <Card className="h-100">
          <Card.Img
            variant="top"
            src={receta.imagen}
          />
          <Card.Body >
            <Card.Title>{receta.nombreReceta}</Card.Title>
            <Card.Text >{receta.categoria}</Card.Text>
            <Button as={Link} to={"/detalle/"+receta.id} variant="primary">Ver detalle</Button>
          </Card.Body>
        </Card>
      </Col>   ))}
            </>
    );
};

export default CardRecetas;