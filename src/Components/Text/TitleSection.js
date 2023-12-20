import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Title from './Title';
import ButtonPrimary from '../Button/ButtonPrimary';
import Subtitle from './Subtitle';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

function TitleSection({ title, titleAlt, titleThird, subtitle, center = false, buttons, text1, text2, left, btnLeft = false, blog, clave, textBlog }) {
    return (
        <Container>
            <Row>
                <Col md={12} className={center && 'text-center b-600'}>
                    <Title title={title} titleAlt={titleAlt} titleThird={titleThird} />
                    {subtitle && <Subtitle subtitle={subtitle} />}
                    {clave && <p className='color-primary'><b>{clave}</b></p>}
                    {!left && text1 && <p dangerouslySetInnerHTML={{ __html: text1 }}></p>}
                    {!left && text2 && <p dangerouslySetInnerHTML={{ __html: text2 }}></p>}
                    {left && <p className='text-left' dangerouslySetInnerHTML={{ __html: text1 }}></p>}
                    {left && <p className='text-left' dangerouslySetInnerHTML={{ __html: text2 }}></p>}
                    {textBlog && <p className='blog' dangerouslySetInnerHTML={{ __html: textBlog }}></p>}
                    {buttons && <Row className={`${!btnLeft && 'text-center'} mx-auto`}>
                        <Stack gap={3} className="mx-auto d-block" direction={!isMobile ? "horizontal" : "vertical"}>
                            {buttons?.map((item, index) => {
                                console.log(item.icon)
                                //return <Link to={item.url} className={'m-2'}><ButtonPrimary key={index} icon={item.icon} text={item.title} /></Link>
                                return <Link to={item.url} className={'m-2 btn btn-primary'}> <img src={item.icon} />{item.title}</Link>
                            })}
                        </Stack>
                    </Row>}
                </Col>
            </Row>
        </Container>
    );
}

export default TitleSection;