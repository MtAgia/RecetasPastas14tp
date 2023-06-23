import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ItemRecetas from "./Recetas/ItemRecetas";
import { Link } from "react-router-dom";
import { obtenerRecetas } from "../helpers/queries";

const Admin = () => {
  const [recetas, setRecetas] = useState([]);
  useEffect(() => {
    obtenerRecetas().then((receta) => {
      if (receta) {
        setRecetas(receta);
      } else {
        console.log("error");
      }
    });
  }, []);
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas De Pastas disponibles</h1>
        <Link className="btn btn-info " to="/administrador/crear-receta">
          <i class="bi bi-plus-circle-fill"> Nueva Pasta</i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Receta</th>
            <th>ingredientes</th>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {recetas?.map((receta) => (
              <ItemRecetas
                key={receta.id}
                receta={receta}
                setRecetas={setRecetas}
              ></ItemRecetas>
            ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Admin;
