import fotoTeam1  from "../../img/team/1.jpg";
import fotoTeam2  from "../../img/team/2.jpg";
import fotoTeam3  from "../../img/team/3.jpg";

function Teams() {
    return(
        <section className="page-section bg-light" id="team">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={fotoTeam1} alt="" />
                        <h4>Kay Garland</h4>
                        <p className="text-muted">Lead Designer</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={fotoTeam2} alt="" />
                        <h4>Larry Parker</h4>
                        <p className="text-muted">Lead Marketer</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={fotoTeam3} alt="" />
                        <h4>Diana Petersen</h4>
                        <p className="text-muted">Lead Developer</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
            </div>
        </div>
    </section>
    );
}

export default Teams;