import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "../Text/TitleSection";
import FormSuscripcion from "../Forms/FormSuscripcion";
import { getBlogById } from "../../services/ApiServices";
import { useLocation } from "react-router-dom";
import Load from "../Utils/Load";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MetaData from "../../Components/Header/SeoMetadata";

export default function ContenedorBlogItem() {
  const [fetchBlog, setFetchBlog] = useState([]);
  const [rutaImagen] = useState(null);
  const [idBlog, setIdBlog] = useState(null);
  const [carpeta, setCarpeta] = useState(null);
  const [landing, setLanding] = useState(null);
  const [btnBack, setBtnBack] = useState(null);
  const [validarCategoria, setValidarCategoria] = useState(null);
  const [load, setLoad] = useState(false);
  const [lang, setLang] = useState(null);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);

  useEffect(() => {
    const pathname = location.pathname;
    let locations = pathname.split("/");
    setLanding(locations[2].toLowerCase());
    setValidarCategoria(locations[3].toLowerCase());
    setIdBlog(locations[4]);
  }, [idBlog, location.pathname]);

  useEffect(() => {
    let response;
    setLoad(true);
    const fetchBlogId = async () => {
      try {
        if (idBlog !== null) {
          switch (landing) {
            case "blog":
              response = await getBlogById(lang, validarCategoria, idBlog);
              if (
                response === undefined ||
                (!response.categoria_slug.includes(validarCategoria) &&
                  validarCategoria !== "destacados")
              ) {
                navigate("/es/404", {
                  replace: true,
                  state: { statusCode: 404 },
                });
              }
              setFetchBlog(response);
              setLoad(false);
              setBtnBack("blog");
              setCarpeta("blog");
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.error("Error al obtener blog:", error);
      }
    };

    fetchBlogId();
  }, [lang, validarCategoria, idBlog, landing, carpeta, navigate]);

  return (
    <>
      <MetaData
        titulo={fetchBlog?.seo_titulo}
        descripcion={fetchBlog?.seo_descripcion}
        imagen_destacada={`${fetchBlog?.imagen}`}
      />
      {!load ? (
        <Container>
          <Row>
            <Col xs={12}>
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
            {/* <Col xs={12} md={4}>
                        <ContenedorDestacados />
                    </Col> */}
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
