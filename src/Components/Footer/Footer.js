import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="page-footer bg-dark pt-5">
            <Container>
                {isMobile &&
                    <Row className="justify-content-center text-center mb-4">
                        <Col>
                            <img className='footer-img-mobile' src='/img/logoReverse.svg' alt="Logo" />
                        </Col>
                    </Row>

                }
                <Row>
                    <Col xs={6} sm={3}>
                        {!isMobile && <img src='/img/logoReverse.svg' />}
                        <ul>
                            <li className='my-md-3'>Calle Barquillo, 8</li>
                            <li className='my-md-3'>28004 Madrid - España</li>
                            <li className='my-md-3'>hola@vuskoo.com</li>
                        </ul>
                    </Col>
                    {!isMobile &&
                        <>
                            <Col sm={3}>
                                <h5>Redes sociales</h5>
                                <ul>
                                    <li className='my-md-3'><a href="#">Linkedin</a></li>
                                    <li className='my-md-3'><a href="#">Facebook</a></li>
                                    <li className='my-md-3'><a href="#">Twitter</a></li>
                                    <li className='my-md-3'><a href="#">Instagram</a></li>
                                </ul>
                            </Col>
                            <Col sm={3}>
                                <h5>Tarifas</h5>
                                <ul>
                                    {/* <li className='my-md-3'><Link to={''}>Tarifas</Link></li> */}
                                    <li className='my-md-3'><Link to={'/internet_y_telefonia/fibra'}>Sólo fibra</Link></li>
                                    <li className='my-md-3'><Link to={'/internet_y_telefonia/movil'}>Tarifa móvil</Link></li>
                                    <li className='my-md-3'><Link to={'/internet_y_telefonia/movil_fibra_tv'}>Fibra+móvil+TV</Link></li>
                                    <li className='my-md-3'><Link to={'/internet_y_telefonia/movil_y_fibra'}>Fibra+móvil</Link></li>
                                    <li className='my-md-3'><Link to={'/energia/luz'}>Luz</Link></li>
                                </ul>
                            </Col>
                        </>}
                    <Col xs={6} sm={3}>
                        <h5>vuskoo.com</h5>
                        <ul>
                            <li className='my-md-3'><Link to="/">vuskoo.com</Link></li>
                            <li className='my-md-3'><Link to="/quienes-somos">Quiénes Somos</Link></li>
                            <li className='my-md-3'><Link to="/quienes-somos">Contactanos</Link></li>
                            <li className='my-3'><img className='img-fluid' src='/img/parner-google.svg' /></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-white px-3">
                <p>COPYRIGHT © 2021 VUSKOO. TODOS LOS DERECHOS RESERVADOS | POLÍTICA DE PRIVACIDAD | AVISO LEGAL | POLÍTICA DE COOKIES | MAPA WEB</p>
            </div>
        </footer>
    );
}

export default Footer;