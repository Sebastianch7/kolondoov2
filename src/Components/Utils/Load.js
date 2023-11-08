import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col } from 'react-bootstrap';

export default function Load() {
    return (
        <Row>
            <Col xs={12} className='text-center'>
                <img className='img-fluid load' src='/img/Loader_Kolondoo.png' />
            </Col>
        </Row>
    );
}
