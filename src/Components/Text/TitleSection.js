import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Title from './Title';
import ButtonPrimary from '../Button/ButtonPrimary';
import Subtitle from './Subtitle';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

function TitleSection({ title, titleAlt, subtitle, center = false, buttons, text1, text2, left }) {
    return (
        <Container>
            <Row>
                <Col md={12} className={center && 'text-center b-600'}>
                    <Title title={title} titleAlt={titleAlt} />
                    {subtitle && <Subtitle subtitle={subtitle} />}
                    {!left && text1 && <p dangerouslySetInnerHTML={{ __html: text1 }}></p>}
                    {!left && text2 && <p dangerouslySetInnerHTML={{ __html: text2 }}></p>}
                    {left && <p className='text-left' dangerouslySetInnerHTML={{ __html: text1 }}></p>}
                    {left && <p className='text-left' dangerouslySetInnerHTML={{ __html: text2 }}></p>}
                    {buttons && <Row className='text-center mx-auto'>
                        <Stack gap={3} className="mx-auto d-block" direction={!isMobile ? "horizontal" : "vertical"}>
                            {buttons?.map((item, index) => {
                                return <Link to={item.url} className='m-2'><ButtonPrimary key={index} icon={item.icon} text={item.title} /></Link>

                            })}
                        </Stack>
                    </Row>}
                </Col>
            </Row>
        </Container>
    );
}

export default TitleSection;