import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import BannerImageFull from '../Components/Banner/BannerImageFull'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import Footer from '../Components/Footer/Footer';
import TarjetaRaizEnergia from '../Content/TarjetaRaizEnergia.json'
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../Components/Acordion/AcordionItem';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import InterSection from '../Components/Utils/InterSection';
import ContenedorDescipcionTarifa from '../Components/Contenedor/ContenedorDescipcionTarifa'
import TarjetaTarifa from '../Components/Tarjeta/TarjetaTarifa'
import { getExtraOffer } from '../services/ApiServices';
import ButtonPrimary from '../Components/Button/ButtonPrimary';
import ContenedorComparadorLogos from '../Components/Contenedor/ContenedorComparadorLogos';
import ContenedorPreguntasFrecuentes from '../Components/Contenedor/ContenedorPreguntasFrecuentes';
import { Card, CardGroup } from 'react-bootstrap';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import { useTranslation } from 'react-i18next';
import ContenedorPorQueComparar from '../Components/Contenedor/ContenedorPorQueComparar';
import preguntasFrecuentes from '../Content/PreguntasFrecuentesEnergia.json'

const dataPorQueComparar = [
  {
    logo: "/img/icons/factura.svg",
    content: "¿Has oído hablar de las <b>tarifas de electricidad</b> a precio de coste o indexado? ¿Y las de mercado libre? ¿Sabes en qué consiste la tarifa plana de luz? <b>Desde Vuskoo te recomendamos que compares las tarifas de gas y electricidad antes de formalizar cualquier contratación,</b> y que estudies todos los tipos de tarifas que existen a día de hoy hasta saber cuál es la más acorde a tus hábitos de consumo y también a tu presupuesto."
  },
  {
    logo: "/img/icons/obtener-dinero.svg",
    content: "Por razones obvias, <b>las tarifas de luz y de gas baratas</b> son las más buscadas, pero…¡Ojo! <b>no te dejes llevar por un precio bajo y pases por alto aspectos también esenciales.</b> Sin ir más lejos, para saber qué potencia es la adecuada para tu vivienda, debes estudiar las características de esta.Con tantos tipos de tarifas y tantísimas comercializadoras compitiendo en el mercado, te puede resultar complicado el proceso de buscar y saber elegir bien la tarifa de luz o de gas -y el precio- que necesitas para tu hogar."
  },
  {
    logo: "/img/icons/operador.svg",
    content: "<b>Algo muy positivo en los comparadores online como Vuskoo, es que te asesoramos de forma gratuita y personalizada, resolviendo tus dudas y aconsejándote siempre lo más adecuado para ti,</b> desde la empatía y la transparencia. ¿Ya te hemos dejado claro lo importante que es realizar una comparativa antes de contratar? ;)"
  },
]

const data = [
  {
    title: 'Potencia',
    text: 'Puede ocurrir que tengas una potencia contratada superior a la que necesitas, y que eso encarezca tu factura. Por tanto, <b>es tu decisión elegir una u otra potencia</b> según el tamaño de tu vivienda, las personas que habitéis en ella y el número de electrodomésticos que tengas en el hogar, así como el uso que vayas a darle a los mismos. '
  },
  {
    title: 'Prestaciones',
    text: 'En función de cuáles sean los horarios en los que más uso haces de la electricidad, <b>deberás decantarte por una tarifa con el mismo precio durante todo el día o de discriminación horaria.</b> Si pasas mucho tiempo en casa y puedes concentrar tu consumo en el período valle, te recomendamos que optes por la segunda. '
  },
  {
    title: 'Tarifas',
    text: 'Muchas tarifas de luz y de gas traen consigo un <b>plan extra de mantenimiento y/o protección del hogar,</b> que cubre servicios como la revisión de la caldera, arreglo de averías eléctricas, reparación de electrodomésticos, etc. Valorar la posibilidad de añadirlo a tu tarifa puede ser una buena decisión. '
  },
  {
    title: 'Trámites',
    text: '<b>Compara las tarifas de luz y/o gas presentes en el mercado actual,</b> para que en unos minutos hayas podido contrastar las prestaciones y el precio que ofrece cada una y así poder elegir mejor la que será la tarifa perfecta para ti. <b>¡Desde aquí mismo puedes hacerlo de forma gratuita!</b>'
  },
];

