import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import InterSection from '../Utils/InterSection';
import Carousel from "react-multi-carousel";
import { fetchTarifasSegurosSalud } from '../../services/ApiServices';
import Load from '../Utils/Load';
import { useLocation } from 'react-router-dom';
import TarjetaTarifaAlarma from '../Tarjeta/TarjetaTarifaAlarma';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function ContenedorProductosSegurosSalud({data}) {
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  return (
    <>
      {!isLoadInformation ?
        <Container>
          <div
            style={{
              paddingBottom: '10px',
              position: 'relative'
            }}
          >
            {data?.length > 0 &&
              <Carousel
                arrows={true}
                centerMode={false}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                pauseOnHover
                renderDotsOutside={true}
                responsive={responsive}
                rewind={true}
                showDots={false}
                slidesToSlide={1}
              >
                {data?.map((item) => {
                  return (
                    <TarjetaTarifaAlarma data={item} />
                  );
                })}
              </Carousel>
            }
          </div>
        </Container>
        :
        <Load></Load>
      }
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorProductosSegurosSalud;
