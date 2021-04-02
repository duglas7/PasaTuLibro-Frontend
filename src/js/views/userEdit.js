import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { Context } from "../store/appContext"


const UserEdit = ({ match }, props) => {

  const { store, actions } = useContext(Context)
  
  const id = match.params.id;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://image.freepik.com/vector-gratis/concepto-cursos-idiomas-online-estudiar-idiomas-extranjeros-escuela-o-universidad-leccion-ingles-ilustracion-isometrica-vector_277904-1170.jpg"
              alt="hola"
              className="img-fluid mb-3 d-none d-md-block"
            />
            <h1>Modifica tu perfil</h1>
            <p className="font-italic text-muted mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              non.
            </p>
          </div>
          <div className="col-md-7 col-lg-6 ml-auto">
          <form onSubmit={actions.handleusuarios}>
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
                    className="form-control bg-white border-left-0 border-md"
                    onChange={actions.handleChange}
                    value={store.usuarios[id].nombreCompleto}
                  />
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
                    placeholder="Correo Electronico"
                    className="form-control bg-white border-left-0 border-md"
                    value={store.usuarios[id].correo}
                    readOnly
                  />
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
                    className="form-control bg-white border-md border-left-0 pl-3"
                    onChange={actions.handleChange}
                    value={store.usuarios[id].telefono}
                  />
                </div>
                <div className="input-group col-lg-6 mb-4">
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
                    className="form-control bg-white border-left-0 border-md"
                    onChange={actions.handleChange}
                    value={store.contrasenia}
                  />
                </div>
                <div className="input-group col-lg-6 mb-4">
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
                    className="form-control bg-white border-left-0 border-md"
                    onChange={actions.handleChange}
                    value={store.confirmContrasenia}
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <select
                    class="custom-select form-control bg-white border-left-0 border-md"
                    id="comuna"
                    name="comuna"
                    value={store.usuarios[id].comuna}
                    onChange={actions.handleChange}
                  >
                    <option selected>Dirección: Comuna</option>
                    <option value="Cerrillos">Cerrillos</option>
                    <option value="Cerro Navia">Cerro Navia</option>
                    <option value="Conchalí">Conchalí</option>
                    <option value="El Bosque">El Bosque</option>
                    <option value="Estación Central">
                      Estación Central
                    </option>
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
                    placeholder="Calle Arturo Prat 1234"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={actions.handleChange}
                    value={store.usuarios[id].direccion}
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <select
                    class="custom-select form-control bg-white border-left-0 border-md"
                    id="tipoVivienda"
                    name="tipoVivienda"
                    value={store.usuarios[id].tipoVivienda}
                    onChange={actions.handleChange}
                  >
                    <option selected>Tipo de Vivienda</option>
                    <option value="Casa">Casa</option>
                    <option value="Departamento">Departamento</option>
                  </select>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fas fa-map-marked-alt text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="direccionNumero"
                    type="text"
                    name="direccionNumero"
                    placeholder="Casa 1234 / Depto 1507"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={actions.handleChange}
                    value={store.usuarios[id].direccionNumero}
                  />
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <input type="submit" className="btn btn-primary btn-block font-weight-bold" value="Confirmar datos" onSubmit={actions.handleusuarios}/>
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

export default UserEdit;
