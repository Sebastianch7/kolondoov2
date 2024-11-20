import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "../Text/TitleSection";

import FormSuscripcion from "../Forms/FormSuscripcion";
import { getBlogPreviewId } from "../../services/ApiServices";
import { useLocation } from "react-router-dom";
import Load from "../Utils/Load";
import { Link } from "react-router-dom";
import MetaData from "../../Components/Header/SeoMetadata";

export default function ContenedorBlogItemPreview() {
  const [fetchBlog, setFetchBlog] = useState([]);
  const [rutaImagen] = useState(null);
  const [idBlog, setIdBlog] = useState(null);
  const [landing, setLanding] = useState(null);
  const [btnBack] = useState(null);
  const [validarCategoria, setValidarCategoria] = useState(null);
  const [load, setLoad] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let locations = pathname.split("/");
    setLanding(locations[1].toLowerCase());
    setValidarCategoria(locations[2].toLowerCase());
    setIdBlog(locations[3]);
  }, [idBlog, location.pathname, landing, validarCategoria]);

  useEffect(() => {
    let response;
    setLoad(true);
    const fetchBlogId = async () => {
      try {
        if (idBlog !== null) {
          response = await getBlogPreviewId(idBlog);
          setFetchBlog(response);
          setLoad(false);
        }
      } catch (error) {
        console.error("Error al obtener blog:", error);
      }
    };

    fetchBlogId();
  }, [idBlog]);

  return (
    <>
      <MetaData
        robots="noindex, nofollow"
        titulo={fetchBlog?.seo_titulo}
        descripcion={fetchBlog?.seo_descripcion}
        imagen_destacada={`${fetchBlog?.imagen}`}
      />
      {!load ? (
        <Container>
          <Row>
            <Col xs={12} md={8}>
              {fetchBlog?.imagen && (
                <Image
                  className="img-fluid w-100"
                  src={`${rutaImagen ? rutaImagen : ""}${fetchBlog?.imagen}`}
                  alt={`${
                    fetchBlog?.alt_img
                      ? fetchBlog?.alt_img
                      : "Imagen no encontrada"
                  }`}
                />
              )}
              <TitleSection
                left
                title={fetchBlog?.titulo}
                textBlog={fetchBlog?.contenido}
                clave={fetchBlog?.hashtags
                  ?.replaceAll("[", "")
                  .replaceAll('"', "")
                  .replaceAll("]", "")
                  .replaceAll(",", " ")}
                fecha={fetchBlog?.fecha_publicacion}
                autor={fetchBlog?.autor}
              />
              <Col xs={12} className="text-center my-5">
                <Link className="font-09 btn btn-primary" to={`/es/${btnBack}`}>
                  Volver
                </Link>
              </Col>
            </Col>
            <Col xs={12} md={4}>
              {/* <ContenedorDestacados /> */}
            </Col>
          </Row>
          <Row>
            <FormSuscripcion />
          </Row>
        </Container>
      ) : (
        <Load></Load>
      )}
    </>
  );
}
