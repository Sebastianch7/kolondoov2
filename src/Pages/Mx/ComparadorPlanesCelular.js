import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MetaData from '../../Components/Header/SeoMetadata';
import ContenedorProductosPlanCelular from '../../Components/Contenedor/ContenedorProductosPlanCelular';

function ComparadorPlanesCelular() {
    return (
        <div>
            <MetaData titulo={'Compara gratis tarifas de celular | Vuskoo'} descripcion={'En Vuskoo te ayudamos a que ahorres en tus facturas, ¡compara y encuentra la tarifa de celular ideal para ti! Asesoramiento personalizado.'}/>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Planes Celular'}
                subtitle='¡Te ayudamos a encontrar el mejor plan de celular!'
                image={'/img/internet-telefonia/banner_fibra.png'}
                logo={'/img/icons/router.svg'}
            >
            </Banner>
            <ContenedorProductosPlanCelular />
            <Footer></Footer>
        </div>
    );
}

export default ComparadorPlanesCelular;