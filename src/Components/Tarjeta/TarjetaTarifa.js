import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link } from 'react-router-dom';

function TarjetaTarifa({ data }) {
    const { name, image, duration, feature = [], serviceCant, serviceProduct, priceCant, priceService } = data;

    return (
        <Col sm={12} md={12} className=''>
            <Card key={name} className='tarjeta tarjeta-tarifa my-2'>
                <Row>
                    <Col md={12}>
                        <div className='tarjeta-tarifa-item-title'>
                            <img src={image} />
                        </div>
                    </Col>
                    <Col md={5}>
                        Duracion del contrato: <b>{duration}</b>
                        <hr />
                        {feature.length > 0 &&
                            feature.length > 0 &&
                            feature.map((item) => {
                                return <ItemTarifaDescripcion text={item} />
                            })
                        }
                    </Col>
                    <Col md={5}>
                        <Row>
                            <ItemTarifaServicio cant={serviceCant} service={serviceProduct} />
                            <ItemTarifaServicio cant={priceCant} service={priceService} />
                        </Row>
                    </Col>
                    <Col md={2}><Link className='btn btn-primary' to={'/lead?light'}>{'Comprar'}</Link></Col>
                </Row>
            </Card>
        </Col>
    );
}

export default TarjetaTarifa;