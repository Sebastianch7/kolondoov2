import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';


function BreadCrumb({ url }) {
    const location = useLocation();
    const pathname = url && url.length > 1 ? url : location.pathname;
    let locations = pathname.split('/');
    locations.shift();
    let ruta;
    return (
        <Container>
            <Row>
                <Col md={12} className='mt-md-3'>
                    <Breadcrumb>
                        {locations.length > 0 &&
                            <>
                                <Breadcrumb.Item href="/">Vuskoo</Breadcrumb.Item>
                                {locations.map((item, index) => {
                                    ruta = (ruta !== undefined && ruta !== null) ? `${ruta}/${item}` : `/${item}`;
                                    
                                    if(item == 'noticia'){
                                        return <Breadcrumb.Item key={index} href={`/blog`} className='capitalize'>{item.replaceAll('-', ' ')}</Breadcrumb.Item>
                                    }else{
                                        return <Breadcrumb.Item key={index} href={ruta} className='capitalize'>{item.replaceAll('-',' ')}</Breadcrumb.Item>
                                    }
                                })}
                            </>
                        }
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    );
}

export default BreadCrumb;