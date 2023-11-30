import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import InterSection from '../Utils/InterSection';
import TarjetaTarifaStreaming from '../Tarjeta/TarjetaTarifaStreaming';
import TitleSection from '../Text/TitleSection';
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,

  }
};

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
            <div
              style={{
                paddingBottom: '10px',
                position: 'relative'
              }}
            >
              {data?.length > 0 &&
                <Carousel
                  arrows={false}
                  centerMode={false}
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  keyBoardControl
                  pauseOnHover
                  renderDotsOutside={true}
                  responsive={responsive}
                  rewind={false}
                  showDots={false}
                  slidesToSlide={1}
                >
                  {data?.map((item) => {
                    return (
                      <TarjetaTarifaStreaming data={item} />
                    );
                  })}
                </Carousel>
              }
            </div>
      </Container>
      {/*  <Container>
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
      </Container> */}
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorProductosStreaming;
