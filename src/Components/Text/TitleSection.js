import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Title from './Title';
import ButtonPrimary from '../Button/ButtonPrimary';
import Subtitle from './Subtitle';
import {isMobile} from 'react-device-detect';
import { Link } from 'react-router-dom';

function TitleSection({ title, subtitle, center = false, buttons, text1, text2 }) {
    return (
        <Container>
            <Row>
                <Col md={12} className={center && 'text-center b-600'}>
                    <Title title={title} />
                    {subtitle && <Subtitle subtitle={subtitle} />}
                    {text1 && <p>{text1}</p>}
                    {text2 && <p>{text2}</p>}
                    <Row className='text-center mx-auto'>
                        {buttons &&
                            <Stack gap={3} className="mx-auto d-block" direction={!isMobile ? "horizontal" : "vertical"}>
                                {buttons?.map((item, index) => {
                                    return <Link to={item.url} className='m-2'><ButtonPrimary key={index} icon={item.icon} text={item.title} /></Link>
                                     
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