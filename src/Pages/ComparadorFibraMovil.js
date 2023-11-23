import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosMovilFibra from '../Components/Contenedor/ContenedorProductosMovilFibra';

function ComparadorFibraMovil() {
    return (
        <div>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Tarifas movil y fibra'}
                subtitle='¡Te ayudamos a encontrar la tarifa de fibra con movil!'
                image={'/img/internet_telefonia/banner_movil_fibra.png'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosMovilFibra>
            </ContenedorProductosMovilFibra>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorFibraMovil;