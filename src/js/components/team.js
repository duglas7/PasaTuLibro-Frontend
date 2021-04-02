import fotoTeam4 from "../../img/team/Cris.jfif";
import fotoTeam5 from "../../img/team/Duglas7.jpeg";
import fotoTeam6 from "../../img/team/Yessy.png";

function Teams() {
  return (
    <section className="page-section bg-light pt-4" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Equipo de Desarrolladores del Proyecto
          </h2>
          <h3 className="section-subheading text-muted">
            Generación Part Time XII
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={fotoTeam4} alt="" />
              <h4>Cristian Alvarez</h4>
              <p className="text-muted">Estudiante 4Geeks Academy</p>
              {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={fotoTeam6} alt="" />
              <h4>Yessenia Díaz</h4>
              <p className="text-muted">Estudiante 4Geeks Academy</p>
              {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle img-fluid color-gris"
                src={fotoTeam5}
                alt=""
              />
              <h4>Duglas Medina</h4>
              <p className="text-muted">Estudiante 4Geeks Academy</p>
              {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted"> </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teams;
