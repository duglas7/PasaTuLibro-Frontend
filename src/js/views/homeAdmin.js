import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Table from "../components/Table";

const HomeAdmin = () => {
  return (
    <>
      <Navbar />
      <section className="page-section">
        <div className="container">
          <div className="text-center mt-4">
            <h2 className="section-heading text-uppercase">Usuarios</h2>
            <Table />
            <button type="button" class="btn btn-primary">
              Edit
            </button>
            <button type="button" class="btn btn-danger ml-2">
              Delete
            </button>
          </div>
        </div>
      </section>
      <section className="page-section pt-0 mt-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Publicaciones</h2>
            <Table />
            <button type="button" class="btn btn-primary">
              Edit
            </button>
            <button type="button" class="btn btn-danger ml-2">
              Delete
            </button>
          </div>
        </div>
      </section>
      <section className="page-section pt-0 mt-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">E-mail Masivo</h2>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Correos a enviar"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Escriba su mensaje aqui</span>
                </div>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
                <button type="button" class="btn btn-primary btn-block">
                  Enviar
                </button>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section pt-0 mt-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Configuracion</h2>
            <h3>Estadisticas</h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeAdmin;
