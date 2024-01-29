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
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const [title, setTitle] = useState(null);
  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const [offerLooking, setOfferLooking] = useState(null)

  let descriptionSeo, titleSeo;

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

  function textoLanding() {
    switch (offerLooking?.toLowerCase()) {
      case 'comparador-movil':
        return titleSeo = `¡Experimenta la velocidad sin límites de ${infoOffer.nombre} con el servicio de móvil con sus ${title?.replaceAll(',', ' ')}! Conéctate a la potencia de la rapidez y mantén la libertad de la comunicación en tus manos con el servicio móvil de ${infoOffer.nombre} ¡Haz que tu conexión sea tan rápida como tus sueños!`;
      case 'comparador-fibra':
        return titleSeo = `¡Experimenta la velocidad sin límites de ${infoOffer.nombre} con el servicio de móvil y fibra con sus ${title?.replaceAll(',', ' ')}! Conéctate a la potencia de la rapidez y mantén la libertad de la comunicación en tus manos con el servicio móvil de ${infoOffer.nombre} ¡Haz que tu conexión sea tan rápida como tus sueños!`;
      case 'comparador-tarifas-fibra-y-movil':
        return titleSeo  = `Conéctate al futuro con nuestra oferta imparable: ${title?.replaceAll(',', ' ')}. Navega a la velocidad de ${infoOffer.nombre} y mantén tu movilidad con una conexión confiable en tus manos. Descubre la libertad de estar siempre conectado. ¡Haz de cada experiencia digital algo extraordinario con nuestra combinación perfecta de Fibra y Móvil!`;
        //return titleSeo = `¡Experimenta la velocidad sin límites de ${infoOffer.nombre} con el servicio de móvil y fibra con sus ${title?.replaceAll(',', ' ')}! Conéctate a la potencia de la rapidez y mantén la libertad de la comunicación en tus manos con el servicio móvil de ${infoOffer.nombre} ¡Haz que tu conexión sea tan rápida como tus sueños!`;
      case 'comparador-fibra-movil-tv':
        return titleSeo = `¡Experimenta la velocidad sin límites de ${infoOffer.nombre} con el servicio móvil, fibra y TV con sus ${title?.replaceAll(',', ' ')}! Conéctate a la potencia de la rapidez y disfruta de un mundo digital sin interrupciones. Conéctate a la velocidad y disfruta de un mundo de entretenimiento en tu hogar, donde la rapidez y la diversión se encuentran en cada pantalla.`;
      case 'comparador-tarifas-luz':
        return titleSeo = `Ilumina tu hogar con el servicio de energía de ${infoOffer.nombre}. Descubre la eficiencia y confiabilidad en cada rincón con las ofertas de luz. ¡Haz que tu espacio resplandezca con la luminosidad de ${title?.replaceAll(',', ' ')}, donde la comodidad y el ahorro se encuentran en cada interruptor!`;
      case 'comparador-tarifas-gas':
        return titleSeo = `¡Haz que tu hogar brille con la calidez que merece! Descubre la potencia del servicio de gas de ${infoOffer.nombre}, la elección perfecta para cocinar y mantener tu espacio acogedor. Conéctate al ahorro y la eficiencia energética de la ${title?.replaceAll(',', ' ')}. ¡Haz de cada día en casa una experiencia cálida y reconfortante con el servicio de gas de ${infoOffer.nombre} de alta calidad!`;
      case 'comparador-tarifas-luz-y-gas':
        return titleSeo = `Obtén confort y ahorro con la oferta integral de luz y gas. Descubre la perfecta combinación entre eficiencia y comodidad y ¡Haz que tu vida brille y se mantenga cálida con el servicio ${title?.replaceAll(',', ' ')} de ${infoOffer.nombre}, donde la calidad y el ahorro van de la mano!`;
      default:
        return titleSeo = '';
    }
  }

  function descripcionLanding() {
    switch (offerLooking?.toLowerCase()) {
      case 'comparador-movil':
        return descriptionSeo  = `Explora las ofertas móvil con el servicio de ${infoOffer.nombre} de ${title?.replaceAll(',', ' ')}. Navega a la máxima velocidad y mantén la conexión vayas donde vayas.`;
      case 'comparador-fibra':
        return descriptionSeo  = `Explora las ofertas fibra con el servicio de ${infoOffer.nombre} de ${title?.replaceAll(',', ' ')}. Navega a la máxima velocidad y mantén la conexión vaya donde vayas.`;
      case 'comparador-tarifas-fibra-y-movil':
        return descriptionSeo  = `Explora las ofertas fibra y móvil con el servicio de ${infoOffer.nombre} ${title?.replaceAll(',', ' ')}. Navega a la máxima velocidad y mantén la conexión vaya donde vayas.`;
      case 'comparador-fibra-movil-tv':
        return descriptionSeo  = `Explora las ofertas de fibra, móvil y TV con el servicio de ${infoOffer.nombre} ${title?.replaceAll(',', ' ')}. Navega a la máxima velocidad y mantén la conexión vayas donde vayas.`;
      case 'comparador-tarifas-luz':
        return descriptionSeo  = `Enciende tu vida con el servicio de luz de ${infoOffer.nombre}. Descubre la iluminación perfecta para tu hogar con la oferta energética confiable y eficiente de ${title?.replaceAll(',', ' ')}.`;
      case 'comparador-tarifas-gas':
        return descriptionSeo  = `Transforma tu hogar con el servicio de gas de ${infoOffer.nombre}. Descubre la comodidad de cocinar y calentar tu espacio con la potencia de ${title?.replaceAll(',', ' ')}.`;
      case 'comparador-tarifas-luz-y-gas':
        return descriptionSeo  = `Optimiza tu hogar con la oferta integral de luz y gas de ${infoOffer.nombre}. Descubre la eficiencia energética de ${title?.replaceAll(',', ' ')} que ilumina tus espacios y mantiene el calor necesario.`;
      default:
        return descriptionSeo  = '';
    }
  }

  return (
    !isLoading ? (
      <>
        <MetaData titulo={`Ofertas ${infoOffer.funcion}: ${title?.replaceAll(',', ' ')} - ${infoOffer.nombre} | Vuskoo`} descripcion={descripcionLanding()} />
        <HeaderLead logo={infoOffer?.logo} />
        <BreadCrumb lead={true}/>
        <Container className='mb-5'>
          <Row className="justify-content-md-center d-flex flex-column flex-md-row">
            <Title title={`${infoOffer?.nombre} ofertas - ${infoOffer.nombre_tarifa}`} />
            <Col xs={12}>
              {!isMobile && <p className='font-09'>{textoLanding()}</p>}
            </Col>
            <Col xs={12} md={7} className='my-2' style={isMobile ? { order: 2 } : { order: 1 }}>
              <TarjetaTarifaLead key={0} data={infoOffer} service={offerLooking} />
            </Col>
            <Col xs={12} md={5} className='my-2' style={isMobile ? { order: 1 } : { order: 2 }}>
              <FormLead data={infoOffer} idPlan={idPlan} landing={offerLooking} urlOffers={location.pathname} company={infoOffer.operadora}></FormLead>
            </Col>
            <Col xs={12} md={12} className='my-2' style={{ order: 3 }}>
              {isMobile && <p className='font-09'>{textoLanding()}</p>}
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
