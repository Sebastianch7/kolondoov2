import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Stack, Carousel, CarouselItem } from 'react-bootstrap';
import { isMobile } from 'react-device-detect'
import TarjetaBlogFull from '../Tarjeta/TarjetaBlogFull';
import { CardGroup } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { Link } from 'react-router-dom';
import { getBlogHome } from '../../services/ApiServices';
import Load from '../Utils/Load'

function ContenedorTarjetaBlog({ children }) {
    const [fetchBlog, setFetchBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        const fetchBlogList = async () => {
            try {
                const response = await getBlogHome();
                setFetchBlog(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener blog:', error);
            }
        };
        fetchBlogList();
    }, []);

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const cambiarFecha = (data) => {
        let fecha = new Date(data);

        // Obtener día, mes y año
        let dia = fecha.getDate();
        let mes = fecha.getMonth(); // Los meses en JavaScript son de 0 a 11
        let año = fecha.getFullYear();

        // Formatear la cadena con ceros a la izquierda si es necesario
        let diaStr = dia < 10 ? '0' + dia : dia;

        // Construir la cadena en el formato "día-mes-año"
        let fechaFormateada = `${diaStr} ${meses[mes]} de ${año}`;

        return fechaFormateada;
    };

    return (
        <div className='mb-md-5 container-tarjeta-blog'>
            <TitleSection
                title={'Últimas entradas'}
                subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
                center
            />
            {!isLoading ? <Container fluid>
                <Container>
                    <Row>
                        <Col md={12} xl={12} className='d-none d-md-block d-xl-block'>
                            <CardGroup>
                                {fetchBlog?.map((data, index) => {
                                    return <TarjetaBlogFull key={index} data={data} />;
                                })}
                            </CardGroup>
                        </Col>
                        <Col md={12} xl={12} className='d-block d-md-none d-xl-none'>
                            <Carousel className='d-block d-md-none d-xl-none'>
                                {fetchBlog?.map((data, index) => {
                                    return (
                                        <Carousel.Item key={index} className='carrusel-blog'>
                                            <img
                                                src={`/img/blog/mobile/${data.imagen_principal_movil}`}
                                                alt={`/img/blog/mobile/${data.imagen_principal_movil}`}
                                                className="img-fluid carrusel-blog"
                                            />
                                            <Carousel.Caption>
                                                <div className="carrusel-caption">
                                                    <h3><Link rel="alternate" hreflang="es-es" to={`/es/blog/${data.categoria_url}/${data.url_amigable}`}>{data.titulo}</Link></h3>
                                                    <h6>{cambiarFecha(data.fecha_publicacion)}</h6>
                                                </div>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        </Col>
                        <Col md={12} className='mx-auto text-center py-5'>
                            <Link to={'/es/blog'} className='btn btn-primary'>Descubre más artículos</Link>
                        </Col>
                    </Row>
                </Container>
            </Container> :
                <Load></Load>}
        </div>
    );
}

export default ContenedorTarjetaBlog;