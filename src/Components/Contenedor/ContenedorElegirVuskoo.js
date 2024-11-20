import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import TitleSection from "../Text/TitleSection";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const data = [
  {
    number: "01.",
    title: "ElegirVuskooTitle01",
    content: "ElegirVuskoocontent01",
  },
  {
    number: "02.",
    title: "ElegirVuskooTitle02",
    content: "ElegirVuskoocontent02",
  },
  {
    number: "03.",
    title: "ElegirVuskooTitle03",
    content: "ElegirVuskoocontent03",
  },
];

function ContenedorElegirVuskoo({ children }) {
  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);

  const { t } = useTranslation();

  return (
    <Container>
      <Row className="mb-5">
        <Col
          xs={12}
          md={8}
          className={!isMobile ? "text-end text-right" : "px-0 text-start"}
        >
          <Row>
            <Col xs={12} className="px-5">
              <TitleSection
                title={"¿Por qué elegir "}
                titleAlt={"Vuskoo"}
                titleThird={"?"}
              />
            </Col>
            <Col className="mx-3 px-5">
              <Row>
                {data?.length > 0 &&
                  data.map((item, index) => (
                    <Col md={4} className="mb-4 mb-md-0" key={item.id || index}>
                      <Col xs={12} className="vuskoo-eleccion-number">
                        {item.number}
                      </Col>
                      <Col xs={12} className="vuskoo-eleccion-title">
                        {t(item.title)}
                      </Col>
                      <Col xs={12} className="vuskoo-eleccion-content">
                        {t(item.content)}
                      </Col>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          md={4}
          className="bg-blueContrast br-36 p-4 mt-5 mt-md-0 d-none d-sm-block"
        >
          <TitleSection
            title={t("ContenedorElegirVuskooUneteTitle")}
            titleAlt={t("ContenedorElegirVuskooUneteAlt")}
            titleBottom={t("ContenedorElegirVuskooUneteBottom")}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContenedorElegirVuskoo;
