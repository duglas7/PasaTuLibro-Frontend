import React from "react";
import "../../styles/agregarLibro.css";
import Navbar from "../components/navbar";
import { useState } from "react";
import Footer from "../components/footer";
import { useContext } from "react";
import { Context } from "../store/appContext"

function ModificarLibro(props) {

  const { store, actions } = useContext(Context)

  return (
    <>
      <Navbar />
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
              alt="hola"
              className="img-fluid mb-3 d-none d-md-block"
            />
            <h1>Editar Publicación</h1>
            <h4 className="font-italic text-muted mb-0">
              Información de tu libro:
            </h4>
          </div>
          <div className="col-md-7 col-lg-6 mt-5 ml-auto">
              <form onSubmit={actions.handleRegistroPublicacion}>
                <div className="row ">
                       <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-book text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="titulo"
                      type="text"
                      name="titulo"
                      placeholder="Título del Libro"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.titulo}
                    />
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="autor"
                      type="text"
                      name="autor"
                      placeholder="Autor"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.autor}
                    />
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-newspaper text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="editorial"
                      type="text"
                      name="editorial"
                      placeholder="Editorial"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.editorial}
                    />
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-school text-muted"></i>
                      </span>
                    </div>
                    <select
                      id="nivel"
                      name="nivel"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.nivel}
                    >
                      <option selected>Selecciona el Nivel</option>
                      <option value="1° Basico">1° Básico</option>
                      <option value="2° Basico">2° Básico</option>
                      <option value="3° Basico">3° Básico</option>
                      <option value="4° Basico">4° Básico</option>
                      <option value="5° Basico">5° Básico</option>
                      <option value="6° Basico">6° Básico</option>
                      <option value="7° Basico">7° Básico</option>
                      <option value="8° Basico">8° Básico</option>
                      <option value="1° Medio">1° Medio</option>
                      <option value="2° Medio">2° Medio</option>
                      <option value="3° Medio">3° Medio</option>
                      <option value="4° Medio">4° Medio</option>
                    </select>
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fab fa-discourse text-muted"></i>
                      </span>
                    </div>
                    <select
                      id="asignatura"
                      name="asignatura"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.asignatura}
                    >
                      <option selected>Asignatura</option>
                      <option value="Lectura Complementaria">Lectura Complementaria</option>
                      <option value="Lenguaje">Lenguaje</option>
                      <option value="Ciencias">Ciencias</option>
                      <option value="Matematicas">Matemáticas</option>
                      <option value="Historia">Historia</option>
                      <option value="Religion">Religión</option>
                      <option value="Ingles">Inglés</option>
                      <option value="Arte y Tecnologia">Arte y Tecnología</option>
                      <option value="Musica">Música</option>
                      <option value="Pack Completo de Asignaturas">Pack Completo de Asignaturas</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fas fa-star-half-alt"></i>
                      </span>
                    </div>
                    <select
                      id="estado"
                      name="estado"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.estado}
                    >
                      <option selected>Estado del Libro</option>
                      <option value="nuevo">Nuevo</option>
                      <option value="usado">Usado</option>
                    </select>
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="far fa-question-circle"></i>
                      </span>
                    </div>
                    <select
                      id="condicion"
                      name="condicion"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.condicion}
                    >
                      <option selected>Condicion del Libro</option>
                      <option value="original">Original</option>
                      <option value="copia">Copia</option>
                    </select>
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="far fa-keyboard"></i>
                      </span>
                    </div>
                    <select
                      id="tipo"
                      name="tipo"
                      className="form-control custom-select bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.tipo}
                    >
                      <option value="tipo de publicacion">
                        Tipo de Publicación
                      </option>
                      <option value="venta">Venta</option>
                      <option value="permuta">Permuta</option>
                      <option value="venta y permuta">Venta y Permuta</option>
                    </select>
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fas fa-hand-holding-usd"></i>
                      </span>
                    </div>
                    <input
                      id="precio"
                      type="text"
                      name="precio"
                      placeholder="Precio"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={actions.handleChange}
                      value={store.precio}
                    />
                  </div>
                  <div className="input-group col-lg-12 mb-4 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="far fa-comments"></i>
                      </span>
                    </div>
                    <textarea
                      id="comentario"
                      name="comentario"
                      className="form-control"
                      aria-label="With textarea"
                      onChange={actions.handleChange}
                      value={store.comentario}
                      placeholder="Escribe un comentario"
                    ></textarea>
                  </div>
                
                  <div className="form-group col-lg-12 mx-auto mb-0">
                  <input onSubmit={actions.handleRegistroPublicacion} type="submit" className="btn btn-primary btn-block font-weight-bold" value="Modificar Libro"/>
                </div>
    
                </div>
              </form>
            </div>
       </div>
       </div>
      <Footer />
    </>
  );
};

export default ModificarLibro;
