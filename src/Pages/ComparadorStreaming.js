import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosFibra from '../Components/Contenedor/ContenedorProductosFibra';
import ContenedorProductosStreaming from '../Components/Contenedor/ContenedorProductosStreaming';

function ComparadorStreaming() {
    return (
        <div>
            <Header></Header>
            <Banner
                title={'Comparador de plataformas de streaming'}
                subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
                image={'/img/television_streaming/banner_streaming.png'}
            >
                <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                />
            </Banner>
            <ContenedorProductosStreaming>
            </ContenedorProductosStreaming>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorStreaming;