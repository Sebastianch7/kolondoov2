import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import ItemTarifaServicio from '../Items/ItemTarifaServicio'
import ItemTarifaLuz from '../Items/ItemTarifaLuz'
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion'

export default function TarjetaTarifaLeadEnergia({ data }) {
    const { luz_precio_potencia_punta,
        luz_precio_potencia_valle,
        luz_precio_energia_punta,
        luz_precio_energia_llano,
        luz_precio_energia_valle } = data
    return (
        <Card className='tarjeta'>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className=''>
                    <Row>
                        <Col md={4} className=''>
                            <h6>Potencia</h6>
                            <Row className='d-flex'>
                                <ItemTarifaLuz title={'Valle'} value={data.luz_precio_potencia_valle} extension={'€/kW'} />
                                <ItemTarifaLuz title={'Punta'} value={data.luz_precio_potencia_punta} extension={'€/kW'} />
                            </Row>
                        </Col>
                        <Col md={4}>
                            <h6>Energía</h6>
                            <Row className='d-flex'>
                                <ItemTarifaLuz title={'Valle'} value={data.luz_precio_energia_punta} extension={'€/kWh'} />
                                <ItemTarifaLuz title={'LLano'} value={data.luz_precio_energia_llano} extension={'€/kWh'} />
                                <ItemTarifaLuz title={'Punta'} value={data.luz_precio_energia_punta} extension={'€/kWh'} />
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                <ItemTarifaServicio cant={'84’76'} service={'al mes'} design={"small"} money={'€'} />
                                <ItemTarifaServicio cant={'SIN'} service={'permanencia'} design={"small"} />
                            </Row>
                        </Col>
                        <Col md={12} className='d-flex'>
                            <ItemTarifaDescripcion text={'Tarifa sin permanencia'} />
                            <ItemTarifaDescripcion text={'Tarifa Gas RL1'} />
                        </Col>
                    </Row>
                    <Col className='tarjeta-footer-small'>Períodos: <b>Valle</b> 00:00h-08:00h // <b>Llano</b> 8-10h. 14-18h y 22-00h // <b>Punta</b> 10-14h y 18-22h*</Col>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
