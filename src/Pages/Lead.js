import React, { useState, useEffect } from 'react';
import HeaderLead from '../Components/Header/HeaderLead';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';
import axios from 'axios';
import Load from '../Components/Utils/Load';
import Title from '../Components/Text/Title';
import TarjetaTarifaLead from '../Components/Tarjeta/TarjetaTarifaLead';
import { isMobile } from 'react-device-detect';
import Footer from '../Components/Footer/Footer';
import FormLead from '../Components/Forms/FormLead';

export default function Lead() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);

  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const[offerLooking,setOfferLooking] = useState(null)

  const [textButton, setTextButton] = useState('button');

  const subscripcion = (e) => {
    e.preventDefault();
    setTextButton('Suscripción exitosa!');
  };

  useEffect(() => {
    let locations = location.pathname.split('/');
    setIdPlan(locations[3]);
    locations.pop();
    setOfferLooking(locations[2])
    console.log(locations[2])
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
    !isLoading ? (
      <>
        <HeaderLead logo={infoOffer?.logo} />
        <BreadCrumb url={breadUrl} />
        <Container className='mb-5'>
          <Row className="justify-content-md-center d-flex flex-column flex-md-row">
            <div className=''>
              <Title title={`Oferta de ${infoOffer?.nombre}`} />
            </div>
            <Col xs={12} md={7} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
              <TarjetaTarifaLead key={0} data={infoOffer} service={offerLooking}/>
            </Col>
            <Col xs={12} md={5} className='my-2' style={isMobile ? { order: 1 } : { order: 2 }}>
              <FormLead idPlan={idPlan} landing={breadUrl}></FormLead>
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
