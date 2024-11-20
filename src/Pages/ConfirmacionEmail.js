import React, { useEffect, useState } from "react";
import { getEmailConfirmacion } from "../services/ApiServices";
import { useLocation } from "react-router-dom";

export default function ConfirmacionEmail() {
  const [lang, setLang] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Inicialmente está cargando
  const [isError, setIsError] = useState(false); // Para manejar errores
  const [token, setToken] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
    setToken(location.pathname.split("/")[2]);
  }, [location, lang]);

  useEffect(() => {
    const setEmail = async () => {
      try {
        const response = await getEmailConfirmacion(token);
        setEmailConfirmacion(response);
        if (response.code === 201) {
          setIsLoading(false); // Se detiene la carga si la confirmación es exitosa
          setIsError(false);
        } else {
          setIsError(true); // Maneja error si el código no es 201
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener confirmación de email:", error);
        setIsError(true); // Maneja el error
        setIsLoading(false); // Se detiene la carga incluso en caso de error
      }
    };
    if (token) {
      setEmail(); // Solo ejecutamos la llamada si hay un token
    }
  }, [token, emailConfirmacion]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : isError ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-8">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="https://www.vuskoo.com/img/logos/logo.svg"
                  alt="Vuskoo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
                <hr />
                <h1 className="card-title text-danger my-5">
                  Error al verificar tu correo
                </h1>
                <p className="card-text">
                  Hubo un problema verificando tu cuenta. Por favor, intenta
                  nuevamente más tarde.
                </p>
                <a href="/" className="btn btn-danger mt-3">
                  Volver al inicio
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-8">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="https://www.vuskoo.com/img/logos/logo.svg"
                  alt="Vuskoo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
                <hr />
                <h1 className="card-title text-primary my-5">
                  ¡Gracias por verificar tu correo!
                </h1>
                <p className="card-text">
                  Tu cuenta ha sido verificada exitosamente. Ahora podrás
                  recibir nuestras actualizaciones y las últimas novedades
                  directamente en tu bandeja de entrada.
                </p>
                <a href="/" className="btn btn-primary mt-3">
                  Volver al inicio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
