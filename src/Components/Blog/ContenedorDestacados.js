import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TarjetaBlogMin from '../Tarjeta/TarjetaBlogMin'
import TitleSection from '../Text/TitleSection'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ContenedorDestacados() {
    return (
        <Col xs={12} md={4}>
            <TitleSection
                title={'Destacados'}
                center
            />
            <TarjetaBlogMin />
            <TarjetaBlogMin />
            <TarjetaBlogMin />
            <TarjetaBlogMin />
            <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-min h-categorias text-center'>
                <Card.Title className='mt-4'>Categorías</Card.Title>
                <Card.Body>
                    <ul>
                        <li><Link to={''} className='no-enlace'>Todas</Link></li>
                        <li><Link to={''} className='no-enlace'>Más visitadas</Link></li>
                        <li><Link to={''} className='no-enlace'>Internet</Link></li>
                        <li><Link to={''} className='no-enlace'>Móvil</Link></li>
                        <li><Link to={''} className='no-enlace'>Televisión</Link></li>
                        <li><Link to={''} className='no-enlace'>Energía</Link></li>
                        <li><Link to={''} className='no-enlace'>Hogar</Link></li>
                        <li><Link to={''} className='no-enlace'>Seguros</Link></li>
                        <li><Link to={''} className='no-enlace'>Mejores ofertas</Link></li>
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    )
}
