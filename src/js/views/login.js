import React, { useEffect } from "react";
import Footer from "../components/footer";
import "../../styles/login.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { store, actions } = useContext(Context);
  const { history } = props;

  useEffect(() => {
    if (store.isAuth) history.push("/");
  }, []);

  return (
    <>
      <Navbar />
      <div className="content box-sizing mt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="form-block">
                    <div className="mb-4">
                      <h3 className="text-center">
                        <strong>Ingresar</strong>
                      </h3>
                      <p className="mb-4 mt-3">
                        Complete todos los datos para ingresar a la plataforma
                      </p>
                    </div>
                    <form
                      onSubmit={(e) => actions.handleLogin(e, props.history)}
                    >
                      <div className="form-group last mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Correo Electroníco"
                          id="correo"
                          name="correo"
                          onChange={actions.handleChange}
                          required
                        />
                      </div>
                      <div className="form-group last mb-4">
                        <input
                          type="password"
                          className="form-control"
                          name="contrasenia"
                          placeholder="Contraseña"
                          id="contrasenia"
                          onChange={actions.handleChange}
                          required
                        />
                      </div>
                      <input
                        type="submit"
                        value="Ingresar"
                        className="btn btn-pill text-white btn-block btn-primary font-weight-bold"
                      />
                    </form>
                    <div>
                      <p className="mt-2">
                        <Link to="/">Regresa al Inicio</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
