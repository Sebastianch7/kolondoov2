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
import BannerReverse from '../Components/Banner/BannerReverse';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';

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

const preguntasFrecuentes = [
  {
    title: '¿Cuántas tarifas de telefonía e Internet hay en España?',
    texto: 'La cifra te puede sorprender, pero en nuestro país existen ahora mismo más de 1000 tarifas de telefonía que pueden contratarse para llamadas, navegar por la red e incluso para ver la televisión. Eso sí, la mayoría seguramente no cumpla con tus expectativas. En Vuskoo te mostramos las compañías de telefonía móvil, Internet y televisión , y te informamos de los detalles de sus tarifas y servicios que ofrecen, para que puedas encontrar la perfecta para ti.'
  },
  {
    title: '¿Cuáles son las operadoras con cobertura propia?',
    texto: 'texto2'
  },
  {
    title: '¿Qué es una Operadora Móvil Virtual (OMV)?',
    texto: 'texto3'
  },
  {
    title: '¿Cuántas compañías telefónicas hay en España?',
    texto: 'texto3'
  },
  {
    title: '¿Qué diferencia hay entre ADSL y fibra óptica?',
    texto: 'texto3'
  },
  {
    title: '¿Qué implica tener permanencia?',
    texto: 'texto3'
  }
];

export default function RaizTelefonia() {
  const [extraOffer, setExtraOffer] = useState([]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await getExtraOffer('movil_y_fibra')
        setExtraOffer(response);
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, []);
  return (
    <>
      <Header></Header>
      <BannerImageFull
        image={'/img/bannerRaizTelefonia.png'}
        title='Comparador de Internet y Telefonía Móvil'
        text1='<ul class="listaAlternativa"><li><p>Encuentra una tarifa para hablar y navegar a tu medida a golpe de clic.</p></li><li><p>Compara las mejores ofertas y compañías de telefonía actuales en un solo lugar y gratis.</p></li><li><p>Te asesoramos de forma personalizada para que, elijas lo que elijas, quedes satisfecho.</p></li></ul>'
        imgFluid
        buttons={[
          {
            title: '¡Empieza a ahorrar!',
            url: '/internet_y_telefonia/movil'
          }
        ]}
      />
      <Container>
        <TitleSection
          center
          title={'Comparadores de Telefonía Móvil y Fibra'}
          text1={'Como cada vez hay más compañías compitiendo en el mercado, desde Kolondoo te recomendamos que sepas escoger la oferta de telefonía móvil y fibra, y es que tienes casi la obligación de comparar detenidamente todas las ofertas para que te acabe saliendo lo más rentable posible.A continuación, puedes ver nuestros comparadores con las ofertas de los distintos servicios (y combinaciones) que pueden contratarse.'}
          text2={'¿Qué es lo que más te conviene? No pierdas más tiempo y comienza a comparar:'}
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
          <Col md={12} className='mx-auto text-center mt-md-4'>
            <ButtonPrimary text={'Ver más ofertas'} url={''} />
          </Col>
        </Row>
      </Container>
      <ContenedorTarjetaBlog />
      <ContenedorComparadorLogos />
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/preguntas-raiz-telefonia.png'}
      />
      <Container fluid  className='p-0 m-0'>
        <Row className='mx-auto bg-gray'>
          <TitleSection
            center
            title={'¿Por qué comparar'}
            titleAlt={'tarifas de Luz y Gas'}
            titleThird={'es tan importante?'}
          />
          <Col xs={12} md={10} className='mx-auto p-4'>
            <CardGroup>
              <Card className='border-0 bg-gray p-3'>
                <Card.Body>
                  <Card.Title className='mb-5 text-center  header-img-card'>
                    <img className='img-fluid header-img-card' src='/img/icons/factura.svg' />
                  </Card.Title>
                  <Card.Text className='my-4'>
                  ¿Has oído hablar de las tarifas de electricidad a precio de coste o indexado? ¿Y las de mercado libre? ¿Sabes en qué consiste la tarifa plana de luz? Desde Kolondoo te recomendamos que compares las tarifas de gas y electricidad antes de formalizar cualquier contratación, y que estudies todos los tipos de tarifas que existen a día de hoy hasta saber cuál es la más acorde a tus hábitos de consumo y también a tu presupuesto.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='border-0 bg-gray p-3'>
                <Card.Body>
                  <Card.Title className='mb-5 text-center  header-img-card'>
                    <img className='img-fluid header-img-card' src='/img/icons/obtener-dinero.svg' />
                  </Card.Title>
                  <Card.Text className='my-2'>
                  Por razones obvias, las tarifas de luz y de gas baratas son las más buscadas, pero…¡Ojo! no te dejes llevar por un precio bajo y pases por alto aspectos también esenciales. Sin ir más lejos, para saber qué potencia es la adecuada para tu vivienda, debes estudiar las características de esta.Con tantos tipos de tarifas y tantísimas comercializadoras compitiendo en el mercado, te puede resultar complicado el proceso de buscar y saber elegir bien la tarifa de luz o de gas -y el precio- que necesitas para tu hogar.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='border-0 bg-gray p-3'>
                <Card.Body>
                  <Card.Title className='mb-5 text-center  header-img-card'>
                    <img className='img-fluid' src='/img/icons/operador.svg' />
                  </Card.Title>
                  <Card.Text className='my-2'>
                  <b>Algo muy positivo en los comparadores online como Kolondoo, es que te asesoramos de forma gratuita y personalizada, resolviendo tus dudas y aconsejándote siempre lo más adecuado para ti,</b> desde la empatía y la transparencia. ¿Ya te hemos dejado claro lo importante que es realizar una comparativa antes de contratar? ;)
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
      <FormSuscripcion />
      <Footer></Footer>
    </>

  )
}
