import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import "./login.css";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="content box-sizing">
        <div className="container margentop">
          <div className="row justify-content-center">
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="form-block">
                    <div className="mb-4">
                      <h3>
                        <strong>Ingreso</strong>
                      </h3>
                      <p className="mb-4">
                        Complete todos los datos para ingresar a la plataforma
                      </p>
                    </div>
                    <form action="#" method="post" onChange={() => {}}>
                      <div className="form-group last mb-4">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />
                      </div>
                      <div className="form-group last mb-4">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                        />
                      </div>
                      <div className="d-flex mb-5 align-items-center">
                        <label className="control control--checkbox mb-0">
                          <span className="caption">Remember me</span>
                          <input
                            type="checkbox"
                            checked={() => {}}
                            onChange={() => {}}
                          />
                          <div className="control__indicator"></div>
                        </label>
                        <span className="ml-auto">
                          <a href="#" className="forgot-pass">
                            Forgot Password
                          </a>
                        </span>
                      </div>
                      <input
                        type="submit"
                        value="Log In"
                        className="btn btn-pill text-white btn-block btn-primary"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
