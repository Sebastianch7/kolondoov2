import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import TitleSectionHome from "../Text/TitleSectionHome";
import InterSection from "../Utils/InterSection";

function BannerHome({
  title = "",
  subtitle = "",
  buttons = false,
  children,
  image,
  logo = "",
  logo2 = "",
  logo3 = "",
}) {
  return (
    <section className="clean-block p-0 mb-0">
      <Container>
        <div className="row justify-content-center banner align-items-center mt-0">
          <Col sm={12} md={8} xl={7}>
            <Row>
              {logo !== "" && (
                <Col xs={6} md={4} className="d-flex mx-auto">
                  {logo && (
                    <div className="banner-icon">
                      <img src={logo} alt={logo} />
                    </div>
                  )}
                  {logo2 && (
                    <div className="banner-icon">
                      <img src={logo2} alt={logo3} />
                    </div>
                  )}
                  {logo3 && (
                    <div className="banner-icon">
                      <img src={logo3} alt={logo3} />
                    </div>
                  )}
                </Col>
              )}
              <Col sm={12} className="text-center">
                <TitleSectionHome
                  title={title}
                  subtitle={subtitle}
                  buttons={buttons}
                />
              </Col>
              <Col sm={12} md={10} className="mx-auto">
                {children}
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4} xl={5} className="d-none d-md-block d-xl-block">
            <div>
              <img className="img-fluid img-banner" alt="banner" src={image} />
            </div>
          </Col>
        </div>
      </Container>
      <InterSection></InterSection>
    </section>
  );
}

export default BannerHome;
