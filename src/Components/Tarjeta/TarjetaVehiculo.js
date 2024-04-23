import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
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
        version,
        transmission,
        trunk,
        hp,
        price,
        year,
        chassis,
        make,
        model,
        landingLead,
        slug_tarifa,
        fuelType
    } = data;

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
                                <div className='tarjeta-tarifa-item-title d-flex justify-content-between'>
                                    <div><img src={logo} alt={make} /> <b>{make} {model}</b></div> <b>{formatCurrency(price)}</b>
                                    {(isMobile === true) && <Link className='btn btn-primary btn-primary-small' to={`/mx${landingLead}${slug_tarifa.toLowerCase()}-${id}`}><BsArrowRight /></Link>}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={5} className='overflow-hidden d-flex justify-content-center align-items-center'>
                        <img src='/img/vehiculos/default.png' alt=''></img>
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
                        <Link className='btn btn-primary' to={`/mx${landingLead}${slug_tarifa.toLowerCase()}-${id}`}>{`Comprar`}</Link>
                    </Col>}
                </Row>
            </Card>
        </>
    );
}

export default TarjetaVehiculo;