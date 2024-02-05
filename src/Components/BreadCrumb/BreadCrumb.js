import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BrowserView, isMobile } from 'react-device-detect';

function BreadCrumb({ lead = false }) {
    const { t } = useTranslation();
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const isLead = lead;

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();
    locations.shift();

    let ruta;
    if (isMobile) {
        locations.pop()
    }
    return (
        <Container>
            <Row>
                <Col md={12} className='mt-md-3'>
                    {!isMobile ? <Breadcrumb>
                        {locations.length > 0 &&
                            <>
                                <Breadcrumb.Item className='text-decoration-underline' href="/">Home</Breadcrumb.Item>
                                {locations.map((item, index) => {
                                    ruta = (ruta !== undefined && ruta !== null) ? `${ruta}/${item}` : `/${item}`;                                    
                                    {
                                        if (!item.includes('herramientas') && !item.includes('destacados')) {
                                            return <Breadcrumb.Item
                                                key={index}
                                                href={((index + 1) !== locations.length) && `/es-es${ruta}`}
                                                className={`capitalize ${(index + 1) === locations.length ? (isLead ? 'd-none' : 'no-cursor-link') : 'text-decoration-underline'}`}
                                            >
                                                {t(item).replaceAll('-', ' ')}
                                            </Breadcrumb.Item>
                                        }
                                    }
                                })}
                            </>
                        }
                    </Breadcrumb> :
                        <Breadcrumb>
                            {locations.length > 0 &&
                                <>
                                    {locations.map((item, index) => {
                                        ruta = (ruta !== undefined && ruta !== null) ? `${ruta}/${item}` : `/${item}`;
                                        if (!item.includes('herramientas') && !item.includes('destacados')) {
                                            return (index+1 === locations.length) &&  <Breadcrumb.Item
                                                key={index}
                                                href={`/es-es${ruta}`}
                                                className={`capitalize text-decoration-underline`}
                                            >
                                                {t(item).replaceAll('-', ' ')}
                                            </Breadcrumb.Item>
                                        }
                                    })}
                                </>
                            }
                        </Breadcrumb>}
                </Col>
            </Row>
        </Container>
    );
}

export default BreadCrumb;