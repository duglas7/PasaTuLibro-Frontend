import React from "react";
import libreria from "../../img/Publicidad/1.png";
import ropa from "../../img/Publicidad/2.png";
import transporte from "../../img/Publicidad/3.png";
import mentorias from "../../img/Publicidad/4.png";
import juegos from "../../img/Publicidad/5.png";
import futbol from "../../img/Publicidad/6.png";

const Publicidad = () => {
  return (
    <>
      <section className="page-section bg-light pt-0">
        <div class="container p-0">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Ayuda a una Pyme</h2>
            <h3 className="section-subheading text-muted m-0 p-0">
              Publica con nosotros para que llegues a mas personas
            </h3>
          </div>
          <div class="row no-gutters">
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={libreria} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={ropa} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={transporte} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={mentorias} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={juegos} alt="" />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={futbol} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publicidad;
