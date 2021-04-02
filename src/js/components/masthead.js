import { Link } from "react-router-dom";
function Masthead() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">
          Bienvenido al mundo de la venta e intercambio de libros
        </div>
        <div className="masthead-heading text-uppercase">
          podrás vender o permutar tus libros escolares
        </div>
        <Link
          className="btn btn-primary btn-xl text-uppercase border border-light js-scroll-trigger"
          to="/publicaciones"
        >
          Ver Publicaciones
        </Link>
      </div>
    </header>
  );
}

export default Masthead;
