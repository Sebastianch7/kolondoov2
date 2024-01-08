import React, { useState, useEffect } from 'react';
import HeaderLead from '../Components/Header/HeaderLead';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';
import Load from '../Components/Utils/Load';
import Title from '../Components/Text/Title';
import { isMobile } from 'react-device-detect';
import Footer from '../Components/Footer/Footer';
import FormLead from '../Components/Forms/FormLead';
import { getDetailOffer } from '../services/ApiServices'
import TarjetaTarifaLead from '../Components/Tarjeta/TarjetaTarifaLead';

export default function Lead() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const [service, setService] = useState(null);

  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const [offerLooking, setOfferLooking] = useState(null)

  useEffect(() => {
    let locations = location.pathname.split('/');
    let idSplit = locations[4].split('-');
    setIdPlan(idSplit[idSplit.length - 1]);
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
        console.error("Error al enviar el lead:", error);
      }
    };

    fetchTariffs();
  }, [idPlan]);
  
  return (
    !isLoading ? (
      <>
        <HeaderLead logo={infoOffer?.logo} />
        <BreadCrumb url={breadUrl} />
        <Container className='mb-5'>
          <Row className="justify-content-md-center d-flex flex-column flex-md-row">
            <div>
              <Title title={`Oferta de ${infoOffer?.nombre}`} />
            </div>
            <Col xs={12} md={7} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
              <TarjetaTarifaLead key={0} data={infoOffer} service={offerLooking} />
            </Col>
            <Col xs={12} md={5} className='my-2' style={isMobile ? { order: 1 } : { order: 2 }}>
              <FormLead idPlan={idPlan} landing={offerLooking} urlOffers={location.pathname} company={infoOffer.operadora}></FormLead>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    ) : (
      <Load />
    )
  );
}
