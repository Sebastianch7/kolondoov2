import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosLuz from '../Components/Contenedor/ContenedorProductosLuz';

function ComparadorLuz() {
    return (
        <div>
            <Header></Header>
            <Banner
                title={'Comparador de Tarifas Luz'}
                subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
                image={'/img/banner-energia.png'}
            >
                <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                />
            </Banner>
            <ContenedorProductosLuz>
            </ContenedorProductosLuz>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorLuz;