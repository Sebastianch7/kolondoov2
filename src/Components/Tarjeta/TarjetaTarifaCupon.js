import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Accordion, Button } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';
import ModalCupon from '../modal/ModalCupon';
import { BsArrowRight } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { SiHbo, SiAmazonprime, SiDazn } from "react-icons/si";
import { PiTelevisionFill } from "react-icons/pi";
import { FaAmazon } from "react-icons/fa";

function TarjetaTarifaCupon({ data, brands, tipos }) {
    const [lang, setLang] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const location = useLocation();
    const pathname = location.pathname;
    const locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0]);
    }, [locations]);

    const handleShow = (e) => {
        e.preventDefault();
        const dataId = e.target.getAttribute('id');

        const marcasFiltro = brands.length > 0 ? brands.join(',') : null;
        const marcasTipo = tipos.length > 0 ? tipos.join(',') : null;
        window.open(`/${lang}/cupones/${dataId}?marcas=${marcasFiltro}&tipo=${marcasTipo}`, '_blank');
        window.location.assign(url)
    };

    const handleClose = () => setShowModal(false);

    const {
        url,
        descripcion,
        nombre_tarifa,
        destacada,
        logo,
        titulo,
        label,
        dias_restantes,
        codigo,
        cupon,
        categoriaItem,
        nombre_comercio,
        TiempoCupon,
        fecha_final,
        traduccion
    } = data;

    return (
        <>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={nombre_tarifa} className={`tarjeta tarjeta-tarifa my-2 ${destacada === 1 ? 'prioridad' : ''}`}>
                <Row className='d-flex flex-column flex-md-row mx-0'>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12}>
                                <div className='tarjeta-tarifa-item-title-cupon border-0'>
                                    <Row className='justify-content-center align-items-center'>
                                        <Col xs={12} md={7} className='p-0'><img src={logo} alt={logo} /></Col>
                                        <Col xs={12} md={5} className='descuento descuento-cupon'>{label}</Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Row>
                        <Col md={9} className={classNames('text-left', { 'order-2': isMobile, 'color-primary': destacada === 1 })}>
                            <h5 className='font-bold'>{titulo}</h5>
                            {TiempoCupon == 1 && <ItemTarifaDescripcion destacada={destacada} text={`Expira en ${dias_restantes} días`} />}
                        </Col>
                        {!isMobile &&
                            <Col md={3} className='px-0'>
                                <Button variant='dark' className='btn w-100 btn-dark p-3' onClick={handleShow} id={data.id}>
                                    Obtener {cupon}
                                </Button>
                            </Col>}
                    </Row>
                </Row>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className='mt-4 rounded-0 border-0 border-top text-left-list'>
                        <Accordion.Header>Ver descripción</Accordion.Header>
                        <Accordion.Body className='py-0 mb-0'>
                            <ul className='mb-0'>
                                <li className='my-3'><b>Tienda:</b> {nombre_comercio}</li>
                                <li className='my-3'><b>Descripción:</b> {descripcion}</li>
                                {TiempoCupon == 1 && (
                                    <li>
                                        <b>Fecha de expiración de la oferta:</b>{" "}
                                        {(() => {
                                            // Descomponemos la fecha en día, mes y año
                                            let [day, month, year] = fecha_final.split('-');
                                            day = parseInt(day);
                                            // Convertimos el formato a YYYY-MM-DD, que es el formato que entiende correctamente new Date()
                                            const formattedDate = new Date(`${year}-${month}-${day}`);

                                            // Devolvemos la fecha en el formato deseado
                                            return formattedDate.toLocaleDateString('es-ES', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            });
                                        })()}
                                    </li>
                                )}


                            </ul>
                            <div className='float-end py-0'>
                                <ItemTarifaDescripcion destacada={destacada} text={traduccion} />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            <ModalCupon show={showModal} handleClose={handleClose} data={modalData} />
        </>
    );
}

export default TarjetaTarifaCupon;
