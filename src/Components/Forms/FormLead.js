import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { BsFillTelephoneFill, BsXCircle } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { postLead } from "../../services/ApiServices";
import { useTranslation } from "react-i18next";

export default function FormLead({
  idPlan,
  landing,
  offerLooking,
  urlOffers,
  company,
  data,
  isBank = false,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [lang, setLang] = useState("");
  const [urlSplit, setUrlSplit] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [checkInAsesoria, setCheckInAsesoria] = useState(false);
  const [checkInComercial, setCheckInComercial] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState("");
  const [textButton, setTextButton] = useState(t("LLÁMAME AHORA"));

  useEffect(() => {
    const pathArray = location.pathname.split("/");
    setLang(pathArray[1]);
    setUrlSplit(pathArray);
  }, [location]);

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(inputPhoneNumber);
    setIsValidPhoneNumber(/^[6-9]\d{8}$/.test(inputPhoneNumber));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSend(true);
    setIsError("");

    try {
      const response = await postLead(
        idPlan,
        phoneNumber,
        landing,
        urlOffers,
        company
      );
      const status = response?.data?.status;

      if (status === 201 || status === 308) {
        handleSuccess(t("Tu solicitud ha sido registrada."));
      } else {
        setIsError(
          response?.data?.message || t("Error al procesar la solicitud")
        );
      }
    } catch (error) {
      setTextButton(t("Error al procesar la solicitud"));
      setIsError(error?.response?.data?.message || t("Error desconocido"));
    } finally {
      setIsSend(false);
    }
  };

  const handleSuccess = (message) => {
    setTextButton(message);
    setCheckInAsesoria(false);

    setTimeout(() => {
      const isNotComparador =
        landing !== "comparador-finanzas" &&
        landing !== "comparador-tarifas-seguros-salud";
      const redirectUrl = isNotComparador
        ? `/es/${urlSplit[2]}/${urlSplit[3]}/thank/${urlSplit[4]}`
        : data.url_redirct;

      if (isNotComparador) {
        navigate(redirectUrl);
      } else {
        window.location.href = data.url_redirct;
      }
    }, 3000);
  };

  return (
    <Card className="tarjeta-lead">
      <Card.Header className="text-center">
        {t("Oferta disponible")}
      </Card.Header>
      <Card.Body>
        <Card.Text className="text-center text-primary">
          {t("Déjanos tu teléfono y te llamamos gratis")}
        </Card.Text>
        <Form onSubmit={handleFormSubmit}>
          <div className="mx-2">
            <div className="input-group">
              <span className="input-group-text">
                <BsFillTelephoneFill />
              </span>
              <Form.Control
                className="form-control no-radius"
                placeholder={t("Introduce tu teléfono")}
                aria-label={t("Introduce tu teléfono")}
                type="tel"
                onChange={handlePhoneNumberChange}
                value={phoneNumber}
                maxLength={9}
              />
            </div>
            {!isValidPhoneNumber && phoneNumber.length > 4 && (
              <div className="text-danger mt-3">
                <BsXCircle />
                &nbsp;{t("El número de teléfono ingresado no es válido")}
              </div>
            )}
            <Form.Group className="my-3" controlId="switchControlAsesoria">
              <Form.Switch
                className="input-check mt-2"
                checked={checkInAsesoria}
                onChange={() => setCheckInAsesoria(!checkInAsesoria)}
                label={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(
                        'Acepto recibir comunicaciones comerciales de Vuskoo. Más información en <a href="/{{lang}}/politica-privacidad">Política de Privacidad</a>',
                        { lang }
                      ),
                    }}
                  />
                }
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="switchControlComercial">
              <Form.Switch
                className="input-check mt-2"
                checked={checkInComercial}
                onChange={() => setCheckInComercial(!checkInComercial)}
                label={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(
                        'Acepto que {{nombre}} me asesore telefónicamente sobre el producto y servicio elegido de acuerdo con su <a href="{{politica_privacidad}}">Política de Privacidad</a>',
                        {
                          nombre: data.nombre,
                          politica_privacidad: data.politica_privacidad,
                        }
                      ),
                    }}
                  />
                }
              />
            </Form.Group>
            {isError && (
              <div className="my-3 text-danger">
                <span dangerouslySetInnerHTML={{ __html: isError }} />
              </div>
            )}
            <div className="text-center m-4">
              <Button
                disabled={!checkInAsesoria || !isValidPhoneNumber || isSend}
                type="submit"
              >
                {textButton}
              </Button>
            </div>
          </div>
        </Form>
      </Card.Body>
      {data?.telefono && (
        <div className="footer-call-me text-center">
          <span className="color-primary mx-3">{t("O llámanos tú:")}</span>
          <a
            href={`tel:${data.telefono}`}
            className="icon-call-number text-decoration-none"
          >
            {data.telefono}
          </a>
        </div>
      )}
    </Card>
  );
}
