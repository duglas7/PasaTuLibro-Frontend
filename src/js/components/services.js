function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Servicios</h2>
          <h3 className="section-subheading text-muted">
            Te podemos ayudar a encontrar e intercambiar ese libro que tanto
            buscas.
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Publica tu Libro</h4>
            <p className="text-muted">
              Puedes vender ese libro que ya no utilices.
            </p>
          </div>
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-recycle fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Recicla tu libro</h4>
            <p className="text-muted">
              {" "}
              Puedes permutar ese libro que ya no te gusta por otro que quieras
              leer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
