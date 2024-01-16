import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosLuz from '../Components/Contenedor/ContenedorProductosLuz';
import ContenedorProductosFibra from '../Components/Contenedor/ContenedorProductosFibra';

function ComparadorFibra() {
    return (
        <div>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Fibras'}
                subtitle='¡Te ayudamos a encontrar la tarifa de fibra!'
                image={'/img/internet-telefonia/banner_fibra.png'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosFibra>
            </ContenedorProductosFibra>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorFibra;