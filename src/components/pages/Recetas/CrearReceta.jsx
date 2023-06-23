import React from "react";
import { Form, Button } from "react-bootstrap";
import { crearReceta } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (recetaNueva) => {
    console.log(recetaNueva);

    crearReceta(recetaNueva).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Receta creada",
          `La receta ${recetaNueva.nombreReceta} fue creada correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `La receta ${recetaNueva.nombreReceta} no pudo ser creada, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva Receta Pasta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: cappellettini"
            {...register("nombreReceta", {
              required: "El nombre de la receta es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 caracteres",
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
          <Form.Label>Preparacion*</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder=""
            {...register("preparacion", {
              required: "El método de preparación es obligatorio",
              minLength: {
                value: 10,
                message: "La cantidad minima de caracteres es de 10 caracteres",
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
                message: "La cantidad minima de caracteres es de 5 caracteres",
              },
              maxLength: {
                value: 500,
                message:
                  "La cantidad maxima de caracteres es de 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientesReceta?.message}
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

export default CrearReceta;
