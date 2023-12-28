import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import ContenedorProductosStreaming from '../Components/Contenedor/ContenedorProductosStreaming';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import TitleSection from '../Components/Text/TitleSection';
function ComparadorStreaming() {
    return (
        <div>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de plataformas de streaming'}
                subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
                image={'/img/television-streaming/banner_streaming.png'}
                logo={'/img/icons/streaming.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosStreaming />
            <Container fluid className='p-0 m-0 mx-auto'>
                <Row className='mx-auto bg-gray'>
                    <Col xs={12} md={12} className='mx-auto py-4'>
                        <CardGroup>
                            <Card className='border-0 bg-gray p-3'>
                                <Card.Body>
                                    <Card.Title className='mb-5 text-center  header-img-card'>
                                        <img className='header-img-card' src='/img/icons/transmision.svg' />
                                        <h6 className='mt-4'>¿Qué plataforma elegir?</h6>
                                    </Card.Title>
                                    <Card.Text className='my-4'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='border-0 bg-gray p-3'>
                                <Card.Body>
                                    <Card.Title className='mb-5 text-center  header-img-card'>
                                        <img className='header-img-card' src='/img/icons/familia.svg' />
                                        <h6 className='mt-4'>¿Cuál es la mejor opción para familias?</h6>
                                    </Card.Title>
                                    <Card.Text className='my-2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='border-0 bg-gray p-3'>
                                <Card.Body>
                                    <Card.Title className='mb-5 text-center  header-img-card'>
                                        <img className='header-img-card' src='/img/icons/llamadaTelefonica.svg' />
                                        <h6 className='mt-4'>¿Qué plataforma tiene planes incluidos en paquetes con operadoras?</h6>
                                    </Card.Title>
                                    <Card.Text className='my-2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorStreaming;