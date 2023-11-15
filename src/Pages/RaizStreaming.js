import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import BannerImageFull from '../Components/Banner/BannerImageFull'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import Footer from '../Components/Footer/Footer';
import TarjetaRaizStreaming from '../Content/TarjetaRaizStreaming.json'
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

const data = [
  {
    title: 'Lorem ipsum',
    text: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturuia.'
  },
  {
    title: 'Lorem ipsum',
    text: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturuia.'
  },
  {
    title: 'Lorem ipsum',
    text: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturuia.'
  },
  {
    title: 'Lorem ipsum',
    text: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturuia.'
  },
];

const preguntasFrecuentes = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    texto: 'texto2'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    texto: 'texto3'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    texto: 'texto3'
  }
];

export default function RaizStreaming() {
  return (
    <>
      <Header></Header>
      <BannerImageFull
        image={'/img/bannerRaizStreaming.png'}
        title='Comparador televisión y streaming'
        text1='<ul class="listaAlternativa"><li><p><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p></li><li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p></li><li><p>Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit,</b> sed do eiusmod tempor incididunt.</p></li></ul>'
        btnLeft
        buttons={[
          {
            title: '¡Empieza a ahorrar!',
            url: '/energia/luz'
          }
        ]}
      />
      <Container>
        <TitleSection
          center
          title={'Comparadores de'}
          titleAlt={'televisión y streaming'}
          text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          left
        />
        <ContenedorTarjeta>
          {!isMobile ?
            TarjetaRaizStreaming?.map((item, index) => {
              return <TarjetaProducto key={index} data={item} />
            })
            :
            TarjetaRaizStreaming?.map((item, index) => {
              return <AcordionItem key={index} data={item} />
            })
          }
        </ContenedorTarjeta>
        <InterSection></InterSection>
        <TitleSection
          center
          title={'Las mejores ofertas'}
          titleAlt={'Tv y Streaming'}
        />
        <ContenedorDescipcionTarifa data={data} />
      </Container>
      <ContenedorTarjetaBlog />
      <ContenedorComparadorLogos
       subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
       />
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/preguntas-raiz-energia.png'}
      />
      <Container fluid className='p-0 m-0'>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='border-0 bg-gray p-3'>
                <Card.Body>
                  <Card.Title className='mb-5 text-center  header-img-card'>
                    <img className='img-fluid header-img-card' src='/img/icons/obtener-dinero.svg' />
                  </Card.Title>
                  <Card.Text className='my-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='border-0 bg-gray p-3'>
                <Card.Body>
                  <Card.Title className='mb-5 text-center  header-img-card'>
                    <img className='img-fluid' src='/img/icons/operador.svg' />
                  </Card.Title>
                  <Card.Text className='my-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
