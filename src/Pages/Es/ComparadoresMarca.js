import React, { useState, useEffect } from "react";
import HeaderLead from "../../Components/Header/HeaderLead";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Load from "../../Components/Utils/Load";
import Title from "../../Components/Text/Title";
import Footer from "../../Components/Footer/Footer";
import TarjetaTarifaLead from "../../Components/Tarjeta/TarjetaTarifaLead";
import MetaData from "../../Components/Header/SeoMetadata";
import TarjetaTarifaLeadEnergia from "../../Components/Tarjeta/TarjetaTarifaLeadEnergia";
import TarjetaTarifaLeadGas from "../../Components/Tarjeta/TarjetaTarifaLeadGas";
import TarjetaTarifaLeadEnergiaGas from "../../Components/Tarjeta/TarjetaTarifaLeadEnergiaGas";
import Header from "../../Components/Header/Header";

export default function ComparadoresMarca() {
  const [isLoading, setIsLoading] = useState(false);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const [title, setTitle] = useState(null);
  const location = useLocation();

  const [offerLooking, setOfferLooking] = useState(null);

  useEffect(() => {
    setIsLoading(false);
    setInfoOffer([]);
    setIdPlan(null);
    setTitle(null);
    setOfferLooking(null);
    //let locations = location.pathname.split('/');
    //let idSplit = locations[3];
    //setIdPlan(idSplit[idSplit.length - 1]);
    //locations.pop();
    //setOfferLooking(locations[3])
    //setBreadUrl(locations.join('/'));
  }, [location.pathname]);

  useEffect(() => {
    /* const fetchTariffs = async () => {
      try {
        if (idPlan !== null) {
          const response = await getDetailOffer(offerLooking, idPlan)
          let titleOriginal = response.slug_tarifa.split('-')
          titleOriginal.pop();
          setTitle(titleOriginal.toString())
          setInfoOffer(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al cargar la informacion:", error);
      }
    };
    fetchTariffs(); */
  }, [idPlan]);

  return !isLoading ? (
    <>
      <MetaData
        titulo={`Ofertas ${infoOffer.funcion}: ${title?.replaceAll(
          ",",
          " "
        )} - ${infoOffer.nombre} | Vuskoo`}
      />
      <Header></Header>
      <HeaderLead logo={"/img/logos/lowi.svg"} />
      <Container className="mb-5">
        <Row className="justify-content-md-center d-flex flex-column flex-md-row">
          <Title title={`Conoce más sobre ${infoOffer.nombre_tarifa}`} />
          <Col xs={12} className="my-2">
            {(offerLooking?.toLowerCase() === "comparador-movil" ||
              offerLooking?.toLowerCase() === "comparador-fibra" ||
              offerLooking?.toLowerCase() ===
                "comparador-tarifas-fibra-y-movil" ||
              offerLooking?.toLowerCase() === "comparador-fibra-movil-tv") && (
              <TarjetaTarifaLead
                key={0}
                data={infoOffer}
                service={offerLooking}
              />
            )}
            {offerLooking?.toLowerCase() === "comparador-tarifas-luz" && (
              <TarjetaTarifaLeadEnergia
                key={0}
                data={infoOffer}
                service={offerLooking}
              />
            )}
            {offerLooking?.toLowerCase() === "comparador-tarifas-gas" && (
              <TarjetaTarifaLeadGas
                key={0}
                data={infoOffer}
                service={offerLooking}
              />
            )}
            {offerLooking?.toLowerCase() === "comparador-tarifas-luz-y-gas" && (
              <TarjetaTarifaLeadEnergiaGas
                key={0}
                data={infoOffer}
                service={offerLooking}
              />
            )}
          </Col>
          <Col xs={12} md={5} className="my-2"></Col>
          <Col xs={12} md={12} className="my-2"></Col>
        </Row>
      </Container>
      <Footer />
    </>
  ) : (
    <Load />
  );
}
