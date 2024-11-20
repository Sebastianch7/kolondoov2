import React, { useState, useEffect } from "react";
import HeaderLead from "../../Components/Header/HeaderLead";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Footer from "../../Components/Footer/Footer";
import TarjetaTarifaLeadEnergia from "../../Components/Tarjeta/TarjetaTarifaLeadEnergia";
import TarjetaTarifa from "../../Components/Tarjeta/TarjetaTarifa";
import { getDetailOffer, getExtraOffer } from "../../services/ApiServices";
import TarjetaTarifaLead from "../../Components/Tarjeta/TarjetaTarifaLead";
import Header from "../../Components/Header/Header";
import TarjetaTarifaLeadEnergiaGas from "../../Components/Tarjeta/TarjetaTarifaLeadEnergiaGas";
import TarjetaTarifaLeadGas from "../../Components/Tarjeta/TarjetaTarifaLeadGas";
import TarjetaTarifaLeadAutoconsumo from "../../Components/Tarjeta/TarjetaTarifaLeadAutoconsumo";
import TarjetaTarifaLeadPrestamo from "../../Components/Tarjeta/TarjetaTarifaLeadPrestamo";

export default function ThankPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [extraOffer, setExtraOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);
  const [offerLooking, setOfferLooking] = useState(null);

  useEffect(() => {
    let locations = location.pathname.split("/");
    let idSplit = locations[5].split("-");
    setIdPlan(idSplit[idSplit.length - 1]);
    setOfferLooking(locations[3]);
    setBreadUrl(locations.join("/"));
    console.log(breadUrl);
  }, [location.pathname,breadUrl]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        if (idPlan !== null) {
          const response = await getDetailOffer(offerLooking, idPlan);
          setInfoOffer(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener detalle de oferta:", error);
      }
    };

    fetchTariffs();
  }, [idPlan, offerLooking]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        if (idPlan !== null) {
          const response = await getExtraOffer(offerLooking);
          setExtraOffer(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, [idPlan, offerLooking]);

  const renderTarjeta = () => {
    const tarjetaMap = {
      "comparador-movil": (
        <TarjetaTarifaLead data={infoOffer} service={offerLooking} thanks />
      ),
      "comparador-fibra": (
        <TarjetaTarifaLead data={infoOffer} service={offerLooking} thanks />
      ),
      "comparador-tarifas-fibra-y-movil": (
        <TarjetaTarifaLead data={infoOffer} service={offerLooking} thanks />
      ),
      "comparador-tarifas-luz": (
        <TarjetaTarifaLeadEnergia
          data={infoOffer}
          service={offerLooking}
          thanks
        />
      ),
      "comparador-tarifas-gas": (
        <TarjetaTarifaLeadGas data={infoOffer} service={offerLooking} thanks />
      ),
      "comparador-tarifas-luz-y-gas": (
        <TarjetaTarifaLeadEnergiaGas
          data={infoOffer}
          service={offerLooking}
          thanks
        />
      ),
      "comparador-finanzas": (
        <TarjetaTarifaLeadPrestamo
          data={infoOffer}
          service={offerLooking}
          thanks
        />
      ),
      "comparador-tarifas-seguros-salud": (
        <TarjetaTarifaLeadPrestamo
          data={infoOffer}
          service={offerLooking}
          thanks
        />
      ),
      "comparador-tarifas-autoconsumo": (
        <TarjetaTarifaLeadAutoconsumo data={infoOffer} service={offerLooking} />
      ),
    };
    return tarjetaMap[offerLooking?.toLowerCase()] || null;
  };

  return (
    <>
      <Header />
      <HeaderLead logo={infoOffer?.logo} />
      <Container fluid className="bg-primary p-5">
        <Row className="justify-content-md-center d-flex flex-column flex-md-row">
          <Col xs={12} className="text-center text-white">
            <h3>Muchas gracias por dejarnos tus datos.</h3>
          </Col>
          <Col
            xs={12}
            xxl={6}
            md={8}
            className="my-2"
            style={isMobile ? { order: 2 } : { order: 1 }}
          >
            {isLoading ? <Spinner animation="border" /> : renderTarjeta()}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center mb-5">
          <Col xs={12}>
            <h6 className="mt-5 mb-3 text-center">
              Aquí tienes otras ofertas que te podrían interesar:
            </h6>
          </Col>
          <Col md={9}>
            {extraOffer.length > 0 &&
              extraOffer.map((item, index) => {
                switch (offerLooking?.toLowerCase()) {
                  case "comparador-movil":
                  case "comparador-fibra":
                  case "comparador-tarifas-fibra-y-movil":
                  case "comparador-fibra-movil-tv":
                    return <TarjetaTarifa key={index} data={item} />;
                  case "comparador-tarifas-luz":
                    return (
                      <TarjetaTarifaLeadEnergia
                        key={index}
                        data={item}
                        type={"luz"}
                        TarifaCard
                      />
                    );
                  case "comparador-tarifas-gas":
                    return (
                      <TarjetaTarifaLeadGas
                        key={index}
                        data={item}
                        type={"gas"}
                        TarifaCard
                      />
                    );
                  case "comparador-tarifas-autoconsumo":
                    return (
                      <TarjetaTarifaLeadAutoconsumo
                        key={index}
                        data={item}
                        TarifaCard
                      />
                    );
                  default:
                    return null;
                }
              })}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
