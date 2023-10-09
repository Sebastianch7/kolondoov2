import React, { useState, useEffect } from 'react';
import HeaderLead from '../Components/Header/HeaderLead';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';
import axios from 'axios';
import Load from '../Components/Utils/Load';
import Title from '../Components/Text/Title';
import TarjetaTarifaLeadTelefonia from '../Components/Tarjeta/TarjetaTarifaLeadTelefonia';
import { isMobile } from 'react-device-detect';
import Footer from '../Components/Footer/Footer';
import FormLead from '../Components/Forms/FormLead';
import TarjetaTarifaLeadEnergia from '../Components/Tarjeta/TarjetaTarifaLeadEnergia';
import TarjetaTarifa from '../Components/Tarjeta/TarjetaTarifa'

export default function ThankPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [extraOffer, setExtraOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);

  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const [offerLooking, setOfferLooking] = useState(null)

  useEffect(() => {
    let locations = location.pathname.split('/');
    setIdPlan(locations[4]);
    locations.pop();
    setOfferLooking(locations[3])
    setBreadUrl(locations.join('/'));
  }, [location.pathname]);

  useEffect(() => {
    setIsLoading(true);
    if (idPlan !== null) {
      axios.get(`http://127.0.0.1:8000/api/getDetailOffer${offerLooking}/${idPlan}`)
        .then((response) => {
          setInfoOffer(response.data[0]);
          setIsLoading(false);
        })
        .catch((error) => {
          // Manejar la excepción aquí, por ejemplo, mostrando un mensaje de error
          console.error("Error al obtener detalle de oferta:", error);
          setIsLoading(false);
        });
    }
  }, [idPlan]);

  useEffect(() => {
    setIsLoading(true);
    if (idPlan !== null) {
      axios.get(`http://127.0.0.1:8000/api/getExtraOffer${offerLooking}`)
        .then((response) => {
          setExtraOffer(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          // Manejar la excepción aquí, por ejemplo, mostrando un mensaje de error
          console.error("Error al obtener oferta extra:", error);
          setIsLoading(false);
        });
    }
  }, [idPlan]);


  return (
    <>
      <HeaderLead logo={infoOffer?.logo} />
      <Container fluid className='bg-primary p-5'>
        <Row className="justify-content-md-center d-flex flex-column flex-md-row">
          <Col xs={12} className='text-center text-white'>
            <h3>Muchas gracias por dejarnos tus datos.</h3>
            <p>En breve un agente contactará contigo.</p>
          </Col>
          <Col xs={12} xll={5} md={8} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
            {(() => {
              switch (offerLooking?.toLowerCase()) {
                case 'movil':
                  return <TarjetaTarifaLeadTelefonia key={0} data={infoOffer} service={offerLooking} thanks />;
                case 'luz':
                  return <TarjetaTarifaLeadEnergia data={infoOffer} />;
                default:
                  return null;
              }
            })()}
          </Col>

        </Row>
      </Container>
      <Container>
        <Row className='justify-content-md-center mb-5'>
          <Col xs={12}>
            <h6 className='mt-5 mb-3'>Aquí tienes otras ofertas que te podrían interesar:</h6>
          </Col>
          <Col md={9}>
            {extraOffer.length > 0 &&
              extraOffer.map((item, index) => {
                switch (offerLooking?.toLowerCase()) {
                  case 'movil':
                    return <TarjetaTarifa key={index} data={item} />;
                  case 'luz':
                    return <TarjetaTarifaLeadEnergia key={index} data={item} TarifaCard/>;
                  default:
                    return null;
                }
              })
            }
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}