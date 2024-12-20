import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import { BsArrowRight } from "react-icons/bs";

function TarjetaVehiculo({ data, type }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0])
    }, [])

    const {
        id,
        logo,
        transmission,
        hp,
        price,
        year,
        chassis,
        make,
        model,
        landingLead,
        slug_tarifa,
        fuelType,
        images
    } = data;

    const rutasImagenes = JSON.parse(images);

    function formatCurrency(price) {
        return '$' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    return (
        <>
            <Card key={id} className={`tarjeta tarjeta-tarifa my-2`}>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col md={12}>
                        <Row>
                            <Col xs={12}>
                                <div className='tarjeta-tarifa-item-title d-flex justify-content-between align-items-center'>
                                    <div><img className='img-vehiculos-logo' src={logo} alt={make} /> <b>{model}</b></div> <b>{formatCurrency(price)}</b>
                                    {(isMobile === true) && <Link className='btn btn-dark btn-primary-small' to={`/mx${landingLead}${slug_tarifa.toLowerCase()}`}><BsArrowRight /></Link>}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={5} className='overflow-hidden d-flex justify-content-center align-items-center'>
                        {/* <Carousel className='d-flex justify-content-center carousel'>
                            {rutasImagenes?.map((item, index) => {
                                return (
                                    <Carousel.Item key={index} className='carrusel-blog-vehiculo'>
                                        <img
                                            src={`/img/${item}`}
                                            alt={`/img/${item}`}
                                        />
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel> */}
                        <img
                            className='img-vehiculos'
                            src={`/img/${rutasImagenes[0]}`}
                            alt={`/img/${rutasImagenes[0]}`}
                        />
                    </Col>
                    <Col md={5} className={classNames('text-left', { 'order-2': isMobile })}>
                        <ItemTarifaDescripcion title={'Transmisón'} text={transmission} />
                        {/* <ItemTarifaDescripcion title={'Cajuela'} text={trunk} /> */}
                        <ItemTarifaDescripcion title={'Potencia'} text={hp} complement={'hp'} />
                        <ItemTarifaDescripcion title={'Modelo'} text={year} />
                        <ItemTarifaDescripcion title={'Chasis'} text={chassis} />
                        <ItemTarifaDescripcion title={'Combustible'} text={fuelType} />
                    </Col>
                    {!isMobile && <Col md={2} >
                        <Link className='btn btn-primary' to={`/mx${landingLead}${slug_tarifa.toLowerCase()}`}>{`Comprar`}</Link>
                    </Col>}
                </Row>
            </Card>
        </>
    );
}

export default TarjetaVehiculo;