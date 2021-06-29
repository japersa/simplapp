import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const SignIn = ({
  loginForm,
  loginReset,
  loginState: { requesting, successful, error },
}) => {
  const history = useHistory();
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  useEffect(() => {
    document.getElementById("body").className = "bg-default";
  }, []);

  const onSubmit = (data) => {
    loginForm(data);
  };

  useEffect(() => {
    if (successful) {
      reset();
      loginReset();
      history.push("/generate");
    }
  }, [successful]);

  useEffect(() => {
    if (error) {
      loginReset();
    }
  }, [error]);

  return (
    <>
      <div className="container vh-100">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">¡Bienvenido de nuevo!</h1>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                          <input
                            type="text"
                            className={`form-control form-control-user ${errors.username && 'is-invalid'
                              }`}
                            placeholder="Correo electrónico"
                            {...register('username', { required: true })}
                          />
                          {errors.username && (
                            <span className="invalid-feedback">
                              El correo electrónico es requerido
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Contraseña"
                            className={`form-control form-control-user ${errors.password && 'is-invalid'
                              }`}
                            {...register('password', { required: true })}
                          />
                          {errors.password && (
                            <span className="invalid-feedback">
                              La contraseña es requerida
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label py-1"
                              for="customCheck"
                            >
                              Recuérdame
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Iniciar sesión
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          ¿Has olvidado tu contraseña?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state.loginState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginForm: (data) =>
      dispatch({
        type: 'LOGIN_REQUEST',
        data,
      }),
    loginReset: () =>
      dispatch({
        type: 'LOGIN_RESET',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);