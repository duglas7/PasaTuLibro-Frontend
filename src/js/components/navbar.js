import { Link, useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger " to="/">
          PASA TU LIBRO <i class="fas fa-swatchbook"></i>
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ml-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              {location.pathname === "/" ? (
                <a className="nav-link js-scroll-trigger" href="#services">
                  Servicios
                </a>
              ) : null}
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/publicaciones">
                PUBLICACIONES
              </Link>
            </li>
            <li className="nav-item">
              {!store.isAuth ? (
                <Link
                  className={
                    "nav-link " +
                    (location.pathname === "/login" ? "active" : "")
                  }
                  to="/login"
                >
                  Ingresar
                </Link>
              ) : null}
            </li>
            <li className="nav-item">
              {!store.isAuth ? (
                <Link
                  className={
                    "nav-link " +
                    (location.pathname === "/create" ? "active" : "")
                  }
                  to="/create"
                >
                  Registrate
                </Link>
              ) : null}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mi cuenta
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {store.datosPerfil ? (
                  <span className="dropdown-item font-weight-bold m-1 p-1">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="user"
                      className="svg-inline--fa fa-user fa-w-14 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                      ></path>
                    </svg>
                    <span>{store.datosPerfil.nombreCompleto}</span>
                  </span>
                ) : (
                  <Link
                    className={
                      "dropdown-item" +
                      (location.pathname === "/login" ? "active" : "")
                    }
                    to="/login"
                  >
                    Ingresar
                  </Link>
                )}
                {store.isAuth ? (
                  <Link className="dropdown-item" to="/misPublicaciones">
                    Mis Publicaciones
                  </Link>
                ) : null}
                {store.isAuth ? (
                  <Link className="dropdown-item" to="/agregarlibro">
                    Agregar Publicación
                  </Link>
                ) : null}
                {store.isAuth ? (
                  <a
                    className="dropdown-item"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      actions.cerrarSesion(history);
                    }}
                  >
                    Cerrar Sesion
                  </a>
                ) : null}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
