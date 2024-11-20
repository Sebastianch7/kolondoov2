import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "../../Components/Text/TitleSection";
import MetaData from "../../Components/Header/SeoMetadata";
import { fetchTarifasSegurosSalud } from "../../services/ApiServices";
import ItemSegurosInfo from "../../Components/Items/ItemSegurosInfo";
import TarjetaBannerSeguroSalud from "../../Components/Tarjeta/TarjetaBannerSeguroSalud";
import ContenedorProductosSegurosSalud from "../../Components/Contenedor/ContenedorProductosSegurosSalud";
import { useLocation } from "react-router-dom";

export default function ComparadorSegurosSalud() {
  
  const [lang, setLang] = useState("");
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);

  const [offers, setOffers] = useState([]); //copago
  const [offersOut, setOffersOut] = useState([]); //sin copago


  useEffect(() => {
    if (lang != null) {
      const fetchTariffs = async () => {
        try {
          let response = await fetchTarifasSegurosSalud("es", 1);
          setOffers(response);
        } catch (error) {
          console.error("Error al obtener las tarifas de móvil:", error);
        }
      };

      fetchTariffs();
    }
  }, [lang]);

  useEffect(() => {
    if (lang != null) {
      const fetchTariffs = async () => {
        try {
          let response = await fetchTarifasSegurosSalud("es", 2);
          setOffersOut(response);
        } catch (error) {
          console.error("Error al obtener las tarifas de móvil:", error);
        }
      };

      fetchTariffs();
    }
  }, [lang]);

  return (
    <>
      <MetaData titulo={" | Vuskoo"} descripcion={""} />
      <Header breadCrumb></Header>
      <Container className="p-5">
        <Row>
          <Col xs={12} md={12} className="my-5">
            <TitleSection
              center
              title={"Comparador de"}
              titleAlt={"seguros de salud "}
              subtitle={
                "Elige el seguro de salud que mejor se adapte a tus necesidades"
              }
            />
          </Col>
          <TarjetaBannerSeguroSalud />
          <Col xs={12} className="my-5">
            <Row className="align-content-center">
              <ItemSegurosInfo
                icon={"/img/icons/hucha.svg"}
                content={
                  "Te damos un presupuesto personalizado para que no pagues de más."
                }
              />
              <ItemSegurosInfo
                icon={"/img/icons/candado.svg"}
                content={
                  "Solo trabajamos con las compañías de alarmas que ofrecen el mayor nivel de seguridad."
                }
              />
              <ItemSegurosInfo
                icon={"/img/icons/telefono.svg"}
                content={
                  "Tendrás tu presupuesto en una llamada y, si lo deseas, podrás contratar de manera sencilla."
                }
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-blueContrast p-5">
        <Row>
          <Col md={8} className="my-5 mx-auto">
            <Row>
              <Col md={4} className="d-none d-md-block">
                <img src="/img/seguros/banner_dudas.png" />
              </Col>
              <Col md={8}>
                <h4 className="my-4">¿Tienes dudas? Te ayudamos a elegir</h4>
                <p>
                  Solicita tu estudio gratuito y recibe las mejores ofertas para
                  proteger tu vivienda.
                </p>
                <div className="d-flex d-none d-md-block">
                  <a href="/" className="btn btn-primary m-1">
                    Solicitar estudio
                  </a>
                  <a href="/" className="btn btn-primary m-1">
                    Te llamamos
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="p-5">
        <Row>
          <Col md={12} className="my-5">
            <TitleSection
              center
              title={"Comparador de"}
              titleAlt={"seguros con copago"}
            />
          </Col>
          <ContenedorProductosSegurosSalud data={offers} />
        </Row>
        <Row>
          <Col md={12} className="mb-5">
            <TitleSection
              center
              title={"Comparador de"}
              titleAlt={"seguros sin copago"}
            />
          </Col>
          <ContenedorProductosSegurosSalud data={offersOut} />
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}
