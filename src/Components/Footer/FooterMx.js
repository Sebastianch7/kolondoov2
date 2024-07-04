import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const handleSelectChange = (event) => {
    const country = event.target.value;
    alert(country)
    let newPath;
    switch (country) {
        case 'Es':
            newPath = '/es';
            break;
        case 'Co':
            newPath = '/co';
            break;
        case 'Mx':
            newPath = '/mx';
            break;
        default:
            newPath = '/es';
            break;
    }
    window.location.href = newPath; 
};

function FooterMx(props) {
    return (
        <footer className="page-footer bg-dark pt-5">
            <Container>
                <Row className="justify-content-center text-center mb-4 d-block d-md-none d-xl-none">
                    <Col>
                        <img className='footer-img-mobile' src='/img/logoReverse.svg' alt="Logo" />
                    </Col>
                </Row>
                <Row className='justify-content-center text-center'>
                    <Col xs={6} md={3}>
                        <img className='d-none d-md-block d-lg-block mx-auto' src='/img/logoReverse.svg' />
                        <ul>
                            <li className='my-md-3'>Calle Barquillo, 8</li>
                            <li className='my-md-3'>28004 Madrid - España</li>
                        </ul>
                        <select className='p-2 my-3' onChange={handleSelectChange}>
                            <option value="Es">Es</option>
                            <option value="Co">Co</option>
                            <option value="Mx">Mx</option>
                        </select>
                    </Col>

                    <Col xs={12} md={3} xl={3}>
                        <h5 className='text-center'>Redes sociales</h5>
                        <ul>
                            {/* <li className='my-md-3'><a target='_blank' rel='nofollow noopener noreferrer' href={"https://www.linkedin.com/company/kolondoo"}>Linkedin</a></li> */}
                            <li className='my-md-3'><a target='_blank' rel='nofollow noopener noreferrer' href={"https://www.facebook.com/VuskooComparador"}>Facebook</a></li>
                            <li className='my-md-3'><a target='_blank' rel='nofollow noopener noreferrer' href={"https://twitter.com/vuskoo_"}>Twitter</a></li>
                            {/* <li className='my-md-3'><a target='_blank' rel='nofollow noopener noreferrer' href={"https://www.instagram.com/kolondoo"}>Instagram</a></li> */}
                        </ul>
                    </Col>
                    <Col xs={12} md={3} xl={3}>
                        <h5>Tarifas</h5>
                        <ul>
                            <li className='my-md-3'><Link to={`/mx/energia/comparador-tarifas-luz`}>Luz</Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5>vuskoo.com</h5>
                        <ul>
                            <li className='my-md-3'><Link to={`/mx`}>vuskoo.com</Link></li>
                            <li className='my-md-3'><Link to={`/mx/quienes-somos`}>Quiénes Somos</Link></li>
                            <li className='my-md-3'><Link to={`/mx/contactanos`}>Contáctanos</Link></li>
                            <li className='my-3'><img className='img-fluid' src='/img/parner-google.svg' /></li>
                        </ul>
                    </Col>

                    <Col xs={12} className="footer-copyright text-white pt-md-0 mt-md-0">
                        <p>COPYRIGHT © 2021 VUSKOO. TODOS LOS DERECHOS RESERVADOS | <Link to={`/mx/politica-privacidad`}>POLÍTICA DE PRIVACIDAD</Link> | <Link to={`/mx/politica-legal`}>AVISO LEGAL</Link> | <Link to={`/mx/politica-cookies`}>POLÍTICA DE COOKIES</Link> </p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default FooterMx;