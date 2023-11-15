import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosGas from '../Components/Contenedor/ContenedorProductosGas';

function ComparadorGas() {
    return (
        <div>
            <Header></Header>
            <Banner
                title={'Comparador de Tarifas de Gas'}
                subtitle='¡Te ayudamos a encontrar el mejor gas!'
                image={'/img/energia/banner_gas.png'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosGas>
            </ContenedorProductosGas>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorGas;