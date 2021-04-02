

function Busqueda() {
    return(
        <section className="page-section" id="busqueda">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Busca el Libro que Necesitas</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Titulo"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Autor"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Editorial"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Categoria"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nivel"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Busqueda;