import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { guardarUsuario } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    guardarUsuario(usuario).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Usuario registrado",
          "El usuario ha sido registrado correctamente",
          "success"
        );
        navegacion('/login');
        // Aquí puedes realizar las acciones adicionales después de registrar al usuario
      } else {
        Swal.fire(
          "Ocurrió un error",
          "No se pudo registrar el usuario, por favor inténtelo nuevamente",
          "error"
        );
      }
    });
  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("username", {
                  required: "El nombre de usuario es obligatorio",
                })}
              />
              {errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "El email debe tener un formato válido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "El password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "El password debe tener al menos 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;