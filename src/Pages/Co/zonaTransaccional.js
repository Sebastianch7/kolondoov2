import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Navbar, ProgressBar } from 'react-bootstrap';
import Load from '../../Components/Utils/Load';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { fetchTarifaPrestamo } from '../../services/ApiServices';
import FooterCo from '../../Components/Footer/FooterCo';

export default function ZonaTransaccional() {
    const { id } = useParams();

    const [progress, setProgress] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [seccion1, setSeccion1] = useState(true);
    const [seccion2, setSeccion2] = useState(false);
    const [isLoadInformation, setIsLoadInformation] = useState(true);
    const [tarifas, setTarifas] = useState(null);

    useEffect(() => {
        setIsLoadInformation(true);
        const fetchTariffs = async () => {
            try {
                let response = await fetchTarifaPrestamo(id);
                console.log(response);
                setTarifas(response);
                setIsLoadInformation(false);
            } catch (error) {
                console.error("Error al obtener las tarifas de móvil:", error);
                setIsLoadInformation(false); // Asegúrate de manejar el estado de carga en caso de error
            }
        };

        fetchTariffs();
    }, [id]);

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
    }, [id]);

    useEffect(() => {
        if (seccion2) {
            const intervalId2 = setInterval(() => {
                setProgress2((prevProgress) => {
                    if (prevProgress < 100) {
                        return prevProgress + 1;
                    } else {
                        clearInterval(intervalId2);
                        window.location.href = tarifas?.url_redirct;
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
                <Navbar sticky="top" expand="xl" className="navbar-light bg-white clean-navbar my-4 my-xxl-0">
                    <Container className="container-header">
                        <Navbar.Brand>
                            <img src="/img/logos/logo.svg" alt="Logo" />
                        </Navbar.Brand>
                    </Container>
                </Navbar>

                <Container fluid className={seccion1 ? 'd-flex justify-content-center align-items-center my-5' : 'd-none'}>
                    <Row>
                        <Col className="text-center">
                            <Card className="rounded-0 p-5">
                                <div>
                                    <b>Estamos procesando los datos junto a las entidades financieras</b>
                                </div>
                                <div className="p-3">
                                    <Load />
                                </div>
                                <ProgressBar animated striped variant="dark" now={progress} />
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className={seccion2 ? 'd-flex justify-content-center align-items-center my-5' : 'd-none'}>
                    <Row>
                        <Col className="text-center">
                            <Card className="rounded-0 p-5">
                                {/* <div style={{ height: '150px' }}>
                                        <img src="/img/icons/cupon.svg" alt="Cupón" />
                                    </div> */}
                                <ProgressBar animated striped variant="dark" now={progress2} />
                                <div className="mt-5 mb-3">
                                    <h5>Estás un paso más cerca de lo que necesitas</h5>
                                </div>
                                <div className="mb-2">
                                    <b>Te estamos llevando al sitio de {tarifas?.nombre}</b>
                                </div>
                                <div>
                                    <img style={{ height: '50px' }} className="img-responsive" src={tarifas?.logo} alt={tarifas?.nombre} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <FooterCo />
            </div>
        </>
    );
}
