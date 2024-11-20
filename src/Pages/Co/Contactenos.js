import React from "react";
import Header from "../../Components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "../../Components/Text/TitleSection";
import Footer from "../../Components/Footer/Footer";
import MetaData from "../../Components/Header/SeoMetadata";
import FormContactenosCo from "../../Components/Forms/FormContactenosCo";

export default function ContactenosCo() {
  return (
    <>
      <MetaData
        titulo={"¡Conéctate con Nosotros! Contáctanos | Vuskoo"}
        descripcion={
          "¿Tienes preguntas o necesitas asistencia? ¡Contacta con nosotros en Vuskoo! Estamos aquí para ayudarte a aprovechar al máximo nuestros comparadores de servicios"
        }
      />
      <Header></Header>
      <Container className="mb-5">
        <Row>
          <Col sm={12} md={6} className="d-none d-md-block">
            <div>
              <img
                className="img-fluid"
                src={"/img/banner_contactenos-co.png"}
                alt="banner contactenos colombia"
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <TitleSection
              title={"¿Tienes alguna pregunta o comentario? ¡Contáctanos!"}
              text1={
                "¿Tienes alguna pregunta sobre cómo funciona Vuskoo, necesitas ayuda para resolver un inconveniente o simplemente quieres dejarnos una reseña o sugerencia? ¡No dudes en contactarnos! Puedes llenar el siguiente formulario o enviarnos un correo electrónico a hola@vuskoo.com. ¡Te responderemos lo más pronto posible de forma personalizada!"
              }
            />
            <FormContactenosCo />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
