import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { eliminarReceta, obtenerRecetas } from "../../helpers/queries";
import Swal from "sweetalert2";
const ItemRecetas = ({receta,setRecetas}) => {

  const borrarReceta = () =>{
    eliminarReceta(receta.id).then(res=>{
      if(res && res.status === 200){
        Swal.fire(
          "Receta eliminada",
          `La receta de la pasta ${receta.nombreReceta} fue eliminada correctamente`,
          "success"
        );
        obtenerRecetas().then(res=>{
          if(res){
            setRecetas(res)
          }
        })
      }else{
        Swal.fire(
          "Ocurrio un error",
          `La receta de la pasta ${receta.nombreReceta} no pudo ser eliminada, intente en unos minutos`,
          "error"
        );
      }
    })
  }
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.ingredientes}</td>
      <td className="truncar">
      {receta.imagen}
      </td>
      <td>{receta.categoria}</td>
      <td >
        <div className="d-flex">
        <Link to={"/administrador/editar-receta/"+receta.id} className="btn btn-success mx-1">
          <i className="bi bi-pencil-fill"></i>
        </Link>
        <Button className="mx-1" variant="danger" onClick={borrarReceta}>
          <i class="bi bi-x-circle"></i>
        </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemRecetas;
