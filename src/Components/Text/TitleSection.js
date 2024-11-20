import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Title from "./Title";
import ButtonPrimary from "../Button/ButtonPrimary";
import Subtitle from "./Subtitle";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { BsFillFilePersonFill } from "react-icons/bs";

function TitleSection({
  fecha,
  autor,
  title,
  titleAlt,
  titleThird,
  titleBottom,
  subtitle,
  center = false,
  buttons,
  text1 = "",
  text2 = "",
  left,
  btnLeft = false,
  blog,
  clave,
  textBlog = "",
  imagen,
}) {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const cambiarFecha = (data) => {
    if (!data) return "";
    const fecha = new Date(data);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${dia} ${mes} de ${año}`;
  };

  return (
    <Container>
      <Row>
        <Col md={12} className={center ? "text-center b-600" : ""}>
          <Title
            title={title}
            titleAlt={titleAlt}
            titleThird={titleThird}
            titleBottom={titleBottom}
          />
          {subtitle && <Subtitle subtitle={subtitle} />}

          {fecha && (
            <div className="color-primary d-flex mb-4">
              <b>
                <BsFillCalendar2Fill />
                &nbsp;{cambiarFecha(fecha)}
              </b>
            </div>
          )}

          {clave && (
            <p className="color-primary">
              <b>{clave}</b>
            </p>
          )}

          {text1 && (
            <p
              className={left ? "text-left" : ""}
              dangerouslySetInnerHTML={{ __html: text1 }}
            />
          )}

          {text2 && (
            <p
              className={left ? "text-left" : ""}
              dangerouslySetInnerHTML={{ __html: text2 }}
            />
          )}

          {textBlog && (
            <p
              className="blog"
              dangerouslySetInnerHTML={{ __html: textBlog }}
            />
          )}

          {imagen && (
            <img
              className="img-fluid mt-2 mb-4"
              style={{ height: "112px" }}
              src={imagen}
              alt="Title section"
            />
          )}

          {buttons && (
            <Row className={`${!btnLeft ? "text-center mx-auto" : ""}`}>
              <Stack
                gap={3}
                className="mx-auto d-block"
                direction={isMobile ? "vertical" : "horizontal"}
              >
                {buttons.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="m-0 m-md-2 btn btn-primary"
                  >
                    {item.icon && <img src={item.icon} alt="button icon" />}
                    &nbsp;{item.title}
                  </Link>
                ))}
              </Stack>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default TitleSection;
