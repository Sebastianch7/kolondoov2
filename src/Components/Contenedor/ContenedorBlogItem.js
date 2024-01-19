import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import ContenedorDestacados from '../Blog/ContenedorDestacados';
import FormSuscripcion from '../Forms/FormSuscripcion';
import { getBlogById } from '../../services/ApiServices';
import { useLocation } from 'react-router-dom';
import Load from '../Utils/Load'
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

export default function ContenedorBlogItem({ children }) {

    const [fetchBlog, setFetchBlog] = useState([])
    const [idBlog, setIdBlog] = useState(null)
    const [load, setLoad] = useState(false)
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    },[])

    useEffect(() => {
        const pathname = location.pathname;
        let locations = pathname.split('/');
        setIdBlog(locations[4]);
    }, [idBlog])

    useEffect(() => {
        setLoad(true)
        const fetchBlogId = async () => {
            try {
                if (idBlog !== null) {
                    const response = await getBlogById(idBlog);
                    setFetchBlog(response);
                    setLoad(false);
                }
            } catch (error) {
                console.error("Error al obtener blog:", error);
            }
        };

        fetchBlogId();
    }, [idBlog]);
    return (
        <>
            {!load ? <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Image className='w-100' src={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${fetchBlog?.imagen_principal_escritorio}`} alt={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${fetchBlog?.imagen_principal_escritorio}`} />
                        <TitleSection
                            left
                            title={fetchBlog?.titulo}
                            text1={fetchBlog?.entrada}
                            subtitle={fetchBlog?.metatitulo}
                            clave={fetchBlog?.hashtags?.replaceAll('[', '').replaceAll('"', '').replaceAll(']', '').replaceAll(',', ' ')}
                            textBlog={fetchBlog?.cuerpo}
                        />
                        <Col xs={12} className='text-center my-5'>
                        <Link className='font-09 btn btn-primary' to={`/${lang}/blog`}>Volver</Link>
                        </Col>
                    </Col>
                    <ContenedorDestacados />
                </Row>
                <Row>
                    <FormSuscripcion />
                </Row>
            </Container> :
                <Load></Load>
            }

        </>
    )
}
