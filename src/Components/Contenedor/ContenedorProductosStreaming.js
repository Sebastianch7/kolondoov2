import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import InterSection from '../Utils/InterSection';
import TarjetaTarifaStreaming from '../Tarjeta/TarjetaTarifaStreaming';
import TitleSection from '../Text/TitleSection';
import Carousel from "react-multi-carousel";
import { fetchStreamingOffers } from '../../services/ApiServices';
import Load from '../Utils/Load';

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


function ContenedorProductosStreaming(logo = null, landingLead = null, id = null) {
  const [isLoadInformation, setIsLoadInformation] = useState(false);
  const [Tarifas, setTarifas] = useState([]);

  useEffect(() => {
    setIsLoadInformation(true);
    const fetchTariffs = async () => {
      try {
        let response = await fetchStreamingOffers()
        setTarifas(response);
        console.log(response);
        setIsLoadInformation(false);
      } catch (error) {
        console.error("Error al obtener las tarifas de móvil:", error);
      }
    };

    fetchTariffs();
  }, []);

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
          {Tarifas?.length > 0 &&
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
              {Tarifas?.map((item) => {
                return (
                  <TarjetaTarifaStreaming data={item} />
                );
              })}
            </Carousel>
          }
        </div>
        <small>*Se pueden añadir pases de suscriptor/a extra** por 5,99 € al mes</small>
      </Container>
        :
        <Load></Load>
      }
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorProductosStreaming;
