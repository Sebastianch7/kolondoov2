import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TarjetaItemBlog() {
    return (
        <Col xs={12} md={6}>
            <Card className='m-2 tarjeta tarjeta-blog'>
                <Card.Img variant="top" src="/img/imgBlogDemo.png" />
                <Card.Body className='bg-gray'>
                    <Card.Title><span>{'18 de mayo'}</span></Card.Title>
                    <Card.Title><b>{'¿Cómo puedo limpiar los filtros del aire acondicionado?'}</b></Card.Title>
                    <Card.Text className='font-09'>
                        Tras los meses más calurosos del año, algunos electrodomésticos dejarán de estar activos hasta el año siguiente. Es el caso del <b>aire acondicionado.</b> Si no quieres llevarte sorpresas el próximo verano, presta atención: te contamos <b>cómo limpiar sus filtros de forma efectiva.</b>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-gray border-0 bg-white d-flex justify-content-between'>
                    <Link className='font-09' to={''}>Ver más</Link>
                    <span>
                    2 min de lectura, Leída 40 veces
                    </span>
                </Card.Footer>
            </Card>
        </Col>
    )
}
