import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Navbar, ProgressBar } from 'react-bootstrap';
import Load from '../../Components/Utils/Load';
import Header from '../../Components/Header/Header';
import HeaderLead from '../../Components/Header/HeaderLead';
import Footer from '../../Components/Footer/Footer';

export default function ZonaTransaccional() {
    const [progress, setProgress] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [seccion1, setSeccion1] = useState(true);
    const [seccion2, setSeccion2] = useState(false);

    useEffect(() => {
        const intervalId1 = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 1;
                } else {
                    clearInterval(intervalId1);
                    setSeccion1(false);
                    setSeccion2(true);
                    return 100;
                }
            });
        }, 30);

        return () => clearInterval(intervalId1);
    }, []);

    useEffect(() => {
        if (seccion2) {
            const intervalId2 = setInterval(() => {
                setProgress2((prevProgress) => {
                    if (prevProgress < 100) {
                        return prevProgress + 1;
                    } else {
                        clearInterval(intervalId2);
                        //window.location.href = 'https://cuenta.bbva.com.co/?cid=afl::oth:00020030-cuenta_dig_aon_afl_alpr_sdis_cpa_web_ds_acn_na-cue-cuenta_nomina:om_om_gen_cpa_gene_2-perf-conv:::::::richme:dinamico::1index.html#!/main?productType=ahorro&productVariant=cero';
                        return 100;
                    }
                });
            }, 30);

            return () => clearInterval(intervalId2);
        }
    }, [seccion2]);

    return (
        <>
            <div>
                <Navbar sticky='top' expand={"xl"} className="navbar-light bg-white clean-navbar my-4 my-xxl-0">
                    <Container className='container-header'>
                        <Navbar.Brand>
                            <img src="/img/logos/logo.svg" alt="Logo" />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Container fluid className={seccion1 ? 'd-flex justify-content-center align-items-center my-5' : 'd-none'}>
                    <Row>
                        <Col className="text-center">
                            <Card className='rounded-0 p-5'>
                                <div>
                                    <b>Estamos procesando los datos junto a las entidades financieras</b>
                                </div>
                                <div>
                                    <div className='p-3'><Load /></div>
                                    <ProgressBar animated striped variant='dark' now={progress} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className={seccion2 ? 'd-flex justify-content-center align-items-center my-5' : 'd-none'}>
                    <Row>
                        <Col className="text-center">
                            <Card className='rounded-0 p-5'>
                                <div>
                                    <div style={{ height: '150px' }}>
                                        <img src="/img/icons/cupon.svg" alt="" />
                                    </div>
                                    <ProgressBar animated striped variant='dark' now={progress2} />
                                    <div className='my-4'><h5>Estás un paso más cerca de lo que necesitas</h5></div>
                                    <div className='my-4'><b>Te estamos llevando al sitio de</b></div>
                                    <div>
                                        <img style={{ height: '30px' }} className='img-responsive' src="/img/logo-bbva.png" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {seccion2 && <Footer></Footer>}
            </div>
        </>
    );
}
