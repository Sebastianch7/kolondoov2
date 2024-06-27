import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import BannerImageFull from '../../Components/Banner/BannerImageFull'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSection from '../../Components/Text/TitleSection'
import Footer from '../../Components/Footer/Footer';
import TarjetaRaizTelefonia from '../../Content/TarjetaRaizTelefoniaCo.json'
import ContenedorTarjeta from '../../Components/Contenedor/ContenedorTarjeta';
import ContenedorTarjetaBlog from '../../Components/Contenedor/ContenedorTarjetaBlog';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../../Components/Acordion/AcordionItem';
import TarjetaProducto from '../../Components/Tarjeta/TarjetaProducto';
import InterSection from '../../Components/Utils/InterSection';
import ContenedorDescipcionTarifa from '../../Components/Contenedor/ContenedorDescipcionTarifa'
import TarjetaTarifa from '../../Components/Tarjeta/TarjetaTarifa'
import { getDetailOffer, getExtraOffer } from '../../services/ApiServices';
import ButtonPrimary from '../../Components/Button/ButtonPrimary';
import ContenedorComparadorLogos from '../../Components/Contenedor/ContenedorComparadorLogos';
import ContenedorPreguntasFrecuentes from '../../Components/Contenedor/ContenedorPreguntasFrecuentes';
import { useTranslation } from 'react-i18next';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import preguntasFrecuentes from '../../Content/PreguntasFrecuentesTelefoniaCo.json'
import ContenedorPorQueComparar from '../../Components/Contenedor/ContenedorPorQueComparar';
import ItemStack from '../../Components/ItemStack';
import MetaData from '../../Components/Header/SeoMetadata';
import FooterCo from '../../Components/Footer/FooterCo';
import FormSuscripcionCo from '../../Components/Forms/FormSuscripcionCo';

const dataPorQueComparar = [
  {
    logo: '/img/icons/www.svg',
    content: '<b>Las Tecnologías de la Información y la Comunicación (TIC) han crecido exponencialmente en los últimos tiempos,</b> hasta el punto de no imaginarnos hoy sin acceso a Internet o sin móvil. Desde que a partir de 1966 comenzase la liberalización del sector, las compañías privadas no han dejado de multiplicarse, y ahora son más de 40, ¡wow!'
  },
  {
    logo: '/img/icons/internet.svg',
    content: 'Pero ¿por qué comparar es tan importante? Ahora, <b>los productos de fibra y móvil suelen presentarse en forma de paquetes,</b> de modo que puedes contratar conjuntamente el Internet de tu hogar con el de tu móvil (o varias líneas móviles). Además, tienes la posibilidad de añadir teléfono fijo, y otras alternativas como escoger TV de pago, con distintos tipos de contenido como <b>cine y series, moda, deportes, historia o cocina, entre otras categorías.</b> Vamos, que se ha convertido en algo que puedes customizar a tu gusto.'
  },
  {
    logo: '/img/icons/cursor.svg',
    content: 'Al haber tantas operadoras y servicios encima de la mesa, elegir bien qué nos interesa puede volverse un poco ‘caótico’. En nuestro <b>Comparador de Telefonía e Internet</b> te lo ponemos muy fácil: <b>tienes toda la información y herramientas necesarias a golpe de ‘clic’</b> para conseguir el precio y el paquete que más se adapte a tus necesidades.'
  }
]

const data = [
  {
    title: 'Servicios',
    text: 'Decida si prefiere contratar los servicios por separado o juntos. Los paquetes de "Internet + Móvil" suelen incluir teléfono fijo y ofrecen ahorros en comparación con contratarlos individualmente.'
  },
  {
    title: 'Prestaciones',
    text: 'Evalúe aspectos como el precio, las prestaciones de cada compañía y la cobertura. Recuerde que la cobertura de fibra óptica y móvil puede variar según la zona.'
  },
  {
    title: 'Tarifas',
    text: 'Verifique si la tarifa que le interesa tiene permanencia. Aunque cada vez hay más operadores sin permanencia, muchos aún la exigen. Por ejemplo, las ofertas de fibra con instalación incluida pueden tener 12 meses de permanencia.'
  },
  {
    title: 'Trámites',
    text: 'Recuerde que solo el titular del contrato puede realizar los trámites de portabilidad o alta. Para cambiar de titular, visite una tienda de la compañía o llame a Atención al Cliente. Este trámite es gratuito.'
  },
];

export default function RaizTelefoniaCo() {
  const [extraOffer, setExtraOffer] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await getExtraOffer('movilyfibra')
        setExtraOffer(response);
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, []);
  return (
    <>
      <MetaData titulo={'Comparador de Internet y Telefonía: descubre las Ofertas | Vuskoo'} descripcion={'Encuentra las mejores ofertas en Internet y telefonía con nuestro comparador. Compara precios, planes, soluciones y beneficios para tomar decisiones informadas'}/>
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/banner-raiz-telefonia-co.png'}
        title={t('title-baner-comparador-de-internet-y-comparador-movil')}
        text1='<ul class="listaAlternativa"><li><p>Encuentra el plan perfecto para hablar y navegar con un solo clic.</p></li><li><p>Compara gratis las mejores ofertas y compañías de telefonía en un solo lugar.</p></li><li><p>Te asesoramos personalmente para que siempre quedes satisfecho con tu elección.</p></li></ul>'
        btnLeft
      /* buttons={[
        {
          title: '¡Empieza a ahorrar!',
          url: '/es/internet-telefonia/comparador-movil'
        }
      ]} */
      />
      <Container className='mt-md-5 mt-xl-1'>
        <TitleSection
          center
          title={'Comparadores de Telefonía Móvil y Fibra'}
          text1={t('es-raiz-telefonia-content-description')}
          text2={t('es-raiz-telefonia-content-description-2')}
          left
        />
        <ContenedorTarjeta>
          {!isMobile ?
            TarjetaRaizTelefonia?.map((item, index) => {
              return <TarjetaProducto key={index} data={item} />
            })
            :
            TarjetaRaizTelefonia?.map((item, index) => {
              return <ItemStack key={index} data={item} />
            })
          }
        </ContenedorTarjeta>
        <InterSection></InterSection>
        <TitleSection
          center
          title={'Las mejores ofertas de'}
          titleAlt={'Internet y Telefonía Móvil'}
          text1={'¿Buscando las mejores ofertas de Internet y Móvil? Aquí le contamos lo más importante para elegir la tarifa ideal:'}
        />
        <ContenedorDescipcionTarifa data={data} />
        {/* <Row className='justify-content-md-center'>
          <Col xs={12}>
            <h6 className='mt-5 mb-3 text-center'>Aquí tienes otras ofertas que te podrían interesar:</h6>
          </Col>
          <Col md={9}>
            {extraOffer.length > 0 &&
              extraOffer.map((item, index) => {
                return <TarjetaTarifa key={index} data={item} />
              })
            }
          </Col>
        </Row> */}
      </Container>
      <ContenedorComparadorLogos
        subtitle={'Cada compañía telefónica tiene sus propias fortalezas y debilidades, lo que hace difícil elegir la ideal. La clave está en identificar qué aspectos son más importantes para usted y comparar las opciones para descubrir en qué destaca cada una. Aquí le presentamos las principales compañías y sus características distintivas. ¿Cuál se adapta mejor a sus necesidades?'}
      />
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/preguntas-raiz-telefonia.png'}
      />
      <ContenedorPorQueComparar title={"¿Por qué comparar"} titleAlt={"tarifas de Internet y Telefonía"} titleThird={"es tan importante?"} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcionCo />
      <FooterCo />
    </>

  )
}
