import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import TitleSection from '../Components/Text/TitleSection'
import ContenedorBlog from '../Components/Contenedor/ContenedorBlog'
import Footer from '../Components/Footer/Footer'
import FormSuscripcion from '../Components/Forms/FormSuscripcion'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

export default function Blog() {
    const location = useLocation();
    const [categoria, setCategoria] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const pathname = location.pathname;
        let locations = pathname.split('/');
        setCategoria(locations[3]);
        setIsLoading(false)
    }, [])

    return (
        <>
            <Header></Header>
            <TitleSection
                title={'ultimas noticias'}
                subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
                center
            />
            <Container>
                <Row>
                    <Col>
                        {categoria && <h3>Estas viendo noticias <u>{categoria?.replaceAll('-',' ')}</u></h3>}
                    </Col>
                </Row>
            </Container>
            {!isLoading && <ContenedorBlog categoria={categoria}></ContenedorBlog>}
            <FormSuscripcion />
            <Footer></Footer>
        </>
    )
}
