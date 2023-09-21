import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col } from 'react-bootstrap';

export default function Load() {
    return (
        <Row>
            <Col xs={12} className='text-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">caargando información...</span>
                </Spinner>
            </Col>
        </Row>
    );
}
