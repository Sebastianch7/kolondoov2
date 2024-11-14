import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import HeaderLead from '../../Components/Header/HeaderLead';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Load from '../../Components/Utils/Load';
import Title from '../../Components/Text/Title';
import Footer from '../../Components/Footer/Footer';
import FormLead from '../../Components/Forms/FormLead';
import MetaData from '../../Components/Header/SeoMetadata';
import TarjetaTarifaLead from '../../Components/Tarjeta/TarjetaTarifaLead';
import TarjetaTarifaLeadEnergia from '../../Components/Tarjeta/TarjetaTarifaLeadEnergia';
import TarjetaTarifaLeadGas from '../../Components/Tarjeta/TarjetaTarifaLeadGas';
import TarjetaTarifaLeadEnergiaGas from '../../Components/Tarjeta/TarjetaTarifaLeadEnergiaGas';
import TarjetaTarifaLeadPrestamo from '../../Components/Tarjeta/TarjetaTarifaLeadPrestamo';
import TarjetaOfertaDirecta from '../../Components/Tarjeta/TarjetaOfertaDirecta';
import { getDetailOffer } from '../../services/ApiServices';

export default function Lead() {
  const { id } = useParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const [title, setTitle] = useState(null);
  const [breadUrl, setBreadUrl] = useState(null);
  const [offerLooking, setOfferLooking] = useState(null);

  useEffect(() => {
    const splitInfo = id.split('-');
    const locations = location.pathname.split('/');
    locations.pop();

    setIdPlan(splitInfo[splitInfo.length - 1]);
    setOfferLooking(locations[3]);
    setBreadUrl(locations.join('/'));
  }, [location.pathname, id]);

  useEffect(() => {
    const fetchTariffs = async () => {
      if (idPlan) {
        try {
          const response = await getDetailOffer(offerLooking, idPlan);
          const titleOriginal = response.slug_tarifa.split('-').slice(0, -1).join(' ');

          setTitle(titleOriginal);
          setInfoOffer(response);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al cargar la informacion:", error);
        }
      }
    };
    fetchTariffs();
  }, [idPlan, offerLooking]);

  const generateSeoText = (template, defaultText) => {
    const formattedTitle = title?.replaceAll(',', ' ') || '';
    const offerName = infoOffer.nombre || '';
    return template.replaceAll('{title}', formattedTitle).replaceAll('{name}', offerName) || defaultText;
  };

  const textoLanding = () => {
    const templates = {
      'comparador-movil': `¡Experimenta la velocidad sin límites de {name} con el servicio de móvil con sus {title}!`,
      'comparador-fibra': `¡Experimenta la velocidad sin límites de {name} con el servicio de móvil y fibra con sus {title}!`,
      'comparador-tarifas-fibra-y-movil': `Conéctate al futuro con nuestra oferta imparable: {title}.`,
      'comparador-tarifas-luz': `Ilumina tu hogar con el servicio de energía de {name}.`,
      'comparador-tarifas-gas': `Descubre la potencia del servicio de gas de {name}.`,
      'comparador-tarifas-luz-y-gas': `Obtén confort y ahorro con la oferta integral de luz y gas.`,
      default: ''
    };
    return generateSeoText(templates[offerLooking?.toLowerCase()] || templates.default, '');
  };

  const descripcionLanding = () => {
    const templates = {
      'comparador-movil': `Explora las ofertas móvil con el servicio de {name} de {title}.`,
      'comparador-fibra': `Explora las ofertas fibra con el servicio de {name} de {title}.`,
      'comparador-tarifas-fibra-y-movil': `Explora las ofertas fibra y móvil con el servicio de {name} {title}.`,
      'comparador-tarifas-luz': `Enciende tu vida con el servicio de luz de {name}.`,
      'comparador-tarifas-gas': `Transforma tu hogar con el servicio de gas de {name}.`,
      'comparador-tarifas-luz-y-gas': `Optimiza tu hogar con la oferta integral de luz y gas de {name}.`,
      default: ''
    };
    return generateSeoText(templates[offerLooking?.toLowerCase()] || templates.default, '');
  };

  const renderTarjeta = () => {
    const tarjetaMap = {
      'comparador-movil': <TarjetaTarifaLead data={infoOffer} service={offerLooking} />,
      'comparador-fibra': <TarjetaTarifaLead data={infoOffer} service={offerLooking} />,
      'comparador-tarifas-fibra-y-movil': <TarjetaTarifaLead data={infoOffer} service={offerLooking} />,
      'comparador-tarifas-luz': <TarjetaTarifaLeadEnergia data={infoOffer} service={offerLooking} />,
      'comparador-tarifas-gas': <TarjetaTarifaLeadGas data={infoOffer} service={offerLooking} />,
      'comparador-tarifas-luz-y-gas': <TarjetaTarifaLeadEnergiaGas data={infoOffer} service={offerLooking} />,
      'comparador-finanzas': <TarjetaTarifaLeadPrestamo data={infoOffer} service={offerLooking} />,
    };
    return tarjetaMap[offerLooking?.toLowerCase()] || null;
  };

  const renderLegalInfo = () => (
    infoOffer.informacionLegal && (
      <Row>
        <Col>
          <p className='informacionLegal mt-3' dangerouslySetInnerHTML={{ __html: infoOffer.informacionLegal }} />
        </Col>
      </Row>
    )
  );

  return (
    !isLoading ? (
      <>
        <MetaData
          titulo={`Ofertas ${offerLooking === 'comparador-finanzas' ? `${infoOffer.nombre}: ${title}` : `${infoOffer.funcion}: ${infoOffer.nombre}`} | Vuskoo`}
          descripcion={descripcionLanding()}
        />
        <HeaderLead logo={infoOffer?.logo} />
        <BreadCrumb lead={true} />

        <Container className='mb-5'>
          <Row className="justify-content-md-center d-flex flex-column flex-md-row">
            <Title title={`${infoOffer?.nombre} oferta ${infoOffer.nombre_tarifa || ''}`} />
            {!isMobile && <Col xs={12}><p className='font-09 textoOpcional' dangerouslySetInnerHTML={{ __html: infoOffer.textoAdicional }} /></Col>}
            
            <Row className='d-flex justify-content-center align-items-center'>
              <Col xs={12} md={7} style={{ order: isMobile ? 2 : 1 }} className='h-100'>
                {renderTarjeta()}
                {offerLooking?.toLowerCase().includes('luz') && (
                  <div className="tarjeta-footer-small mt-2 col">Períodos: <b>Valle</b> 00:00h-08:00h // <b>Llano</b> 8-10h. 14-18h y 22-00h // <b>Punta</b> 10-14h y 18-22h*</div>
                )}
              </Col>

              <Col xs={12} md={5} style={{ order: isMobile ? 1 : 2 }} className='h-100'>
                {offerLooking !== 'comparador-finanzas' ? (
                  <FormLead data={infoOffer} idPlan={idPlan} landing={offerLooking} urlOffers={location.pathname} company={infoOffer.operadora} />
                ) : (
                  <TarjetaOfertaDirecta data={infoOffer} />
                )}
              </Col>
            </Row>

            
              {isMobile && <Col xs={12} md={12} className='mt-2' style={{ order: 3 }}><p className='font-09' dangerouslySetInnerHTML={{ __html: infoOffer.textoAdicional }} /></Col>}
          </Row>

          {renderLegalInfo()}
        </Container>

        <Footer />
      </>
    ) : (
      <Load />
    )
  );
}
