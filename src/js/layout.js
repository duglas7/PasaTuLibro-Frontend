import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import AgregarLibro from "./views/agregarLibro";
import EliminarPublicacion from "./views/eliminarPublicacion";
import ModificarLibro from "./views/modificarLibro";
import EliminarUsuario from "./views/eliminarUsuario";
import HomePrivate from "./views/homePrivate";
import injectStore from "./store/appContext";
import login from "./views/login";
import createAccount from "./views/createAccount";
import passwordRecover from "./views/passwordRecover";
import userEdit from "./views/userEdit";
import publicacion from "./views/publicacion";
import homeAdmin from "./views/homeAdmin";
import "../styles/index.css";
import Perfil from "./views/perfil";
import ListadoPublicaciones from "./views/listadoPublicaciones";
import Usuario from "./views/usuario";
import misPublicaciones from "./views/misPublicaciones";
import PublicacionId from "./views/publicacionId";

export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/perfil" component={Perfil} />
						<Route exact path="/agregarLibro" component={AgregarLibro} />
						<Route exact path="/eliminarUsuario" component={EliminarUsuario} />
						<Route exact path="/eliminarPublicacion" component={EliminarPublicacion} />
						<Route exact path="/modificarLibro" component={ModificarLibro} />
						<Route exact path="/login" component={login} ></Route>
						<Route exact path="/homePrivate" component={HomePrivate} ></Route>
						<Route exact path="/create" component={createAccount} ></Route>
						<Route exact path="/publicaciones" component={ListadoPublicaciones} ></Route>
						<Route exact path="/useredit/:id" component={userEdit} ></Route>
						<Route exact path="/usuarios/:id" component={Usuario} ></Route>
						<Route exact path="/passwordrecover" component={passwordRecover} ></Route>
						<Route exact path="/publicacion/:id" component={publicacion} ></Route>
						<Route exact path="/publicacionId/:id" component={PublicacionId} ></Route>
						<Route exact path="/misPublicaciones/" component={misPublicaciones} ></Route>
						<Route exact path="/homeadmin" component={homeAdmin} ></Route>
						<Route render={() => <h1>Not found!</h1>} ></Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectStore(Layout);