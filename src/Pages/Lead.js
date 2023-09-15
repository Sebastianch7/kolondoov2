import React from 'react'
import HeaderLead from '../Components/Header/HeaderLead'
import { Container, Row, Col, Card } from 'react-bootstrap'
import FormLead from '../Components/Forms/FormLead';
import { useLocation } from 'react-router-dom';

export default function Lead() {
  const location = useLocation();
  const params = location.search.split('?')
  params.shift()
  return (
    <>
      <HeaderLead></HeaderLead>
      {
        params.includes('reverse') ? 
        <Container>
          <Row xs className="justify-content-md-center">
            <Col md={4}>
              <div>
                <h5>INTERNET Y TELEFONÍA</h5>
                <h1>Fibra 300 Mb + Fijo</h1>
                <ul>
                  <li> Fibra 300 Mb</li>
                  <li> Incluye fijo con llamadas</li>
                  <li> Promo: ¡Ahorra 60€ al año!</li>
                </ul>
                <h3>24,99 € /mes</h3>
                <p>Descuento 12 meses. Después 29,99 €</p>
              </div>
            </Col>
            <Col md={4}>
              <Card bg={params[0]}>
                <Card.Header className="text-center">¡Oferta disponible!</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Déjanos tu teléfono y te llamamos gratis
                  </Card.Text>
                  <Card.Text>
                    <FormLead
                      text={'Introduce tu teléfono'}
                      check
                      button={'LLÁMAME AHORA'}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      :
      <Container>
          <Row xs className="justify-content-md-center">
          <Col md={4}>
              <Card bg={params[0]}>
                <Card.Header className="text-center">¡Oferta disponible!</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Déjanos tu teléfono y te llamamos gratis
                  </Card.Text>
                  <Card.Text>
                    <FormLead
                      text={'Introduce tu teléfono'}
                      check
                      button={'LLÁMAME AHORA'}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <div>
                <h5>INTERNET Y TELEFONÍA</h5>
                <h1>Fibra 300 Mb + Fijo</h1>
                <ul>
                  <li> Fibra 300 Mb</li>
                  <li> Incluye fijo con llamadas</li>
                  <li> Promo: ¡Ahorra 60€ al año!</li>
                </ul>
                <h3>24,99 € /mes</h3>
                <p>Descuento 12 meses. Después 29,99 €</p>
              </div>
            </Col>
          </Row>
        </Container>
      }


    </>
  )
}
