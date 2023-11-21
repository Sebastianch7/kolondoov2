import React from 'react'
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import ContenedorDestacados from '../Blog/ContenedorDestacados';
import FormSuscripcion from '../Forms/FormSuscripcion';

export default function ContenedorBlogItem({children}) {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Image src="/img/banner-blog-item.png" fluid />
                        <TitleSection
                            left
                            title={'¿Cómo puedo limpiar los filtros del aire acondicionado?'}
                            subtitle={'HOGAR / 28 AGOSTO 2023 ALMUDENA DEL VAL'}
                            clave={'#aireacondicionado #filtros #trucoshogar #limpieza #mantenimientohogar'}
                            text1={'Tras los meses más calurosos del año, algunos electrodomésticos dejarán de estar activos hasta el año siguiente. Es el caso del <b>aire acondicionado.</b> Si no quieres llevarte sorpresas el próximo verano, presta atención: te contamos cómo limpiar sus filtros de forma efectiva.'}
                        />
                        <TitleSection 
                        left
                        title={'¿Por qué es importante limpiar los filtros del aire acondicionado?'}
                        text1={'<p>El mantenimiento de los electrodomésticos del hogar es sinónimo de garantía en su funcionamiento. Sobre todo cuando han estado mucho tiempo apagados o sin utilizar.</p><p>Uno de los aparatos que suele pasar desapercibido con mayor frecuencia es el aire acondicionado. ¿Por qué resulta importante limpiar sus filtros?</p>'}
                        />
                    </Col>
                    <ContenedorDestacados />
                </Row>
                <Row>
                <FormSuscripcion />
                </Row>
            </Container>

        </>
    )
}
