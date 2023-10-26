import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosMovilFibra from '../Components/Contenedor/ContenedorProductosMovilFibra';
import ContenedorProductosMovilFibraTv from '../Components/Contenedor/ContenedorProductosMovilFibraTv';

function ComparadorFibraMovilTv() {
    return (
        <div>
            <Header></Header>
            <Banner
                title={'Comparador de Tarifas movil con fibra y tv'}
                subtitle='¡Te ayudamos a encontrar la tarifa movil con fibra y tv!'
                image={'/img/banner-energia.png'}
            >
                <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                />
            </Banner>
            <ContenedorProductosMovilFibraTv>
            </ContenedorProductosMovilFibraTv>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorFibraMovilTv;