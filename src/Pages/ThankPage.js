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

export default function ThankPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);

  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const[offerLooking,setOfferLooking] = useState(null)

  useEffect(() => {
    let locations = location.pathname.split('/');
    console.log(locations)
    setIdPlan(locations[4]);
    locations.pop();
    setOfferLooking(locations[3])
    setBreadUrl(locations.join('/'));
  }, [location.pathname]);

  useEffect(() => {
    setIsLoading(true);
    if (idPlan !== null) {
      axios.get(`http://127.0.0.1:8000/api/getDetailOffer${offerLooking}/${idPlan}`).then((response) => {
        setInfoOffer(response.data[0]);
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
            <Col xs={12} md={7} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
              {offerLooking?.toLowerCase() === 'movil' && <TarjetaTarifaLeadTelefonia key={0} data={infoOffer} service={offerLooking} thanks/>}
              {offerLooking?.toLowerCase() === 'luz' && <TarjetaTarifaLeadEnergia data={infoOffer} />}
            </Col>
          </Row>
        </Container>
        <Container>

        </Container>
        <Footer />
      </>
  );
}