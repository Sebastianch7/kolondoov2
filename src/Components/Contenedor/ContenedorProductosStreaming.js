import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "rc-slider/assets/index.css";
import InterSection from "../Utils/InterSection";
import TarjetaTarifaStreaming from "../Tarjeta/TarjetaTarifaStreaming";
import Carousel from "react-multi-carousel";
import { fetchDataAll } from "../../services/ApiServices";
import Load from "../Utils/Load";
import { useLocation } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ContenedorProductosStreaming(
  logo = null,
  landingLead = null,
  id = null
) {
  const [isLoadInformation, setIsLoadInformation] = useState(true);
  const [Tarifas, setTarifas] = useState([]);

  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);

  useEffect(() => {
    if (lang != null) {
      setIsLoadInformation(true);
      const fetchTariffs = async () => {
        try {
          let response = await fetchDataAll("TarifasStreaming", lang);
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
      {!isLoadInformation ? (
        <Container>
          <div
            style={{
              paddingBottom: "10px",
              position: "relative",
            }}
          >
            {Tarifas?.length > 0 && (
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
                  return <TarjetaTarifaStreaming data={item} />;
                })}
              </Carousel>
            )}
          </div>
          {lang === "es" && (
            <small>
              *Se pueden añadir pases de suscriptor/a extra** por 5,99 € al mes
            </small>
          )}
        </Container>
      ) : (
        <Load></Load>
      )}
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorProductosStreaming;
