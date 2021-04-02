import { Link } from "react-router-dom";
import logo from "../../img/logoPasatuLibro.png";

function NavbarLogin() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
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
            {/* <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#services">
                                Servicios
              </a>
                        </li> */}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Publicaciones
              </a>
            </li>
            {/* <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#team">
                                Equipo
              </a>
                        </li> */}
            {/* <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="...">
                                <Link to="/login">Login</Link>
                            </a>
                        </li> */}
            {/* <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="...">
                                <Link to="/create">Registrate</Link>
                            </a>
                        </li> */}
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
                Mi Perfil
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/agregarLibro">
                  {" "}
                  Publica tu libro{" "}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLogin;
