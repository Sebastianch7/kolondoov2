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
import MetaData from '../Components/Header/SeoMetadata';

export default function Lead() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const [title, setTitle] = useState(null);

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


    fetchTariffs();
  }, [idPlan]);

  function replaceSubcategory(data) {
    switch (data?.toLowerCase()) {
      case 'comparador-movil':
        return 'móvil';
        break;
    }
  }

  return (

    !isLoading ? (
      <>
        <MetaData titulo={''} descripcion={''} />
        <HeaderLead logo={infoOffer?.logo} />
        <BreadCrumb url={breadUrl} />
        <Container className='mb-5'>
          <Row className="justify-content-md-center d-flex flex-column flex-md-row">

            <Title title={`${infoOffer?.nombre} ofertas - ${title?.replaceAll(',', ' ')}`} />

            <Col xs={12}>
              {!isMobile && <p className='font-09'>¡Experimenta la velocidad sin límites de {infoOffer.nombre} con el servicio de {replaceSubcategory(offerLooking)} con sus {title?.replaceAll(',', ' ')}! Conéctate a la potencia de la rapidez y mantén la libertad de la comunicación en tus manos con el servicio móvil de {infoOffer.nombre} ¡Haz que tu conexión sea tan rápida como tus sueños!</p>}
            </Col>
            <Col xs={12} md={7} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
              <TarjetaTarifaLead key={0} data={infoOffer} service={offerLooking} />
            </Col>
            <Col xs={12} md={5} className='my-2' style={isMobile ? { order: 1 } : { order: 2 }}>
              <FormLead data={infoOffer} idPlan={idPlan} landing={offerLooking} urlOffers={location.pathname} company={infoOffer.operadora}></FormLead>
            </Col>
            <Col xs={12} md={12} className='my-2' style={{ order: 3 }}>
              {isMobile && <p className='font-09'>¡Experimenta la velocidad sin límites de {infoOffer.nombre} con el servicio de {replaceSubcategory(offerLooking)} con sus {title?.replaceAll(',', ' ')}! Conéctate a la potencia de la rapidez y mantén la libertad de la comunicación en tus manos con el servicio móvil de {infoOffer.nombre} ¡Haz que tu conexión sea tan rápida como tus sueños!</p>}
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
