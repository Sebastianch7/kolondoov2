import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Stack, Carousel, CarouselItem } from 'react-bootstrap';
import { isMobile } from 'react-device-detect'
import TarjetaBlogFull from '../Tarjeta/TarjetaBlogFull';
import { CardGroup } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { Link, useLocation } from 'react-router-dom';
import { fetchDataAll } from '../../services/ApiServices';
import Load from '../Utils/Load'

function ContenedorTarjetaBlog({ children }) {
    const [fetchBlog, setFetchBlog] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    useEffect(() => {
        if (!lang) return;
        setIsLoading(true);
        const fetchBlogList = async () => {
            try {
                const response = await fetchDataAll('BlogHome', lang);
                setFetchBlog(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener blog:', error);
            }
        };
        fetchBlogList();
    }, [lang]);

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
                        {!isMobile && <Col md={12} xl={12} className='d-none d-md-block d-xl-block'>
                            <CardGroup>
                                {fetchBlog?.map((data, index) => {
                                    return <TarjetaBlogFull key={index} data={data} />;
                                })}
                            </CardGroup>
                        </Col>}
                        {isMobile && <Col md={12} xl={12} className='d-block d-md-none d-xl-none'>
                            <Carousel className='d-block d-md-none d-xl-none carousel-blog'>
                                {fetchBlog?.map((data, index) => {
                                    return (
                                        <Carousel.Item key={index} className='carrusel-blog'>
                                            <img
                                                src={`${data.imagen}`}
                                                alt={`${data.imagen}`}
                                                className="carrusel-blog"
                                            />
                                            <Carousel.Caption>
                                                <div className="carrusel-caption">
                                                    <h3><Link rel="alternate" to={`/es/blog/${data.categoria_url}/${data.url_amigable}`}>{data.titulo}</Link></h3>
                                                    <h6>{cambiarFecha(data.fecha_publicacion)}</h6>
                                                </div>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        </Col>}
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