export default function RaizEnergia() {
  const [extraOffer, setExtraOffer] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await getExtraOffer('luzygas')
        setExtraOffer(response);
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, []);
  return (
    <>
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/bannerRaizEnergia.png'}
        title={t('title-baner-comparador-de-energia')}
        text1='<ul class="listaAlternativa"><li><p>Comparamos las <b>tarifas de luz y gas</b> del mercado para que ahorres en tus facturas.</p></li><li><p>Te dotamos de <b>herramientas y de información</b> útil basada en la claridad y transparencia.</p></li><li><p>Una de nuestras misiones es la de <b>ayudarte a simplificar tus decisiones</b> sobre el consumo de energía.</p></li></ul>'
        btnLeft
        buttons={[
          {
            title: '¡Empieza a ahorrar!',
            url: '/energia/comparador-tarifas-luz'
          }
        ]}
      />
      <Container>
        <TitleSection
          center
          title={t('title-baner-comparador-de-energia')}
          titleAlt={'Energía'}
          text1={t('es-raiz-energia-content-description')}
          text2={t('es-raiz-energia-content-description-2')}
          left
        />
        <ContenedorTarjeta
          cols={8}
        >
          {!isMobile ?
            TarjetaRaizEnergia?.map((item, index) => {
              return <TarjetaProducto key={index} data={item} />
            })
            :
            TarjetaRaizEnergia?.map((item, index) => {
              return <AcordionItem key={index} data={item} />
            })
          }
        </ContenedorTarjeta>
        <InterSection></InterSection>
        <TitleSection
          center
          title={'Las mejores ofertas'}
          titleAlt={'de Luz y Gas'}
        />
        <ContenedorDescipcionTarifa data={data} />
        <Row className='justify-content-md-center'>
          <Col xs={12}>
            <h6 className='mt-5 mb-3 text-center'>Mejores ofertas de Luz y Gas que hemos encontrado en el mercado:</h6>
          </Col>
          <Col md={9}>
            {extraOffer.length > 0 &&
              extraOffer.map((item, index) => {
                return <TarjetaTarifa key={index} data={item} />
              })
            }
          </Col>
          <Col xs={12} md={9}>
            <p className='font-09'>*Todos los precios incluyen el IVA.**Los precios están estimados en base a un consumo anual de 3.600kWh (300kWh al mes).***Los precios no incluyen costes derivados de la compensación del tope del gas.</p>
          </Col>
          <Col md={12} className='mx-auto text-center mt-md-4'>
            <ButtonPrimary text={'Ver más ofertas'} url={'/energia/comparador-tarifas-luz-y-gas'} />
          </Col>
        </Row>
      </Container>
      <ContenedorTarjetaBlog />
      <ContenedorComparadorLogos
        subtitle={'Hoy en día cada vez se vuelve más <b>importante conocer cuáles son las principales compañías energéticas</b> que operan en el mercado de luz y gas natural, ya que en función de ello podrás escoger una tarifa u otra, o incluso el tipo de trámite que puedes realizar.</p><p> Te lo ponemos fácil, ya que <b>reunimos las compañías en un solo lugar</b> para evitarte el mal rato de tener que visitar una a una las páginas web de cada una de ellas. <b>¡Tu compañía ideal está a tan solo un clic!</b>'}
      />
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/preguntas-raiz-energia.png'}
      />
      <ContenedorPorQueComparar title={"¿Por qué comparar"} titleAlt={"tarifas de Luz y Gas"} titleThird={"es tan importante?"} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcion />
      <Footer></Footer>
    </>

  )
}
