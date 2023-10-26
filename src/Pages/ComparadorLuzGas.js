import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosLuzGas from '../Components/Contenedor/ContenedorProductosLuzGas';

function ComparadorLuzGas() {
    return (
        <div>
            <Header></Header>
            <Banner
                title={'Comparador de Tarifas Luz y Gas'}
                subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
                image={'/img/banner-energia.png'}
            >
                <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                />
            </Banner>
            <ContenedorProductosLuzGas>
            </ContenedorProductosLuzGas>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorLuzGas;