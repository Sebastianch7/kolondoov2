import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { fetchFooterWeb } from '../../services/ApiServices';

const handleSelectChange = (event) => {
    const country = event.target.value;
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

function FooterCo(props) {
    const [lang, setLang] = useState('');
    const [dataFooter, setDataFooter] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location.pathname])

    useEffect(() => {
        const fetchData = async () => {
            if (lang != '') {
                try {
                    const response = await fetchFooterWeb(lang.trim())
                    setDataFooter(response);
                } catch (error) {
                    console.error("Error al obtener el menu", error);
                }
            }
        };
        fetchData();
    }, [lang, location]);


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
                        {lang != null && <select className='p-2 my-3' value={lang} onChange={handleSelectChange}>
                            <option value="Co">Co</option>
                            <option value="Es">Es</option>
                            <option value="Mx">Mx</option>
                        </select>}
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
                        <li className='my-md-3'><Link to={`/co/internet-movil/comparador-movil`}>Sólo móvil</Link></li>
                            <li className='my-md-3'><Link to={`/co/internet-movil/comparador-fibra`}>Tarifa fibra</Link></li>
                            <li className='my-md-3'><Link to={`/co/internet-movil/comparador-tarifas-fibra-y-movil`}>Fibra+móvil</Link></li>
                            <li className='my-md-3'><Link to={`/co/internet-movil/comparador-fibra-movil-tv`}>Fibra+móvil+TV</Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5>vuskoo.com</h5>
                        <ul>
                            <li className='my-md-3'><Link to={`/co`}>vuskoo.com</Link></li>
                            <li className='my-md-3'><Link to={`/co/quienes-somos`}>Quiénes Somos</Link></li>
                            <li className='my-md-3'><Link to={`/co/contactanos`}>Contáctanos</Link></li>
                            <li className='my-3'><img className='img-fluid' src='/img/parner-google.svg' /></li>
                        </ul>
                    </Col>

                    <Col xs={12} className="footer-copyright text-white pt-md-0 mt-md-0">
                        <p>COPYRIGHT © 2021 VUSKOO. TODOS LOS DERECHOS RESERVADOS | <Link to={`/co/politica-privacidad`}>POLÍTICA DE PRIVACIDAD</Link> | <Link to={`/co/politica-legal`}>AVISO LEGAL</Link> | <Link to={`/co/politica-cookies`}>POLÍTICA DE COOKIES</Link> </p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default FooterCo;