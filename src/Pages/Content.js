import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductos from '../Components/Contenedor/ContenedorProductos';

function Content() {
    return (
        <div>
            <Header></Header>
            <Banner
                title={'Comparador de Tarifas Móvil'}
                subtitle='¡Te ayudamos a encontrar la tarifa móvil que mejor se adapte a ti!'
                image={'/img/banner3.png'}
            >
                <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                />
            </Banner>
            <ContenedorProductos>
            </ContenedorProductos>
            <Footer></Footer>
        </div>
    );
}

export default Content;