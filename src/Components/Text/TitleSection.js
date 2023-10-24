import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Title from './Title';
import ButtonPrimary from '../Button/ButtonPrimary';
import Subtitle from './Subtitle';
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';

function TitleSection({ title, subtitle, center = false, buttons }) {
    return (
        <Container>
            <Row>
                <Col md={12} className={center && 'text-center b-600'}>
                    <Title title={title} />
                    <Subtitle subtitle={subtitle} />
                    <Row>
                        {buttons &&
                            <Stack direction={!isMobile ? "horizontal" : "vertical"}  gap={3}>
                                {buttons?.map((item, index) => {
                                    return <Link to={item.url}><ButtonPrimary key={index} icon={item.icon} text={item.title} /></Link>
                                     
                                })}
                            </Stack>
                        }
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default TitleSection;