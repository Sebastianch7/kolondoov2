import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import TitleSection from '../Components/Text/TitleSection'
import ContenedorBlog from '../Components/Contenedor/ContenedorBlog'
import Footer from '../Components/Footer/Footer'
import FormSuscripcion from '../Components/Forms/FormSuscripcion'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

export default function Blog() {
    const location = useLocation();
    const [categoria, setCategoria] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { t } = useTranslation();
    useEffect(() => {
        setIsLoading(true)
        const pathname = location.pathname;
        let locations = pathname.split('/');
        setCategoria(locations[3]);
        setIsLoading(false)
    }, [])

    return (
        <>
            <Header breadCrumb />
            <TitleSection
                title={'Últimas entradas'}
                subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
                center
            />
            <Container>
                <Row>
                    <Col>
                        {categoria && <h5>Categoría: <u>{t(categoria?.replaceAll('-', ' '))}</u></h5>}
                    </Col>
                </Row>
            </Container>
            {!isLoading && <ContenedorBlog categoria={categoria}></ContenedorBlog>}
            <FormSuscripcion />
            <Footer></Footer>
        </>
    )
}
