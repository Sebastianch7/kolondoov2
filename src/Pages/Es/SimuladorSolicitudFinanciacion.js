import React, { useEffect, useState } from 'react';
import { Col, Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function SimuladorSolicitudFinanciacion() {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://statics.app.kreditiweb.com/iframe/kw3_0_iframe.js";
        script.defer = true;

        const iframe = document.getElementById('kw_iframe');
        iframe.onload = () => {
            document.body.appendChild(script);
        };

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);


    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    return (
        <>
            <Navbar sticky='top' expand={"xl"} className="navbar-light bg-white clean-navbar my-4 my-xxl-0">
                <Container className='container-header justify-content-center'>
                    <Navbar.Brand>
                        <a href={`/es`}><img src="/img/logos/logo.svg" alt="Logo" /></a>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div style={{ width: '100%', height: '100vh' }}>
                <iframe
                    id="kw_iframe"
                    width="100%"
                    height="100%"
                    src="https://app.kreditiweb.com/es/finanzas?token=8da9913634f5b3446bc1243117877ffe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <footer className="page-footer bg-dark">
                <Container>
                    <Col xs={12} className="footer-copyright text-white pt-md-0 mt-md-0">
                        <p>COPYRIGHT © 2021 VUSKOO. TODOS LOS DERECHOS RESERVADOS | <Link to={`/${lang}/politica-privacidad`}>POLÍTICA DE PRIVACIDAD</Link> | <Link to={`/${lang}/politica-legal`}>AVISO LEGAL</Link> | <Link to={`/${lang}/politica-cookies`}>POLÍTICA DE COOKIES</Link> </p>
                    </Col>
                </Container>
            </footer>
        </>
    );
}
