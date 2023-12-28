import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Footer(props) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    },[])
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
                <Row className='text-center'>
                    <Col xs={6} md={3}>
                        {!isMobile && <img src='/img/logoReverse.svg' />}
                        <ul>
                            <li className='my-md-3'>Calle Barquillo, 8</li>
                            <li className='my-md-3'>28004 Madrid - España</li>
                            <ul className='d-flex justify-content-evenly'>
                                <li><a href="/mx">mx</a></li>
                                <li><a href="/es">es</a></li>
                                <li><a href="/en">en</a></li>
                                
                            </ul>
                        </ul>
                    </Col>
                    {!isMobile &&
                        <>
                            <Col md={3}>
                                <h5 className='text-center'>Redes sociales</h5>
                                <ul>
                                    <li className='my-md-3'><a href="#">Linkedin</a></li>
                                    <li className='my-md-3'><a href="#">Facebook</a></li>
                                    <li className='my-md-3'><a href="#">Twitter</a></li>
                                    <li className='my-md-3'><a href="#">Instagram</a></li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <h5>Tarifas</h5>
                                <ul>
                                    {/* <li className='my-md-3'><Link to={''}>Tarifas</Link></li> */}
                                    <li className='my-md-3'><Link to={`/${lang}/internet-telefonia/comparador-fibra`}>Sólo fibra</Link></li>
                                    <li className='my-md-3'><Link to={`/${lang}/internet-telefonia/comparador-movil`}>Tarifa móvil</Link></li>
                                    <li className='my-md-3'><Link to={`/${lang}/internet-telefonia/comparador-fibra-movil-tv`}>Fibra+móvil+TV</Link></li>
                                    <li className='my-md-3'><Link to={`/${lang}/internet-telefonia/comparador-tarifas-fibra-y-movil`}>Fibra+móvil</Link></li>
                                    <li className='my-md-3'><Link to={`/${lang}/energia/comparador-tarifas-luz`}>Luz</Link></li>
                                </ul>
                            </Col>
                        </>
                    }
                    <Col xs={6} md={3}>
                        <h5>vuskoo.com</h5>
                        <ul>
                            <li className='my-md-3'><Link to="/">vuskoo.com</Link></li>
                            <li className='my-md-3'><Link to="quienes-somos">Quiénes Somos</Link></li>
                            <li className='my-md-3'><Link to="contactanos">Contáctanos</Link></li>
                            <li className='my-3'><img className='img-fluid' src='/img/parner-google.svg' /></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="footer-copyright text-white pt-5 mt-5 pt-md-0 mt-md-0">
                        <p>COPYRIGHT © 2021 VUSKOO. TODOS LOS DERECHOS RESERVADOS | POLÍTICA DE PRIVACIDAD | AVISO LEGAL | POLÍTICA DE COOKIES | MAPA WEB</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default Footer;