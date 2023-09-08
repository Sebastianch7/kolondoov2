import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';


function BreadCrumb(props) {
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();
    if (locations.length > 0) {
    }
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Breadcrumb>
                        {locations.length > 1 &&
                            <>
                                <Breadcrumb.Item href="/">Kolondoo</Breadcrumb.Item>
                                {locations.map((item, index) => {
                                    return <Breadcrumb.Item>{item.replaceAll('_', ' ')}</Breadcrumb.Item>
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