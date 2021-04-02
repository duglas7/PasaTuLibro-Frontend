import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../../styles/login.css";

const PasswordRecover = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
              alt="hola"
              className="img-fluid mb-3 d-none d-md-block"
            />
            <h1>Recupera tu contraseña</h1>
            <p className="font-italic text-muted mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              non.
            </p>
          </div>
          <div className="col-md-7 col-lg-6 ml-auto">
            <form action="#">
              <div className="row">
                <h4 className="mb-4">
                  Por favor ingrese su correo electrónico
                </h4>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Correo Electronico"
                />
              </div>
              <input
                type="submit"
                value="Recuperar Contraseña"
                className="btn btn-pill text-white btn-block btn-primary mt-3"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PasswordRecover;
