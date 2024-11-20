import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import InputCheck from "../Input/InputCheck";
import { isMobile } from "react-device-detect";
import BannerReverse from "../Banner/BannerReverse";
import { postFormNews } from "../../services/ApiServices";
import { useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function FormSuscripcion() {
  const recaptcha = useRef();

  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location, lang]);

  const [checkIn, setCheckIn] = useState(false);
  const [inpEmail, setInpEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(null);

  const handleEmailChange = (input) => {
    setInpEmail(input);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(input));
  };

  const changeValue = (valor) => {
    setCheckIn(valor);
  };

  async function subscripcion(e) {
    e.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    setIsSend(false);

    if (!captchaValue) {
      alert("Verifica que eres un humano");
    } else {
      try {
        const response = await postFormNews(inpEmail);
        if (response.status === 201) {
          setInpEmail("");
          setCheckIn(false);
          setIsSend(true);
        }
      } catch (error) {
        console.error("Error al enviar datos:", error);
      }
    }
  }

  return (
    <div id="newsform">
      <BannerReverse
        title={"Suscríbete gratis y recibe nuestras mejores ofertas"}
        subtitle="Únete a nuestra comunidad. Recibirás nuestros mejores contenidos semanalmente: guías prácticas para ahorrar y gestionar tu consumo, últimas entradas…¡ Y mucho más!"
        image={"/img/bannerFooter.png"}
      >
        <Form onSubmit={subscripcion}>
          <div className="mx-2">
            {!isMobile ? (
              <InputGroup className="">
                <Form.Control
                  className={"form-control no-radius"}
                  placeholder={"Escribe tu email aquí"}
                  aria-label={"Escribe tu email aquí"}
                  type={"email"}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  value={inpEmail}
                />
                <Button
                  type="submit"
                  disabled={!checkIn && isValidEmail ? false : true}
                >
                  Suscríbete gratis
                </Button>
              </InputGroup>
            ) : (
              <>
                <Form.Control
                  className={"form-control no-radius"}
                  placeholder={"Escribe tu email aquí"}
                  aria-label={"Escribe tu email aquí"}
                  type={"email"}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  value={inpEmail}
                />
                <Button
                  type="submit"
                  disabled={!checkIn && isValidEmail ? false : true}
                  className="col-12"
                >
                  Suscríbete gratis
                </Button>
              </>
            )}
            <ReCAPTCHA
              ref={recaptcha}
              sitekey={process.env.REACT_APP_SITE_KEY}
            />
            {isSend && (
              <p className="color-green">
                Gracias por registrarte. Te hemos enviado un correo de
                confirmación, por favor revisa tu bandeja de entrada para
                verificar tu cuenta.
              </p>
            )}
            <InputCheck
              onChangeValue={changeValue}
              text={`He leído y acepto <a href='/es/politica-privacidad' target='_self'>la Política de Privacidad</a> y quiero recibir comunicaciones comerciales.`}
            />
          </div>
        </Form>
      </BannerReverse>
    </div>
  );
}

export default FormSuscripcion;
