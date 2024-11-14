import React, { useState, useEffect } from 'react';
import HeaderLead from '../../Components/Header/HeaderLead';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Load from '../../Components/Utils/Load';
import Title from '../../Components/Text/Title';
import { isMobile } from 'react-device-detect';
import Footer from '../../Components/Footer/Footer';
import FormLead from '../../Components/Forms/FormLead';
import { getDetailOffer } from '../../services/ApiServices'
import TarjetaTarifaLead from '../../Components/Tarjeta/TarjetaTarifaLead';
import MetaData from '../../Components/Header/SeoMetadata';
import TarjetaTarifaLeadEnergia from '../../Components/Tarjeta/TarjetaTarifaLeadEnergia';
import TarjetaTarifaLeadGas from '../../Components/Tarjeta/TarjetaTarifaLeadGas';
import TarjetaTarifaLeadEnergiaGas from '../../Components/Tarjeta/TarjetaTarifaLeadEnergiaGas';
import { useParams } from 'react-router-dom';
import TarjetaPrestamo from '../../Components/Tarjeta/TarjetaPrestamo';
import TarjetaTarifaLeadPrestamo from '../../Components/Tarjeta/TarjetaTarifaLeadPrestamo';

export default function LeadFinanzas() {
  const information = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const [title, setTitle] = useState(null);
  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const [offerLooking, setOfferLooking] = useState(null)

  const splitInformation = information['id'].split('-');

  useEffect(() => {
    let locations = location.pathname.split('/');
    setIdPlan(splitInformation[splitInformation.length - 1])
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


  return (
    !isLoading ? (
      <>
        <MetaData titulo={`Ofertas ${infoOffer.funcion}: ${title?.replaceAll(',', ' ')} - ${infoOffer.nombre} | Vuskoo`} />
        <HeaderLead logo={infoOffer?.logo} />
        <BreadCrumb lead={true} />
        <Container className='mb-5'>
          <Row className="justify-content-md-center d-flex flex-column flex-md-row">
            <Title title={`${infoOffer?.nombre} ofertas - ${infoOffer.nombre_tarifa}`} />
            <Col xs={12}>
              {!isMobile && <p
                className='font-09 textoOpcional'
                dangerouslySetInnerHTML={{ __html: infoOffer.textoAdicional }}
              />}
            </Col>
            <Col xs={12} md={7} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
                {offerLooking?.toLowerCase() === 'comparador-finanzas'
                && <TarjetaTarifaLeadPrestamo key={0} data={infoOffer} service={offerLooking} />}

            </Col>
            <Col xs={12} md={5} className='my-2' style={isMobile ? { order: 1 } : { order: 2 }}>
              <FormLead data={infoOffer} idPlan={idPlan} landing={offerLooking} urlOffers={location.pathname} company={infoOffer.operadora}></FormLead>
            </Col>
            <Col xs={12} md={12} className='mt-2' style={{ order: 3 }}>
              {/* {isMobile && <p className='font-09'>{textoLanding()}</p>} */}
              {isMobile && <p
                className='font-09'
                dangerouslySetInnerHTML={{ __html: infoOffer.textoAdicional }}
              />}
            </Col>
          </Row>
          {(infoOffer.informacionLegal != null && infoOffer.informacionLegal != '') && <Row>
            <Col>
            <p
                className='informacionLegal mt-3'
                dangerouslySetInnerHTML={{ __html: infoOffer.informacionLegal }}
              />
            </Col>
          </Row>}
        </Container>
        <Footer />
      </>
    ) : (
      <Load />
    )
  );

}
