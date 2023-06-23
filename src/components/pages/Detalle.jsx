import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnaReceta } from "../helpers/queries";

const Detalle = () => {
  const [receta,setReceta] = useState({})
  const {id} = useParams()
  useEffect(()=>{
    obtenerUnaReceta(id).then(res=>{
      setReceta(res)
    })
  },[])
  return (
    <>
      <Container className="my-3 mainSection">
        <Card>
          <Row>
            <Col xl={8} md={12}>
              <Card.Img
              className="h-100 object-fit-cover"
                variant="top"
                src={receta.imagen}
              />
            </Col>
            <Col xl={4} md={12}>
              <Card.Body>
                <Card.Title className="display-6 text-danger">
                  {receta.nombreReceta}
                </Card.Title>
                <hr />
                <Card.Text>
                  <span className="text-danger fw-semibold ">
                    Ingredientes: 
                  </span> 
                {receta.ingredientes}
                <br/>
                <br/>
                  <span className="text-danger fw-semibold ">
                    Categoria:
                  </span>{" "}
                  {receta.categoria}

                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className="my-2">
          <Card.Header className="display-6 text-danger">Preparacion</Card.Header>
      <Card.Body>{receta.preparacion}</Card.Body>
    </Card>
      </Container>
    </>
  );
};

export default Detalle;
