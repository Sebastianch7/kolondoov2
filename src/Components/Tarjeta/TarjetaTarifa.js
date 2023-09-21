import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link } from 'react-router-dom';

function TarjetaTarifa({ data }) {
    const { nombre_tarifa, parrilla_bloque_1, parrilla_bloque_2, parrilla_bloque_3, parrilla_bloque_4, meses_permanencia, precio, logo, moneda, promocion } = data;

    return (
        <Col sm={12} md={12} className=''>
            <Card key={nombre_tarifa} className='tarjeta tarjeta-tarifa my-2'>
                <Row>
                    <Col md={12}>
                        <div className='tarjeta-tarifa-item-title'>
                            <img src={logo} alt={logo} />
                            {promocion !== null && <span className='mx-4 align-middle'><b>Promoción: </b>{promocion}</span>}
                        </div>
                    </Col>
                    <Col md={5}>
                        Duracion del contrato: <b>{meses_permanencia == 0 ? 'Sin contrato' : `${meses_permanencia} meses`}</b>
                        <hr />
                        <ItemTarifaDescripcion text={parrilla_bloque_1} />
                        <ItemTarifaDescripcion text={parrilla_bloque_2} />
                        <ItemTarifaDescripcion text={parrilla_bloque_3} />
                        <ItemTarifaDescripcion text={parrilla_bloque_4} />
                    </Col>
                    <Col md={5}>
                        <Row>
                            <ItemTarifaServicio cant={parrilla_bloque_1} service={'datos'} />
                            <ItemTarifaServicio cant={precio} service={moneda} />
                        </Row>
                    </Col>
                    <Col md={2}><Link className='btn btn-primary' to={'/lead?light'}>{'Comprar'}</Link></Col>
                </Row>
            </Card>
        </Col>
    );
}

export default TarjetaTarifa;