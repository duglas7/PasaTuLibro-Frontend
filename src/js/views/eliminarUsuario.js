import React from "react";
import "../../styles/login.css";
import TablaUsuario from "../components/tablaUsuario";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useContext } from "react";
import { Context } from "../store/appContext";

const EliminarUsuario = (props) => {

  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="form-block">
                    <div className="mb-4">
                      <h3>
                        <strong>ELIMINAR USUARIO</strong>
                      </h3>
                      <p className="mb-4">
                        Estás a punto de eliminar el siguiente usuario:
                      </p>
                      <TablaUsuario />
                    </div>
                    <p className="mb-4">Confirmar eliminación:</p>
                    <form action="#" method="post" onChange={() => {}}>
                      <div className="form-group last mb-4">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Eliminar Definitivamente"
                        href="#homePrivate"
                        className="btn btn-pill text-white btn-block btn-primary"
                      />
                    </form>
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

export default EliminarUsuario;
