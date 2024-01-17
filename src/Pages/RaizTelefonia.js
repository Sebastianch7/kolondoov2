import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import BannerImageFull from '../Components/Banner/BannerImageFull'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import Footer from '../Components/Footer/Footer';
import TarjetaRaizTelefonia from '../Content/TarjetaRaizTelefonia.json'
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../Components/Acordion/AcordionItem';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import InterSection from '../Components/Utils/InterSection';
import ContenedorDescipcionTarifa from '../Components/Contenedor/ContenedorDescipcionTarifa'
import TarjetaTarifa from '../Components/Tarjeta/TarjetaTarifa'
import { getDetailOffer, getExtraOffer } from '../services/ApiServices';
import ButtonPrimary from '../Components/Button/ButtonPrimary';
import ContenedorComparadorLogos from '../Components/Contenedor/ContenedorComparadorLogos';
import ContenedorPreguntasFrecuentes from '../Components/Contenedor/ContenedorPreguntasFrecuentes';
import { Card, CardGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import preguntasFrecuentes from '../Content/PreguntasFrecuentesTelefonia.json'
import ContenedorPorQueComparar from '../Components/Contenedor/ContenedorPorQueComparar';

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
    text: 'Tener claro si lo que te interesa es <b>contratar los servicios por separado o de forma conjunta.</b> Ten en cuenta que los paquetes de <b>‘Internet + Móvil’ suelen unificar todos los servicios,</b> -la mayoría incluyen teléfono fijo-, lo que <b>se traduce en un ahorro</b> frente a contratarlos de forma independiente.'
  },
  {
    title: 'Prestaciones',
    text: 'Nunca pasar por alto aspectos como el precio, las prestaciones de cada una de las compañías, y la cobertura. Recuerda que aún no todas las redes de fibra óptica llegan a cualquier rincón ni todos los operadores de telefonía brindan una óptima cobertura en la totalidad del territorio español.'
  },
  {
    title: 'Tarifas',
    text: 'Fijarte en si la tarifa que te encaja tiene o no permanencia. Aunque te encuentres cada vez más operadores que no exigen este compromiso, sí sigue existiendo en muchas ocasiones. Por ejemplo, si contratas una oferta de fibra, está incluida la instalación de la fibra y del Router. Estos servicios tienen un coste que, en ocasiones, se compensa con 12 meses de permanencia.'
  },
  {
    title: 'Trámites',
    text: 'Tener en cuenta que siempre es el titular del contrato el único que puede realizar todos los trámites que conlleva la portabilidad o el alta en cualquier contrato. Para realizar un cambio de titularidad, basta con que acudas a cualquier tienda de la compañía o llames a su departamento de Atención al Cliente. Esta gestión es gratuita.'
  },
];

export default function RaizTelefonia() {
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
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/bannerRaizTelefonia.png'}
        title={t('title-baner-comparador-de-internet-y-comparador-movil')}
        text1='<ul class="listaAlternativa"><li><p>Encuentra una tarifa para hablar y navegar a tu medida a golpe de clic.</p></li><li><p>Compara las mejores ofertas y compañías de telefonía actuales en un solo lugar y gratis.</p></li><li><p>Te asesoramos de forma personalizada para que, elijas lo que elijas, quedes satisfecho.</p></li></ul>'
        btnLeft
        /* buttons={[
          {
            title: '¡Empieza a ahorrar!',
            url: '/internet-telefonia/comparador-movil'
          }
        ]} */
      />
      <Container>
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
              return <AcordionItem key={index} data={item} />
            })
          }
        </ContenedorTarjeta>
        <InterSection></InterSection>
        <TitleSection
          center
          title={'Las mejores ofertas de'}
          titleAlt={'Internet y Telefonía Móvil'}
          text1={'¿En busca de las mejores <b>ofertas de Internet y Móvil?</b> Te contamos lo más importante a la hora de decidirte por una tarifa:'}
        />
        <ContenedorDescipcionTarifa data={data} />
        <Row className='justify-content-md-center'>
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
          {/* <Col md={12} className='mx-auto text-center mt-md-4'>
            <ButtonPrimary text={'Ver más ofertas'} url={''} />
          </Col> */}
        </Row>
      </Container>
      <ContenedorTarjetaBlog />
      <ContenedorComparadorLogos
        subtitle={'Cada compañía telefónica es única y brilla con luz propia, de hecho por eso es tan difícil decantarnos por una u otra. Lo importante es <b>tener claro qué aspectos son los que más valoras dentro de un operador y comparar entre ellos</b> para saber con certeza en qué es mejor cada uno. Aquí te mostramos los principales y sus peculiaridades. ¿Cuál consideras el más afín a ti?'}
      />
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/preguntas-raiz-telefonia.png'}
      />
      <ContenedorPorQueComparar title={"¿Por qué comparar"} titleAlt={"tarifas de Internet y Telefonía"} titleThird={"es tan importante?"} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcion />
      <Footer></Footer>
    </>

  )
}
