import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';


function BreadCrumb({ url }) {
    const location = useLocation();
    const pathname = url && url.length > 1 ? url : location.pathname;
    let locations = pathname.split('/');
    locations.shift();
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Breadcrumb>
                        {locations.length > 1 &&
                            <>
                                <Breadcrumb.Item href="/">Vuskoo</Breadcrumb.Item>
                                {locations.map((item, index) => {
                                    return <Breadcrumb.Item key={index} href={`/${item}`} className='capitalize'>{item.replaceAll('_', ' ')}</Breadcrumb.Item>
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