import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchDataAll, fetchFooterWeb } from '../../services/ApiServices';

function Footer(props) {
    const [lang, setLang] = useState('');
    const [dataFooter, setDataFooter] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setLang(location.pathname.split('/')[1]);
    }, [location.pathname]);

    useEffect(() => {
        const fetchData = async () => {
            if (lang !== '') {
                try {
                    const response = await fetchDataAll('Footer',lang.trim());
                    setDataFooter(response);
                } catch (error) {
                    console.error("Error al obtener el menú", error);
                }
            }
        };
        fetchData();
    }, [lang]);

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
        navigate(newPath);
    };

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
                        <img className='d-none d-md-block d-lg-block mx-auto' src='/img/logoReverse.svg' alt="Logo" />
                        <ul>
                            <li className='my-md-3'>Calle Barquillo, 8</li>
                            <li className='my-md-3'>28004 Madrid - España</li>
                        </ul>
                        <select className='p-2 my-3' value={lang} onChange={handleSelectChange}>
                            <option value="">Cambiar ubicación</option>
                            <option value="Es">España</option>
                            <option value="Co">Colombia</option>
                            {/* <option value="Mx">México</option> */}
                        </select>
                    </Col>
                    <Col xs={12} md={3} xl={3}>
                        <h5 className='text-center'>Redes sociales</h5>
                        <ul>
                            <li className='my-md-3'><a target='_blank' rel='nofollow noopener noreferrer' href="https://www.facebook.com/VuskooComparador">Facebook</a></li>
                            <li className='my-md-3'><a target='_blank' rel='nofollow noopener noreferrer' href="https://twitter.com/vuskoo_">Twitter</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} xl={3}>
                        <h5>Tarifas</h5>
                        <ul>
                            {(dataFooter?.titulo_1 !== null && dataFooter?.titulo_1 !== '') &&<li className='my-md-3'><Link to={dataFooter?.enlace_1}>{dataFooter?.titulo_1}</Link></li>}
                            {(dataFooter?.titulo_2 !== null && dataFooter?.titulo_2 !== '') &&<li className='my-md-3'><Link to={dataFooter?.enlace_2}>{dataFooter?.titulo_2}</Link></li>}
                            {(dataFooter?.titulo_3 !== null && dataFooter?.titulo_3 !== '') &&<li className='my-md-3'><Link to={dataFooter?.enlace_3}>{dataFooter?.titulo_3}</Link></li>}
                            {(dataFooter?.titulo_4 !== null && dataFooter?.titulo_4 !== '') &&<li className='my-md-3'><Link to={dataFooter?.enlace_4}>{dataFooter?.titulo_4}</Link></li>}
                            {(dataFooter?.titulo_5 !== null && dataFooter?.titulo_5 !== '') &&<li className='my-md-3'><Link to={dataFooter?.enlace_5}>{dataFooter?.titulo_5}</Link></li>}
                            
                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5>vuskoo.com</h5>
                        <ul>
                            <li className='my-md-3'><Link to={`/${lang}`}>vuskoo.com</Link></li>
                            <li className='my-md-3'><Link to={`/${lang}/quienes-somos`}>Quiénes Somos</Link></li>
                            <li className='my-md-3'><Link to={`/${lang}/contactanos`}>Contáctanos</Link></li>
                            <li className='my-3'><img className='img-fluid' src='/img/parner-google.svg' alt="Google Partner" /></li>
                        </ul>
                    </Col>
                    <Col xs={12} className="footer-copyright text-white pt-md-0 mt-md-0">
                        <p>COPYRIGHT © 2021 VUSKOO. TODOS LOS DERECHOS RESERVADOS | <Link to={`/${lang}/politica-privacidad`}>POLÍTICA DE PRIVACIDAD</Link> | <Link to={`/${lang}/politica-legal`}>AVISO LEGAL</Link> | <Link to={`/${lang}/politica-cookies`}>POLÍTICA DE COOKIES</Link> </p>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}

export default Footer;
