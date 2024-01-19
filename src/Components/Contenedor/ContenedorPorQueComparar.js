import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Card, CardGroup } from 'react-bootstrap'
import TitleSection from '../Text/TitleSection'

export default function ContenedorPorQueComparar({ title, titleAlt, titleThird, dataPorQueComparar }) {
    return (
        <div className='p-0 m-0 mx-auto bg-gray'>
            <Container>
                <Row className='mx-auto bg-gray pt-md-5'>
                    <TitleSection
                        center
                        title={title}
                        titleAlt={titleAlt}
                        titleThird={titleThird}
                    />
                    <Col xs={12} md={12} className='mx-auto mb-md-5'>
                        <CardGroup>
                            {
                                dataPorQueComparar &&
                                dataPorQueComparar.map((item, index) => {
                                    return <Card key={index} className='border-0 bg-gray'>
                                        <Card.Body>
                                            <Card.Title className='mb-3 text-center  header-img-card mb-md-5'>
                                                <img className='' src={item.logo} />
                                            </Card.Title>
                                            <Card.Text className=''>
                                                <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                })
                            }

                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
