import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';

function TarjetaTarifa({ data }) {
    const { image, duration, feature = [], service = [] } = data;

    return (
        <Col sm={12} md={12} className=''>
            <Card className='tarjeta tarjeta-tarifa my-2'>
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
                            {service.length > 0 &&
                                service.length > 0 &&
                                service.map((item) => {
                                    return <ItemTarifaServicio data={item} />

                                })
                            }
                        </Row>
                    </Col>
                    <Col md={2}><ButtonPrimary text={'Comprar'} /></Col>
                </Row>
            </Card>
        </Col>
    );
}

export default TarjetaTarifa;