import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSection from '../Text/TitleSection'
import BannerImageFull from '../Banner/BannerImageFull'
import { Accordion } from 'react-bootstrap'



export default function ContenedorPreguntasFrecuentes({data, image}) {
    return (
        <div className='container-tarjeta-pregunta'>
            <TitleSection
                center
                title={'Preguntas'}
                titleAlt={'frecuentes'}
                
            />
            <Container fluid className='p-md-0 m-md-0 mx-xxl-auto'>
                <BannerImageFull
                    image={image}
                >
                    <Row>
                        <Col>
                            <Accordion defaultActiveKey="1">
                                {
                                    data?.map((item, index) =>
                                        <Accordion.Item eventKey={index} className='pregunta-frecuente-item'>
                                            <Accordion.Header className='pregunta-frecuente-header m-2 px-2'>{item.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <p dangerouslySetInnerHTML={{ __html: item.texto.replaceAll('. ','.<br>') }}></p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                }
                            </Accordion>
                        </Col>
                    </Row>
                </BannerImageFull>
            </Container>
        </div>
    )
}

