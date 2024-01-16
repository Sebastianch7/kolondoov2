import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import ContenedorProductosMovilFibraTv from '../Components/Contenedor/ContenedorProductosMovilFibraTv';

function ComparadorFibraMovilTv() {
    return (
        <div>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Fibra, Móvil y TV'}
                subtitle='¡Te ayudamos a encontrar la tarifa movil con fibra y tv!'
                image={'/img/internet-telefonia/banner_telefonia_fibra_tv.png'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosMovilFibraTv>
            </ContenedorProductosMovilFibraTv>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorFibraMovilTv;