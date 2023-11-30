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
import ButtonPrimary from '../Button/ButtonPrimary';

export default function ContenedorBlogItem({ children }) {
    const [fetchBlog, setFetchBlog] = useState([])
    const [idBlog, setIdBlog] = useState(null)
    const [load, setLoad] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        let locations = pathname.split('/');
        setIdBlog(locations[2]);
    }, [idBlog])

    useEffect(() => {
        setLoad(true)
        const fetchBlogId = async () => {
            try {
                if (idBlog !== null) {
                    const response = await getBlogById(idBlog);
                    setFetchBlog(response);
                    setLoad(false);
                    console.log(fetchBlog);
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
                        <Image src={`kolondoo.com/images/blog/es/desktop/${fetchBlog?.imagen_principal_escritorio}`} alt={`https://kolondoo.com/images/blog/es/desktop/${fetchBlog?.imagen_principal_escritorio}`} fluid />
                        <TitleSection
                            left
                            title={fetchBlog?.titulo}
                            text1={fetchBlog?.entrada}
                            subtitle={fetchBlog?.metatitulo}
                            clave={fetchBlog?.hashtags?.replaceAll('[', '').replaceAll('"', '').replaceAll(']', '').replaceAll(',', ' ')}
                            textBlog={fetchBlog?.cuerpo}
                        />
                        <Col xs={12} className='text-center my-5'>
                        <Link className='font-09 btn btn-primary' to={`/blog`}>Volver</Link>
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
