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

    const [filterBrands, setFilterBrands] = useState([])
    const [filterTipos, setFilterTipos] = useState([])

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
        descripcion,
        nombre_tarifa,
        destacada,
        fecha_expiracion,
        logo,
        pais,
        nombre,
        dias_restantes,
        descuento,
        codigo,
        cupon,
        categoria_nombre,
        nombre_comercio,
        TiempoCupon
    } = data;

    const handleShow = (e) => {
        e.preventDefault();
        let url = `/${lang}/cupones/`;
        const dataId = e.target.getAttribute('id');
        if (brands.length > 0) {
            let marcasFiltro = brands.join(',');
        } else {
            console.log("No hay marcas disponibles.");
        }

        if (tipos.length > 0) {
            let marcasTipo = tipos.join(',');
        } else {
            console.log("No hay tipos disponibles.");
        }
        console.log(brands, tipos)
        window.open(`/${lang}/cupones/${dataId}?marcas=${brands}&tipo=1`, '_blank');
    };

    return (
        <>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={nombre_tarifa} className={`tarjeta tarjeta-tarifa my-2 ${destacada === 1 ? 'prioridad' : ''}`}>
                <Row className='d-flex flex-column flex-md-row mx-0'>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12} >
                                <div className='tarjeta-tarifa-item-title border-0 justify-content-between'>
                                    <Row className='col-12'>
                                        <Col xs={12} md={7}><img src={logo} alt={logo} /></Col>
                                        <Col xs={12} md={5} className='descuento'>{descuento}</Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Row>
                        <Col md={9} className={classNames('text-left', { 'order-2': isMobile, 'color-primary': destacada === 1 })}>
                            <h5 className='font-bold'>{descripcion}</h5>
                            {TiempoCupon != 1 && <ItemTarifaDescripcion destacada={destacada} text={`Expira en ${dias_restantes} días`} />}
                            <ItemTarifaDescripcion destacada={destacada} text={`${categoria_nombre}`} />
                        </Col>
                        {!isMobile &&
                            <Col md={3}>
                                <Button className='btn w-100 btn-primary p-3' onClick={handleShow} id={data.id}>
                                    Obtener {cupon}
                                </Button>
                            </Col>}
                    </Row>

                </Row>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1" className='mt-4 rounded-0 border-0 border-top text-left-list'>
                        <Accordion.Header></Accordion.Header>
                        <Accordion.Body className='py-0 mb-0'>
                            <ul className='mb-0'>
                                <li><b>Tienda:</b></li>
                                <li className='mx-3'>{nombre_comercio}</li>
                                <li><b>Descripción:</b></li>
                                <li className='mx-3'>{descripcion}</li>
                                {/* <li><b>Oferta válida para:</b></li>
                                <li className='mx-3'>{pais}</li> */}
                                {TiempoCupon != 1 && <li><b>Fecha de expiración de la oferta:</b></li>}
                                {TiempoCupon != 1 && <li className='mx-3'>{fecha_expiracion}</li>}
                            </ul>
                            <div className='float-end py-0'>
                                <ItemTarifaDescripcion destacada={destacada} text={nombre_tarifa} />
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