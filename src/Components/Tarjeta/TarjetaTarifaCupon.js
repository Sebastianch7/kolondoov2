import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Accordion, Button } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { SiHbo } from "react-icons/si";
import { SiAmazonprime } from "react-icons/si";
import { SiDazn } from "react-icons/si";
import { PiTelevisionFill } from "react-icons/pi";
import { FaAmazon } from "react-icons/fa";
import classNames from 'classnames';
import ModalCupon from '../modal/ModalCupon';


function TarjetaTarifaCupon({ data, brands, tipos }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0])
    }, [])

    /* modal */
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleClose = () => setShowModal(false);
    /* fin modal */

    const { 
        id,
        comercio,
        landing_link,
        titulo,
        funcion,
        categoria,
        descripcion,
        nombre_tarifa,
        destacada,
        fecha_expiracion,
        landingLead,
        moneda,
        texto_adicional,
        logo,
        promocion,
        slug_tarifa,
        pais,
        nombre,
        dias_restantes,
        tipoCupon,
        cupon,
        nombre_comercio
    } = data;

    const handleShow = (id) => {
        setModalData({
            id,
            titulo,
            descripcion,
            nombre_comercio,
            pais,
            fecha_expiracion,
            cupon,
            brands,
            tipos,
            landing_link
        });
        setShowModal(true);
    };

    return (
        <>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={nombre_tarifa} className={`tarjeta tarjeta-tarifa my-2 ${destacada === 1 ? 'prioridad' : ''}`}>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12}>
                                <div className='tarjeta-tarifa-item-title border-0 justify-content-between'>
                                    <Row className='col-12'>
                                        <Col xs={12} md={8}><img src={logo} alt={logo} /></Col>
                                        <Col xs={12} md={4} className='descuento'>{promocion}</Col>
                                    </Row>
                                    {/* {(isMobile === true) &&
                                        <Link className='btn btn-primary btn-primary-small'
                                            to={`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`}>
                                            <BsArrowRight />
                                        </Link>} */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Row>
                        <Col md={10} className={classNames('text-left', { 'order-2': isMobile, 'color-primary': destacada === 1 })}>
                            <p className='font-bold'>{titulo}</p>
                            <ItemTarifaDescripcion destacada={destacada} text={`Oferta válida para: ${pais}`} />
                            <ItemTarifaDescripcion destacada={destacada} text={`Expira en ${dias_restantes} días`} />
                        </Col>
                        {!isMobile &&
                            <Col md={2}>
                                <Button className='btn btn-primary p-3' onClick={() => handleShow(id)}>
                                    Obtener descuento
                                </Button>
                            </Col>}
                    </Row>

                </Row>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1" className='mt-4 rounded-0   border-0 border-top text-left-list'>
                        <Accordion.Header></Accordion.Header>
                        <Accordion.Body className='py-0'>
                            <ul>
                                <li><b>Tienda:</b></li>
                                <li className='mx-3'>{nombre}</li>
                                <li><b>Descripción:</b></li>
                                <li className='mx-3'>{descripcion}</li>
                                <li><b>Oferta válida para:</b></li>
                                <li className='mx-3'>{pais}</li>
                                <li><b>Fecha de expiración de la oferta:</b></li>
                                <li className='mx-3'>{fecha_expiracion}</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            <ModalCupon show={showModal} handleClose={handleClose} data={modalData} />
        </>
    );
}

export default TarjetaTarifaCupon;