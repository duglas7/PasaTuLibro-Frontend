import React from "react";
import "../../styles/login.css";
import TablaInformacion from "../components/tablaInfo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useContext } from "react";
import { Context } from "../store/appContext";

const EliminarPublicacion = (props) => {

  const { store, actions } = useContext(Context);

  return (
    <>
    <Navbar/>
      <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 contents">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="form-block">
                  <div className="mb-4">
                    <h3>
                      <strong>ELIMINAR PUBLICACION</strong>
                    </h3>
                    <p className="mb-4">
                      Estás a punto de eliminar la siguiente publicación
                    </p>
                    <TablaInformacion></TablaInformacion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EliminarPublicacion;