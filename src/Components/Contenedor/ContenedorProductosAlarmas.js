import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import InterSection from '../Utils/InterSection';
import TarjetaTarifaStreaming from '../Tarjeta/TarjetaTarifaStreaming';
import TitleSection from '../Text/TitleSection';
import Carousel from "react-multi-carousel";
import { fetchDataAll } from '../../services/ApiServices';
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


function ContenedorProductosAlarmas(logo = null, landingLead = null, id = null) {
  const [isLoadInformation, setIsLoadInformation] = useState(true);
  const [Tarifas, setTarifas] = useState([]);

  const [lang, setLang] = useState(null)
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1])
  }, [location])

  useEffect(() => {
    if (lang != null) {
      setIsLoadInformation(true);
      const fetchTariffs = async () => {
        try {
          let response = await fetchDataAll('getTarifasAlarmas',lang)
          setTarifas(response);
          setIsLoadInformation(false);
        } catch (error) {
          console.error("Error al obtener las tarifas de móvil:", error);
        }
      };

      fetchTariffs();
    }
  }, [lang]);

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

export default ContenedorProductosAlarmas;
