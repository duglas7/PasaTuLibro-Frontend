import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/agregarLibro.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AgregarLibro = (props) => {
  const { store, actions } = useContext(Context);
  const { history } = props;

  const [feedbackTitulo, setFeedbackTitulo] = useState("");
  const [validarTitulo, setValidarTitulo] = useState("");
  const [mensajeTitulo, setMensajeTitulo] = useState("");

  const [feedbackAutor, setFeedbackAutor] = useState("");
  const [validarAutor, setValidarAutor] = useState("");
  const [mensajeAutor, setMensajeAutor] = useState("");

  const [feedbackEditorial, setFeedbackEditorial] = useState("");
  const [validarEditorial, setValidarEditorial] = useState("");
  const [mensajeEditorial, setMensajeEditorial] = useState("");

  const [feedbackNivel, setFeedbackNivel] = useState("");
  const [validarNivel, setValidarNivel] = useState("");
  const [mensajeNivel, setMensajeNivel] = useState("");

  const [feedbackAsignatura, setFeedbackAsignatura] = useState("");
  const [validarAsignatura, setValidarAsignatura] = useState("");
  const [mensajeAsignatura, setMensajeAsignatura] = useState("");

  const [feedbackEstadoLibro, setFeedbackEstadoLibro] = useState("");
  const [validarEstadoLibro, setValidarEstadoLibro] = useState("");
  const [mensajeEstadoLibro, setMensajeEstadoLibro] = useState("");

  const [feedbackCondicionLibro, setFeedbackCondicionLibro] = useState("");
  const [validarCondicionLibro, setValidarCondicionLibro] = useState("");
  const [mensajeCondicionLibro, setMensajeCondicionLibro] = useState("");

  const [feedbackTipoIntercambio, setFeedbackTipoIntercambio] = useState("");
  const [validarTipoIntercambio, setValidarTipoIntercambio] = useState("");
  const [mensajeTipoIntercambio, setMensajeTipoIntercambio] = useState("");

  const [feedbackPrecio, setFeedbackPrecio] = useState("");
  const [validarPrecio, setValidarPrecio] = useState("");
  const [mensajePrecio, setMensajePrecio] = useState("");

  const [feedbackComentarios, setFeedbackComentarios] = useState("");
  const [validarComentarios, setValidarComentarios] = useState("");
  const [mensajeComentarios, setMensajeComentarios] = useState("");

  function es_titulo() {
    if (store.titulo) {
      if (store.titulo.length > 0) {
        setValidarTitulo("is-valid");
        setMensajeTitulo(" ");
        setFeedbackTitulo("valid-feedback");
      } else {
        setValidarTitulo("is-invalid");
        setMensajeTitulo("Ingresa el Título del Libro");
        setFeedbackTitulo("invalid-feedback");
      }
    }
  }

  function es_autor() {
    const regexAutor = /^[a-zA-ZÀ-ÿ\s]{6,40}$/;
    if (store.nombreAutor) {
      if (regexAutor.test(store.nombreAutor)) {
        setValidarAutor("is-valid");
        setMensajeAutor(" ");
        setFeedbackAutor("valid-feedback");
      } else {
        setValidarAutor("is-invalid");
        setMensajeAutor(
          "El Autor debe tener al menos 6 caracteres y no acepta numeros"
        );
        setFeedbackAutor("invalid-feedback");
      }
    }
  }

  function es_editorial() {
    if (store.editorial) {
      if (store.editorial.length < 1) {
        setValidarEditorial("is-invalid");
        setMensajeEditorial("Ingresa la editorial");
        setFeedbackEditorial("invalid-feedback");
      } else {
        setValidarEditorial("is-valid");
        setMensajeEditorial(" ");
        setFeedbackEditorial("valid-feedback");
      }
    }
  }

  function es_nivel() {
    if (store.nivel) {
      if (store.nivel.length > 11) {
        setValidarNivel("is-invalid");
        setMensajeNivel("Ingresa el nivel");
        setFeedbackNivel("invalid-feedback");
      } else {
        setValidarNivel("is-valid");
        setMensajeNivel(" ");
        setFeedbackNivel("valid-feedback");
      }
    }
  }

  function es_asignatura() {
    if (store.asignatura) {
      if (store.asignatura.length > 1) {
        setValidarAsignatura("is-valid");
        setMensajeAsignatura(" ");
        setFeedbackAsignatura("valid-feedback");
      } else {
        setValidarAsignatura("is-invalid");
        setMensajeAsignatura("Ingresa la asignatura");
        setFeedbackAsignatura("invalid-feedback");
      }
    }
  }

  function es_estadoLibro() {
    if (store.estadoNuevoUsado) {
      if (store.estadoNuevoUsado.length > 1) {
        setValidarEstadoLibro("is-valid");
        setMensajeEstadoLibro(" ");
        setFeedbackEstadoLibro("valid-feedback");
      } else {
        setValidarEstadoLibro("is-invalid");
        setMensajeEstadoLibro("Ingresa el estado del libro");
        setFeedbackEstadoLibro("invalid-feedback");
      }
    }
  }

  function es_condicionLibro() {
    if (store.condicionOriginalCopia) {
      if (store.condicionOriginalCopia.length > 1) {
        setValidarCondicionLibro("is-valid");
        setMensajeCondicionLibro(" ");
        setFeedbackCondicionLibro("valid-feedback");
      } else {
        setValidarCondicionLibro("is-invalid");
        setMensajeCondicionLibro("Ingresa la condición del libro");
        setFeedbackCondicionLibro("invalid-feedback");
      }
    }
  }

  function es_tipoIntercambio() {
    if (store.tipoIntercambio) {
      if (store.tipoIntercambio.length > 1) {
        setValidarTipoIntercambio("is-valid");
        setMensajeTipoIntercambio(" ");
        setFeedbackTipoIntercambio("valid-feedback");
      } else {
        setValidarTipoIntercambio("is-invalid");
        setMensajeTipoIntercambio("Ingresa el tipo de intercambio");
        setFeedbackTipoIntercambio("invalid-feedback");
      }
    }
  }

  function es_precio() {
    if (store.precio) {
      if (store.precio.length > 0) {
        setValidarPrecio("is-valid");
        setMensajePrecio(" ");
        setFeedbackPrecio("valid-feedback");
      } else {
        setValidarPrecio("is-invalid");
        setMensajePrecio("Ingresa un Valor $");
        setFeedbackPrecio("invalid-feedback");
      }
    }
  }

  function es_comentarios() {
    if (store.comentarios) {
      if (store.comentarios.length > 1) {
        setValidarComentarios("is-valid");
        setMensajeComentarios(" ");
        setFeedbackComentarios("valid-feedback");
      } else {
        setValidarComentarios("is-invalid");
        setMensajeComentarios("Ingresa algún comentario");
        setFeedbackComentarios("invalid-feedback");
      }
    }
  }

  useEffect(() => {
    if (!store.isAuth) history.push("/");
  }, []);

  return (
    <>
      <Navbar />
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-md-5 mb-3 mb-md-0 mt-sm-3">
            <img
              src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
              alt="hola"
              className="img-fluid mb-1 mt-5"
            />
            <h1>Agregar un libro</h1>
            <h4 className="font-italic text-muted mb-0">
              Información de tu libro:
            </h4>
          </div>
          <div className="col-md-7 col-lg-6 mt-5 ml-auto">
            <form
              onSubmit={(e) =>
                actions.handleRegistroPublicacion(
                  e,
                  props.history,
                  actions.getPublicaciones()
                )
              }
            >
              <div className="row ">
                <div className="input-group col-lg-12 mb-3">
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
                    className={
                      "form-control bg-white border-left-0 border-md " +
                      validarTitulo
                    }
                    onChange={actions.handleChange}
                    value={store.titulo}
                    onBlur={(e) => es_titulo()}
                    required
                  />
                  <div className={feedbackTitulo + " font-weight-bold"}>
                    {mensajeTitulo}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="nombreAutor"
                    type="text"
                    name="nombreAutor"
                    placeholder="Autor"
                    className={
                      "form-control bg-white border-left-0 border-md " +
                      validarAutor
                    }
                    onChange={actions.handleChange}
                    value={store.nombreAutor}
                    onBlur={(e) => es_autor()}
                    required
                  />
                  <div className={feedbackAutor + " font-weight-bold"}>
                    {mensajeAutor}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-3 ">
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
                    className={
                      "form-control bg-white border-left-0 border-md " +
                      validarEditorial
                    }
                    onChange={actions.handleChange}
                    value={store.editorial}
                    onBlur={(e) => es_editorial()}
                    required
                  />
                  <div className={feedbackEditorial + " font-weight-bold"}>
                    {mensajeEditorial}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-school text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="nivel"
                    name="nivel"
                    className={
                      "form-control custom-select bg-white border-left-0 border-md " +
                      validarNivel
                    }
                    onChange={actions.handleChange}
                    value={store.nivel}
                    onBlur={(e) => es_nivel()}
                    required
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
                  <div className={feedbackNivel + " font-weight-bold"}>
                    {mensajeNivel}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fab fa-discourse text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="asignatura"
                    name="asignatura"
                    className={
                      "form-control custom-select bg-white border-left-0 border-md " +
                      validarAsignatura
                    }
                    onChange={actions.handleChange}
                    value={store.asignatura}
                    onBlur={(e) => es_asignatura()}
                    required
                  >
                    <option selected>Asignatura</option>
                    <option value="Lectura Complementaria">
                      Lectura Complementaria
                    </option>
                    <option value="Lenguaje">Lenguaje</option>
                    <option value="Ciencias">Ciencias</option>
                    <option value="Matematicas">Matemáticas</option>
                    <option value="Historia">Historia</option>
                    <option value="Religion">Religión</option>
                    <option value="Ingles">Inglés</option>
                    <option value="Arte y Tecnologia">Arte y Tecnología</option>
                    <option value="Musica">Música</option>
                    <option value="Pack Completo de Asignaturas">
                      Pack Completo de Asignaturas
                    </option>
                    <option value="Otra">Otra</option>
                  </select>
                  <div className={feedbackAsignatura + " font-weight-bold"}>
                    {mensajeAsignatura}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fas fa-star-half-alt"></i>
                    </span>
                  </div>
                  <select
                    id="estadoNuevoUsado"
                    name="estadoNuevoUsado"
                    className={
                      "form-control custom-select bg-white border-left-0 border-md " +
                      validarEstadoLibro
                    }
                    onChange={actions.handleChange}
                    value={store.estadoNuevoUsado}
                    onBlur={(e) => es_estadoLibro()}
                    required
                  >
                    <option selected>Estado del Libro</option>
                    <option value="nuevo">Nuevo</option>
                    <option value="usado">Usado</option>
                  </select>
                  <div className={feedbackEstadoLibro + " font-weight-bold"}>
                    {mensajeEstadoLibro}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="far fa-question-circle"></i>
                    </span>
                  </div>
                  <select
                    id="condicionOriginalCopia"
                    name="condicionOriginalCopia"
                    className={
                      "form-control custom-select bg-white border-left-0 border-md " +
                      validarCondicionLibro
                    }
                    onChange={actions.handleChange}
                    value={store.condicionOriginalCopia}
                    onBlur={(e) => es_condicionLibro()}
                    required
                  >
                    <option selected>Condición del Libro</option>
                    <option value="original">Original</option>
                    <option value="copia">Copia</option>
                  </select>
                  <div className={feedbackCondicionLibro + " font-weight-bold"}>
                    {mensajeCondicionLibro}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="far fa-keyboard"></i>
                    </span>
                  </div>
                  <select
                    id="tipoIntercambio"
                    name="tipoIntercambio"
                    className={
                      "form-control custom-select bg-white border-left-0 border-md " +
                      validarTipoIntercambio
                    }
                    onChange={actions.handleChange}
                    value={store.tipoIntercambio}
                    onBlur={(e) => es_tipoIntercambio()}
                    required
                  >
                    <option value="tipo de publicacion">
                      Tipo de Publicación
                    </option>
                    <option value="venta">Venta</option>
                    <option value="permuta">Permuta</option>
                    <option value="venta y permuta">Venta y Permuta</option>
                  </select>
                  <div
                    className={feedbackTipoIntercambio + " font-weight-bold"}
                  >
                    {mensajeTipoIntercambio}
                  </div>
                </div>
                {store.tipoIntercambio != "permuta" ? (
                  <div className="input-group col-lg-12 mb-3 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="fas fa-hand-holding-usd"></i>
                      </span>
                    </div>
                    <input
                      id="precio"
                      type="number"
                      name="precio"
                      placeholder="Precio: $10.000"
                      className={
                        "form-control bg-white border-left-0 border-md " +
                        validarPrecio
                      }
                      onChange={actions.handleChange}
                      value={store.precio}
                      onBlur={(e) => es_precio()}
                      required
                    />
                    <div className={feedbackPrecio + " font-weight-bold"}>
                      {mensajePrecio}
                    </div>
                  </div>
                ) : (
                  <div className="d-none input-group col-lg-12 mb-3 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="fas fa-hand-holding-usd"></i>
                      </span>
                    </div>
                    <input
                      id="precio"
                      type="number"
                      name="precio"
                      placeholder="Precio: $10.000"
                      className={
                        "form-control bg-white border-left-0 border-md " +
                        validarPrecio
                      }
                      onChange={actions.handleChange}
                      value={(store.precio = "0")}
                    />
                    <div className={feedbackPrecio + " font-weight-bold"}>
                      {mensajePrecio}
                    </div>
                  </div>
                )}
                <div className="input-group col-lg-12 mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="far fa-comments"></i>
                    </span>
                  </div>
                  <textarea
                    id="comentarios"
                    name="comentarios"
                    className={"form-control " + validarComentarios}
                    aria-label="With textarea"
                    onChange={actions.handleChange}
                    value={store.comentarios}
                    placeholder="Escribe un comentario"
                    onBlur={(e) => es_comentarios()}
                    required
                  ></textarea>
                  <div className={feedbackComentarios + " font-weight-bold"}>
                    {mensajeComentarios}
                  </div>
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <input
                    onSubmit={(e) =>
                      actions.handleRegistroPublicacion(
                        e,
                        props.history,
                        actions.getPublicaciones()
                      )
                    }
                    type="submit"
                    className="btn btn-primary btn-block font-weight-bold"
                    value="Publicar Libro"
                  />
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

export default AgregarLibro;
