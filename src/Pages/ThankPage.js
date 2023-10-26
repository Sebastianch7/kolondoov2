import React, { useState, useEffect } from 'react';
import HeaderLead from '../Components/Header/HeaderLead';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TarjetaTarifaLeadTelefonia from '../Components/Tarjeta/TarjetaTarifaLeadTelefonia';
import { isMobile } from 'react-device-detect';
import Footer from '../Components/Footer/Footer';
import TarjetaTarifaLeadEnergia from '../Components/Tarjeta/TarjetaTarifaLeadEnergia';
import TarjetaTarifa from '../Components/Tarjeta/TarjetaTarifa'
import { getDetailOffer, getExtraOffer } from '../services/ApiServices'
import Header from '../Components/Header/Header';
import TarjetaTarifaLead from '../Components/Tarjeta/TarjetaTarifaLead';

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
    const fetchTariffs = async () => {
      try {
        if (idPlan !== null) {
          const response = await getDetailOffer(offerLooking, idPlan)
          setInfoOffer(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener detalle de oferta:", error);
      }
    };

    fetchTariffs();
  }, [idPlan]);
  
  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        if (idPlan !== null) {
          const response = await getExtraOffer(offerLooking)
          setExtraOffer(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, [idPlan]);

  return (
    <>
    {/* <Header></Header> */}
      <HeaderLead logo={infoOffer?.logo} />
      <Container fluid className='bg-primary p-5'>
        <Row className="justify-content-md-center d-flex flex-column flex-md-row">
          <Col xs={12} className='text-center text-white'>
            <h3>Muchas gracias por dejarnos tus datos.</h3>
            <p>En breve un agente contactará contigo.</p>
          </Col>
          <Col xs={12} xxl={5} md={8} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
             <TarjetaTarifaLead key={0} data={infoOffer} service={offerLooking} thanks />;
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
                  case 'luz':
                    return <TarjetaTarifaLeadEnergia key={index} data={item} TarifaCard/>;
                    case 'gas':
                    return <TarjetaTarifa key={index} data={item} type={'gas'} />
                    case 'luz_y_gas':
                    return <TarjetaTarifa key={index} data={item} type={'gas'} />
                  default:
                    return <TarjetaTarifa key={index} data={item} />
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