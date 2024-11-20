import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function TarjetaItemBlog({ data }) {
  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);

  console.log(data);

  const {
    fecha_publicacion,
    categoria_slug,
    categoria,
    imagen,
    titulo,
    entradilla,
    url_amigable,
  } = data;
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
    let fecha = new Date(data);

    // Obtener día, mes y año
    let dia = fecha.getDate();
    let mes = parseInt(fecha.getMonth()); // Los meses en JavaScript son de 0 a 11
    let año = fecha.getFullYear();

    // Formatear la cadena con ceros a la izquierda si es necesario
    let diaStr = dia < 10 ? "0" + dia : dia;

    // Construir la cadena en el formato "día-mes-año"
    let fechaFormateada = `${diaStr} ${meses[mes]} de ${año}`;

    return fechaFormateada;
  };

  return (
    <>
      <Col xs={12} md={4}>
        <Card className="m-2 tarjeta tarjeta-blog tarjeta-blog-blog border-0">
          <a
            className="w-100px"
            href={`/${lang}/blog/${categoria_slug}/${url_amigable}`}
          >
            <Card.Img
              variant="top"
              className="img-fluid"
              src={`${imagen}`}
              alt={`${imagen}`}
            />
          </a>
          <Card.Body className="bg-gray">
            <span>{cambiarFecha(fecha_publicacion)}</span> -{" "}
            <span>{categoria}</span>
            <Card.Title>
              <Link
                to={`/${lang}/blog/${categoria_slug}/${url_amigable}`}
                className="title-card-a"
              >
                <b>{titulo}</b>
              </Link>
              {/* <p className='font-09 color-primary mt-2'>{hashtags?.replaceAll('[', '').replaceAll(']', '').replaceAll('"', '').replaceAll(',', ' ')}</p> */}
            </Card.Title>
            <Card.Text className="font-09">
              <span
                dangerouslySetInnerHTML={{ __html: `${entradilla}` }}
              ></span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
