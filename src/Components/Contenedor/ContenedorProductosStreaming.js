import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, Card } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import InterSection from '../Utils/InterSection';
import { Link } from 'react-router-dom';
import TarjetaTarifaStreaming from '../Tarjeta/TarjetaTarifaStreaming';

const data = [
  {
    logo: '/img/logos/netflix.svg',
    series: 'Nowhere, Boksoon debe morir, El rey mono, Soy Georgina.',
    precio_min: '5,49€/mes',
    precio_max: '17,99€/mes*',
    productos: [
      {
        titulo: 'Estándar con anuncios',
        precio: '5’49€ /mes'
      },
      {
        titulo: 'Básico',
        precio: '7’99€ /mes'
      },
      {
        titulo: 'Estándar',
        precio: '12’99€ /mes'
      },
      {
        titulo: 'Premium',
        precio: '17’99€ /mes'
      }
    ]
  },
  {
    logo: '/img/logos/hbomax.svg',
    series: 'Elvis, Cinco lobitos,Expediente Warren: Obligado por el demonio.',
    precio_estandar: '9,99€/mes*',
    productos: [
      {
        titulo: 'Estándar',
        precio: '9’49€ /mes'
      }
    ]
  },
  {
    logo: '/img/logos/prime.svg',
    series: 'Guy Ritchie: El pacto, Guns Akimbo, Jackass Forever, Halloween.',
    precio_estandar: '4,99€/mes*',
    productos: [
      {
        titulo: 'Estándar',
        precio: '4’49€ /mes'
      }
    ]
  },
]
function ContenedorProductosStreaming(logo = null, landingLead = null, id = null) {
  return (
    <>
      <Container>
        <Row>
          <Carousel>
            {!isMobile ?
              <Carousel.Item>
                <Row className='d-flex justify-content-evenly'>
                  {
                    (data.length > 0 && data.length <= 3) &&
                    data.map((item, index) => {
                      return <Col md={4}><TarjetaTarifaStreaming key={index} data={item} /></Col>
                    })
                  }
                </Row>
              </Carousel.Item>
              :

              data.length > 0 &&
              data.map((item, index) => {
                return <Carousel.Item><TarjetaTarifaStreaming key={index} data={item} /></Carousel.Item>
              })

            }
          </Carousel>
        </Row>
      </Container>
      <InterSection>
      </InterSection>
      <Container fluid className='bg-gray'>
        <Row className='d-flex justify-content-evenly p-5'>
          <Col xs={12} md={3} xxl={2} className=''>
            <div className='text-center mb-2'><img className='h-40' src='/img/icons/transmision.svg' /></div>
            <h6 className='text-center h-40'>¿Qué plataforma elegir?</h6>
            <p className='font-09'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={12} md={3} xxl={2} >
          <div className='text-center mb-2'><img className='h-40' src='/img/icons/familia.svg' /></div>
            <h6 className='text-left h-40'>¿Cuál es la mejor opción para familias?</h6>
            <p className='font-09'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={12} md={3} xxl={2} >
          <div className='text-center mb-2'><img className='h-40 p-2' src='/img/icons/llamadaTelefonica.svg' /></div>
            <h6 className='text-left h-40'>¿Qué plataforma tiene planes incluidos en paquetes con operadoras?</h6>
            <p className='font-09'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContenedorProductosStreaming;
