import { useEffect } from "react";
import { Form,Button } from "react-bootstrap";
import {useForm} from 'react-hook-form'
import { editaReceta, obtenerUnaReceta } from "../../helpers/queries";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditarReceta = () => {
  const {register,handleSubmit,setValue,formState:{errors}} = useForm()
  const navegacion = useNavigate()
  const {id} = useParams()
  useEffect(()=>{
    obtenerUnaReceta(id).then(res=>{
      setValue("nombreReceta",res.nombreReceta)
      setValue("preparacion",res.preparacion)
      setValue("ingredientes",res.ingredientes)
      setValue("imagen",res.imagen)
      setValue("categoria",res.categoria)
    })
  },[])

  const onSubmit = (recetaEditada) =>{
    editaReceta(recetaEditada,id).then(res=>{
    if(res && res.status === 200){
      Swal.fire(
        "Receta de Pasta editada",
        `La receta ${recetaEditada.nombreReceta} fue editada correctamente`,
        "success"
      );
        navegacion("/administrador")
    }else{
      Swal.fire(
        "Ocurrio un error",
        `La receta De la Pasta ${recetaEditada.nombreReceta} no pudo ser editada, intente en unos minutos`,
        "error"
      );
    }
    })
  }
    return (
      <section className="container mainSection">
        <h1 className="display-4 mt-5">Editar Receta Pasta</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreReceta">
            <Form.Label>Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Capellettini"
              {...register("nombreReceta", {
                required: "El nombre de la receta es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "La cantidad minima de caracteres es de 2 caracteres",
                },
                maxLength: {
                  value: 100,
                  message:
                    "La cantidad maxima de caracteres es de 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPreparacion">
            <Form.Label>Preparacion</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder=""
              {...register("preparacion", {
                required: "El método de preparación es obligatorio",
                minLength: {
                  value: 10,
                  message:
                    "La cantidad minima de caracteres es de 10 caracteres",
                },
                maxLength: {
                  value: 700,
                  message:
                    "La cantidad maxima de caracteres es de 700 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.preparacionReceta?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Ingredientes*</Form.Label>
            <Form.Control
              type="text"
              {...register("ingredientes", {
                required: "Es necesario ingresar los ingredientes",
                minLength: {
                  value: 5,
                  message:
                    "La cantidad minima de caracteres es de 5 caracteres",
                },
                maxLength: {
                  value: 500,
                  message:
                    "La cantidad maxima de caracteres es de 500 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.ingredientes?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              {...register("imagen", {
                required: "La imagen es obligatoria",
                pattern: {
                  value:
                    /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/,
                  message: "Por favor, ingresa una URL de imagen válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "La categoria es obligatoria",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="Cappellettini">Cappellettini</option>
              <option value="bucatini">bucatini</option>
              <option value="Salsas">Salsas</option>
              <option value="linguine">linguine</option>
              <option value="tortellin">tortellin</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
    );
};

export default EditarReceta;