import React from 'react';
import { useContext } from "react";
import { Context } from "../store/appContext";
import fotolibro  from "../../img/portfolio/Libros-de-texto2.jpg";

const PortfolioGrid = (props) => {

    const { store, actions } = useContext(Context);

    return(
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Publicados</h2>
                    <h3 className="section-subheading text-muted">Aqui encontraras los libros que están siendo publicados ya sea para realizar una venta o permuta.</h3>
                </div>
                <div className="row">
                    {
                        !!store.publicaciones &&
                        store.publicaciones.map( (publicacion, id) => {
                            return(
                                <div className="col-lg-4 col-sm-6 mb-4" key={id}>
                                    <div className="portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                            </div>
                                            <img className="img-fluid" src={fotolibro} alt="" />
                                        </a>
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">{publicacion.titulo}</div>
                                            <div className="portfolio-caption-subheading text-muted">Autor: {publicacion.nombreAutor}</div>
                                            <div className="portfolio-caption-subheading text-muted">Asignatura: {publicacion.asignatura}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default PortfolioGrid;