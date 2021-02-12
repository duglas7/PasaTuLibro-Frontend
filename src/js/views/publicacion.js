import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

function publicacion() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="margentop">Nombre de la publicacion</h2>
        <hr />
        <div className="row align-items-center">
          {/* <!-- For Demo Purpose --> */}
          <div className="col-md-4 pr-lg-4 mb-5 mb-md-0">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://image.freepik.com/free-photo/front-view-composition-with-different-books_23-2148851051.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://image.freepik.com/free-photo/creative-assortment-with-different-books_23-2148851023.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/*    <!-- Registeration Form --> */}
          <div className="col-md-8 col-lg-8 mt-5 ml-auto">
            <div className="pubboder">
              <h2>
                Titulo: <p>Tic en la Educación</p>
              </h2>
              <h2>
                Autor: <p>Chirinos armas</p>
              </h2>
              <h2>
                Editorial: <p>Marcombo</p>
              </h2>
              <h2>
                Categoria: <p>Informatica</p>
              </h2>
              <h2>
                Nivel: <p>2do basico</p>
              </h2>
              <h2>
                Colegio: <p>Arturo Prat</p>
              </h2>
              <h2>
                Estado: <p>Nuevo</p>
              </h2>
              <h2>
                Precio / Permuta:<p>25.000$</p>
              </h2>
              <h2>
                Comentarios:
                <p>
                  Esto es una prueba para ver como se ve el comentario del libro
                  no hacer caso literal a lo que dice el mismo
                </p>
              </h2>
              <div className="form-group col-lg-12 mb-0">
                <a href="#" className="btn btn-primary btn-block py-2">
                  <span className="font-weight-bold">Comprar / Permuta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label>Preguntas:</label>
          <p>Hola muy buenas tardes aun tiene el libro disponible?</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Realice su pregunta"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Preguntar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default publicacion;
