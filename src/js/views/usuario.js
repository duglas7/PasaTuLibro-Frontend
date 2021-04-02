import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Usuario = ({ match }, props) => {
  const { store, actions } = useContext(Context);

  const id = match.params.id;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mt-5">Contactame</h2>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-8">
            <div className="pubboder">
              <h5 className="m-0 p-0">
                Nombre:
                <p className="text-capitalize m-0 p-0 colorPublicacion font-weight-bold">
                  {store.usuarios[id - 1].nombreCompleto}
                </p>
              </h5>
              <hr className="mt-0" />
              <h5 className="m-0 p-0">
                Correo:
                <p className="text-capitalize m-0 p-0 colorPublicacion font-weight-bold">
                  {store.usuarios[id - 1].correo}
                </p>
              </h5>
              <hr className="mt-0" />
              <h5 className="m-0 p-0">
                Telefono:
                <p className="text-capitalize m-0 p-0 colorPublicacion font-weight-bold">
                  {store.usuarios[id - 1].telefono}
                </p>
              </h5>
              <hr className="mt-0" />
            </div>
          </div>
          <Link to={"/"} className="btn btn-primary btn-block font-weight-bold">
            Inicio
          </Link>
        </div>
      </div>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 ml-5">
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="K6WB9KZB635T8"
              />
              <input
                className="margen-final"
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="Realiza una Donación si quieres ayudar a mantener el sitio web"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_CL/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Usuario;
