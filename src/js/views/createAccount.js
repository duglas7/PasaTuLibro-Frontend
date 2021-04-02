import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CreateAccount = (props) => {
  const { store, actions } = useContext(Context);
  const { history } = props;

  const [feedbackNombreCompleto, setFeedbackNombreCompleto] = useState("");
  const [validarNombreCompleto, setValidarNombreCompleto] = useState("");
  const [mensajeNombreCompleto, setMensajeNombreCompleto] = useState("");

  const [feedbackCorreo, setFeedbackCorreo] = useState("");
  const [validarCorreo, setValidarCorreo] = useState("");
  const [mensajeCorreo, setMensajeCorreo] = useState("");

  const [feedbackTelefono, setFeedbackTelefono] = useState("");
  const [validarTelefono, setValidarTelefono] = useState("");
  const [mensajeTelefono, setMensajeTelefono] = useState("");

  const [feedbackContrasenia, setFeedbackContrasenia] = useState("");
  const [validarContrasenia, setValidarContrasenia] = useState("");
  const [mensajeContrasenia, setMensajeContrasenia] = useState("");

  const [feedbackConfirmContrasenia, setFeedbackConfirmContrasenia] = useState(
    ""
  );
  const [validarConfirmContrasenia, setValidarConfirmContrasenia] = useState(
    ""
  );
  const [mensajeConfirmContrasenia, setMensajeConfirmContrasenia] = useState(
    ""
  );

  const [feedbackComuna, setFeedbackComuna] = useState("");
  const [validarComuna, setValidarComuna] = useState("");
  const [mensajeComuna, setMensajeComuna] = useState("");

  const [feedbackDireccion, setFeedbackDireccion] = useState("");
  const [validarDireccion, setValidarDireccion] = useState("");
  const [mensajeDireccion, setMensajeDireccion] = useState("");

  const [feedbackNumero, setFeedbackNumero] = useState("");
  const [validarNumero, setValidarNumero] = useState("");
  const [mensajeNumero, setMensajeNumero] = useState("");

  const [feedbackTipoVivienda, setFeedbackTipoVivienda] = useState("");
  const [validarTipoVivienda, setValidarTipoVivienda] = useState("");
  const [mensajeTipoVivienda, setMensajeTipoVivienda] = useState("");

  const [feedbackNumDepto, setFeedbackNumDepto] = useState("");
  const [validarNumDepto, setValidarNumDepto] = useState("");
  const [mensajeNumDepto, setMensajeNumDepto] = useState("");

  function es_nombre() {
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{6,40}$/;
    if (store.nombreCompleto) {
      if (regexNombre.test(store.nombreCompleto)) {
        setValidarNombreCompleto("is-valid");
        setMensajeNombreCompleto(" ");
        setFeedbackNombreCompleto("valid-feedback");
      } else {
        setValidarNombreCompleto("is-invalid");
        setMensajeNombreCompleto(
          "El Nombre debe tener al menos 6 caracteres y no acepta numeros"
        );
        setFeedbackNombreCompleto("invalid-feedback");
      }
    }
  }

  function es_correo() {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (store.correo) {
      if (!regexEmail.test(store.correo)) {
        setValidarCorreo("is-invalid");
        setMensajeCorreo(
          "El email no es válido recuerda usar el siguiente formato example@example.com"
        );
        setFeedbackCorreo("invalid-feedback");
      } else {
        setValidarCorreo("is-valid");
        setMensajeCorreo(" ");
        setFeedbackCorreo("valid-feedback");
      }
    }
  }

  function es_telefono() {
    if (store.telefono) {
      if (store.telefono.length < 8) {
        setValidarTelefono("is-invalid");
        setMensajeTelefono("ingresa al menos 8 numeros");
        setFeedbackTelefono("invalid-feedback");
      } else {
        setValidarTelefono("is-valid");
        setMensajeTelefono(" ");
        setFeedbackTelefono("valid-feedback");
      }
    }
  }

  function es_contrasenia() {
    if (store.contrasenia) {
      if (store.contrasenia.length < 6) {
        setValidarContrasenia("is-invalid");
        setMensajeContrasenia("ingresa al menos 6 caracteres");
        setFeedbackContrasenia("invalid-feedback");
      } else {
        setValidarContrasenia("is-valid");
        setMensajeContrasenia(" ");
        setFeedbackContrasenia("valid-feedback");
      }
    }
  }

  function es_confirmContrasenia() {
    if (store.confirmContrasenia === store.contrasenia) {
      setValidarConfirmContrasenia("is-valid");
      setMensajeConfirmContrasenia(" ");
      setFeedbackConfirmContrasenia("valid-feedback");
    } else {
      setValidarConfirmContrasenia("is-invalid");
      setMensajeConfirmContrasenia("Las contraseñas no coinciden");
      setFeedbackConfirmContrasenia("invalid-feedback");
    }
  }

  function es_comuna() {
    if (store.comuna) {
      if (store.comuna.length < 40) {
        setValidarComuna("is-valid");
        setMensajeComuna(" ");
        setFeedbackComuna("valid-feedback");
      } else {
        setValidarComuna("is-invalid");
        setMensajeComuna("Selecciona tu comuna de residencia");
        setFeedbackComuna("invalid-feedback");
      }
    }
  }

  function es_direccion() {
    if (store.direccion) {
      if (store.direccion.length > 3) {
        setValidarDireccion("is-valid");
        setMensajeDireccion(" ");
        setFeedbackDireccion("valid-feedback");
      } else {
        setValidarDireccion("is-invalid");
        setMensajeDireccion("Ingresa tu Direccion Correctamente");
        setFeedbackDireccion("invalid-feedback");
      }
    }
  }

  function es_numero() {
    if (store.numero) {
      if (store.numero.length < 7) {
        setValidarNumero("is-valid");
        setMensajeNumero(" ");
        setFeedbackNumero("valid-feedback");
      } else {
        setValidarNumero("is-invalid");
        setMensajeNumero("Ingresa el Numero de Calle / Avenida Correcto");
        setFeedbackNumero("invalid-feedback");
      }
    }
  }

  function es_tipoVivienda() {
    if (store.tipoVivienda) {
      if (store.tipoVivienda.length < 16) {
        setValidarTipoVivienda("is-valid");
        setMensajeTipoVivienda(" ");
        setFeedbackTipoVivienda("valid-feedback");
      } else {
        setValidarTipoVivienda("is-invalid");
        setMensajeTipoVivienda("Seleccione su tipo de Vivienda");
        setFeedbackTipoVivienda("invalid-feedback");
      }
    }
  }

  function es_numDepto() {
    if (store.numDepto) {
      if (store.numDepto.length > 0 && store.numDepto.length < 7) {
        setValidarNumDepto("is-valid");
        setMensajeNumDepto(" ");
        setFeedbackNumDepto("valid-feedback");
      } else {
        setValidarNumDepto("is-invalid");
        setMensajeNumDepto("Seleccione su número de Casa / Depto");
        setFeedbackNumDepto("invalid-feedback");
      }
    }
  }

  useEffect(() => {
    if (store.isAuth) history.push("/");
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
              className="img-fluid mb-1"
            />
            <h1>Crea tu cuenta</h1>
            <p className="font-italic text-muted mb-0">
              Crea tu cuenta para que asi puedas vender o permutar esos libros
              que no necesitas y deseas cambiar
            </p>
          </div>
          <div className="col-md-7 col-lg-6 mt-5 ml-auto">
            <form
              onSubmit={(e) =>
                actions.handleRegistroUsuario(
                  e,
                  props.history,
                  actions.getUsuarios()
                )
              }
            >
              <div className="row">
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="nombreCompleto"
                    type="text"
                    name="nombreCompleto"
                    placeholder="Nombre Completo"
                    className={
                      "form-control bg-white border-left-0 border-md " +
                      validarNombreCompleto
                    }
                    onChange={actions.handleChange}
                    value={store.nombreCompleto}
                    onBlur={(e) => es_nombre()}
                    required
                  />
                  <div className={feedbackNombreCompleto + " font-weight-bold"}>
                    {mensajeNombreCompleto}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="correo"
                    type="email"
                    name="correo"
                    placeholder="correo@ejemplo.com"
                    className={
                      "form-control bg-white border-left-0 border-md " +
                      validarCorreo
                    }
                    onChange={actions.handleChange}
                    value={store.correo}
                    onBlur={(e) => es_correo()}
                    required
                  />
                  <div className={feedbackCorreo + " font-weight-bold"}>
                    {mensajeCorreo}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="telefono"
                    type="tel"
                    name="telefono"
                    placeholder="Numero de Teléfono +56900000000"
                    className={
                      "form-control bg-white border-md border-left-0 pl-3 " +
                      validarTelefono
                    }
                    onChange={actions.handleChange}
                    value={store.telefono}
                    onBlur={(e) => es_telefono()}
                    required
                  />
                  <div className={feedbackTelefono + " font-weight-bold"}>
                    {mensajeTelefono}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="contrasenia"
                    type="password"
                    name="contrasenia"
                    placeholder="Contraseña"
                    className={
                      "form-control bg-white border-md border-left-0 pl-3 " +
                      validarContrasenia
                    }
                    onChange={actions.handleChange}
                    value={store.contrasenia}
                    onBlur={(e) => es_contrasenia()}
                    required
                  />
                  <div className={feedbackContrasenia + " font-weight-bold"}>
                    {mensajeContrasenia}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="confirmContrasenia"
                    type="password"
                    name="confirmContrasenia"
                    placeholder="Confirmar Contraseña"
                    className={
                      "form-control bg-white border-md border-left-0 pl-3 " +
                      validarConfirmContrasenia
                    }
                    onChange={actions.handleChange}
                    value={store.confirmContrasenia}
                    onBlur={(e) => es_confirmContrasenia()}
                    required
                  />
                  <div
                    className={feedbackConfirmContrasenia + " font-weight-bold"}
                  >
                    {mensajeConfirmContrasenia}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <select
                    className={
                      "custom-select form-control bg-white border-left-0 border-md " +
                      validarComuna
                    }
                    id="comuna"
                    name="comuna"
                    value={store.comuna}
                    onChange={actions.handleChange}
                    onBlur={(e) => es_comuna()}
                    required
                  >
                    <option selected>
                      Dirección: Seleccione su comuna de residencia
                    </option>
                    <option value="Cerrillos">Cerrillos</option>
                    <option value="Cerro Navia">Cerro Navia</option>
                    <option value="Conchalí">Conchalí</option>
                    <option value="El Bosque">El Bosque</option>
                    <option value="Estación Central">Estación Central</option>
                    <option value="Huechuraba">Huechuraba</option>
                    <option value="Independencia">Independencia</option>
                    <option value="La Cisterna">La Cisterna</option>
                    <option value="La Florida">La Florida</option>
                    <option value="La Granja">La Granja</option>
                    <option value="La Pintana">La Pintana</option>
                    <option value="La Reina">La Reina</option>
                    <option value="Las Condes">Las Condes</option>
                    <option value="Lo Barnechea">Lo Barnechea</option>
                    <option value="Lo Espejo">Lo Espejo</option>
                    <option value="Lo Prado">Lo Prado</option>
                    <option value="Macul">Macul</option>
                    <option value="Maipú">Maipú</option>
                    <option value="Ñuñoa">Ñuñoa</option>
                    <option value="Pedro Aguirre Cerda">
                      Pedro Aguirre Cerda
                    </option>
                    <option value="Peñalolén">Peñalolén</option>
                    <option value="Providencia">Providencia</option>
                    <option value="Pudahuel">Pudahuel</option>
                    <option value="Quilicura">Quilicura</option>
                    <option value="Quinta Normal">Quinta Normal</option>
                    <option value="Recoleta">Recoleta</option>
                    <option value="Renca">Renca</option>
                    <option value="San Joaquín">San Joaquín</option>
                    <option value="San Miguel">San Miguel</option>
                    <option value="San Ramón">San Ramón</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Vitacura">Vitacura</option>
                    <option value="Otra">Otra</option>
                  </select>
                  <div className={feedbackComuna + " font-weight-bold"}>
                    {mensajeComuna}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="direccion"
                    type="text"
                    name="direccion"
                    placeholder="Calle / Avenida Ej. Arturo Prat"
                    className={
                      "custom-select form-control bg-white border-left-0 border-md " +
                      validarDireccion
                    }
                    onChange={actions.handleChange}
                    value={store.direccion}
                    onBlur={(e) => es_direccion()}
                    required
                  />
                  <div className={feedbackDireccion + " font-weight-bold"}>
                    {mensajeDireccion}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="numero"
                    type="text"
                    name="numero"
                    placeholder="Nº Calle / Avenida Ej. 1237"
                    className={
                      "custom-select form-control bg-white border-left-0 border-md " +
                      validarNumero
                    }
                    onChange={actions.handleChange}
                    value={store.numero}
                    onBlur={(e) => es_numero()}
                    required
                  />
                  <div className={feedbackNumero + " font-weight-bold"}>
                    {mensajeNumero}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <select
                    className={
                      "custom-select form-control bg-white border-left-0 border-md " +
                      validarTipoVivienda
                    }
                    id="tipoVivienda"
                    name="tipoVivienda"
                    value={store.tipoVivienda}
                    onChange={actions.handleChange}
                    onBlur={(e) => es_tipoVivienda()}
                    required
                  >
                    <option selected>Tipo de Vivienda</option>
                    <option value="Casa">Casa</option>
                    <option value="Departamento">Departamento</option>
                  </select>
                  <div className={feedbackTipoVivienda + " font-weight-bold"}>
                    {mensajeTipoVivienda}
                  </div>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="numDepto"
                    type="text"
                    name="numDepto"
                    placeholder="Numero de Casa / Departamento"
                    className={
                      "custom-select form-control bg-white border-left-0 border-md " +
                      validarNumDepto
                    }
                    onChange={actions.handleChange}
                    value={store.numDepto}
                    onBlur={(e) => es_numDepto()}
                    required
                  />
                  <div className={feedbackNumDepto + " font-weight-bold"}>
                    {mensajeNumDepto}
                  </div>
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block font-weight-bold"
                    value="Crear Cuenta"
                    onSubmit={actions.handleRegistroUsuario}
                  />
                </div>
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small text-muted font-weight-bold text-muted">
                    O
                  </span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Ya estas registrado?
                    <Link className="text-primary ml-2" to="/login">
                      Accede
                    </Link>
                  </p>
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

export default CreateAccount;
