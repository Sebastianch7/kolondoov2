import React, { useState } from 'react'
import HeaderLead from '../Components/Header/HeaderLead'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';
import { useEffect } from 'react';
import axios from 'axios';
import Load from '../Components/Utils/Load'
import Title from '../Components/Text/Title';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ButtonPrimary from '../Components/Button/ButtonPrimary'
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Lead() {
  const [isLoading, setIsLoading] = useState(true)
  const [infoOffer, setInfoOffer] = useState([])
  const [idPlan, setIdPlan] = useState(null)

  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null)

  const [checkInAsesoria, setCheckInAsesoria] = useState(false);
  const [checkInComercial, setCheckInComercial] = useState(false);

  const [inpEmail, setInpEmail] = useState(null)
  const [isSend, setIsSend] = useState(false);
  const [textButton, setTextButton] = useState('button')

  const subscripcion = (e) => {
    e.preventDefault();
    setTextButton('Suscripción exitosa!')
  }

  useEffect(() => {
    let locations = location.pathname.split('/');
    setIdPlan(locations[3])
    locations.pop()
    setBreadUrl(locations.join('/'));
  }, [breadUrl]);

  useEffect(() => {
    setIsLoading(true)
    axios.get(`http://127.0.0.1:8000/api/getDetailOffer/${idPlan}`).then((response) => {
      setInfoOffer(response.data[0])
      setIsLoading(false)
    });
  }, []);


  return (
    <>
      {!isLoading ?
        <>
          <HeaderLead logo={infoOffer?.logo}></HeaderLead>
          <BreadCrumb url={breadUrl} />
        </>
        : <Load />
      }
      {<Container>
        <Row className="justify-content-md-center">
          <div className=''>
            <Title title={`Oferta de ${infoOffer?.nombre}`}></Title>
          </div>
          <Col xs={12} md={7}></Col>
          <Col xs={12} md={5}>
            <Card className='tarjeta-lead'>
              <Card.Header className="text-center">¡Oferta disponible!</Card.Header>
              <Card.Body>
                <Card.Text className='text-center text-primary'>
                  Déjanos tu teléfono y <b>te llamamos gratis</b>
                </Card.Text>
                <Card.Text>
                  <Form onSubmit={subscripcion}>
                    <div className='mx-2'>
                      <div className="input-group">
                        <span className="input-group-text"><BsFillTelephoneFill /></span>
                        <Form.Control
                          className={'form-control'}
                          placeholder={'Introduce tu teléfono'}
                          aria-label={'Introduce tu teléfono'}
                          type={'text'}
                          onChange={(e) => setInpEmail(e.target.value)}
                          value={inpEmail}
                        />
                      </div>
                      <div className='my-3'>
                        <Form.Switch
                          className='input-check mt-2'
                          type='switch'
                          checked={checkInAsesoria}
                          label={'Acepto que Kolondoo me asesore telefónicamente sobre el producto y servicio elegido de acuerdo con su Política de Privacidad'}
                          onChange={(e) => {
                            setCheckInAsesoria(!checkInAsesoria)
                          }
                          }
                        />
                      </div>
                      <div className='my-3'>
                        <Form.Switch
                          className='input-check mt-2'
                          type='switch'
                          checked={checkInComercial}
                          label={'Acepto recibir comunicaciones comerciales de Kolondoo. Más información en Política de Privacidad'}
                          onChange={(e) => {
                            setCheckInComercial(!checkInComercial)
                          }
                          }
                        />
                      </div>
                      <div className='text-center m-4'>
                        <ButtonPrimary
                          text={textButton}
                          btnStatus={(checkInAsesoria && checkInComercial) ? false : true}
                          type={'submit'}
                          isSuccess={isSend ? 'btn-success' : 'null'}
                        />
                      </div>
                    </div>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>}
    </>
  )
}
