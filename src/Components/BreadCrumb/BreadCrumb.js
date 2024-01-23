import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BrowserView, isMobile } from 'react-device-detect';

function BreadCrumb({ url }) {
    const { t } = useTranslation();
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    const pathname = url && url.length > 1 ? url : location.pathname;
    let locations = pathname.split('/');
    locations.shift();
    locations.shift();
    let ruta;
    if(isMobile){
        
        locations.shift();
    }
    return (
        <Container>
            <Row>
                <Col md={12} className='mt-md-3'>
                    <Breadcrumb>
                        {locations.length > 0 &&
                            <>
                                <Breadcrumb.Item href="/">Vuskoo</Breadcrumb.Item>
                                {locations.map((item, index) => {
                                    console.log(item)
                                    ruta = (ruta !== undefined && ruta !== null) ? `${ruta}/${item}` : `/${item}`;
                                    if (!item.includes('herramientas') && !item.includes('destacados')) {
                                        return <Breadcrumb.Item
                                            key={index}
                                            href={!item === 'herramientas' ? 'null' : `/es-es${ruta}`}
                                            className='capitalize'
                                        >
                                            {t(item).replaceAll('-', ' ')}
                                        </Breadcrumb.Item>
                                    }
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