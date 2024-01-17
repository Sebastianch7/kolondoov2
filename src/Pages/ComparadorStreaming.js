import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import ContenedorProductosStreaming from '../Components/Contenedor/ContenedorProductosStreaming';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import TitleSection from '../Components/Text/TitleSection';
function ComparadorStreaming() {
    return (
        <div>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de plataformas de streaming'}
                subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
                image={'/img/television-streaming/banner_streaming.png'}
                logo={'/img/icons/streaming.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosStreaming />
            <Footer></Footer>
        </div>
    );
}

export default ComparadorStreaming;