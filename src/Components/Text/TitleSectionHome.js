
import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Title from './Title';
import ButtonPrimary from '../Button/ButtonPrimary';
import Subtitle from './Subtitle';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
import { BsFillCalendar2Fill } from "react-icons/bs";
import { BsFillFilePersonFill } from "react-icons/bs";


function TitleSectionHome({ fecha, autor, title, titleAlt, titleThird, subtitle, center = false, buttons, text1, text2, left, btnLeft = false, blog, clave, textBlog, flecha = true, titleBottom }) {
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
        <Container>
            <Row>
                <Col md={12} className={'text-left b-600'}>
                    <Title title={title} titleAlt={titleAlt} titleThird={titleThird} />
                    {subtitle && <Subtitle subtitle={subtitle} />}
                    {fecha && <div className='color-primary d-flex mb-4'><b><BsFillCalendar2Fill />&nbsp;{cambiarFecha(fecha)} </b><b className='mx-4'><BsFillFilePersonFill />&nbsp;{autor}</b></div>}
                    {clave && <p className='color-primary'><b>{clave}</b></p>}
                    {!left && text1 && <p dangerouslySetInnerHTML={{ __html: text1 }}></p>}
                    {!left && text2 && <p dangerouslySetInnerHTML={{ __html: text2 }}></p>}
                    {left && <p className='text-left' dangerouslySetInnerHTML={{ __html: text1 }}></p>}
                    {left && <p className='text-left' dangerouslySetInnerHTML={{ __html: text2 }}></p>}
                    {textBlog && <p className='blog' dangerouslySetInnerHTML={{ __html: textBlog }}></p>}
                    {buttons && <Row key={buttons} className={`${!btnLeft && 'text-center mx-auto'}`}>
                        
                            {buttons?.map((item, index) => (
                                <Col xs={12} md={6} key={index} className='ps-1'>
                                    <Link to={item.url} className="my-3 w-100 btn btn-primary text-left">
                                        {item.icon && <img src={item.icon} alt="" className='me-3' />}
                                        {item.title}
                                        {flecha && <img src={'/img/icons/flecha.svg'} alt="" className='float-end' />}
                                    </Link>
                                </Col>
                            ))}
                        

                    </Row>}
                </Col>
            </Row>
        </Container>
    );
}

export default TitleSectionHome;