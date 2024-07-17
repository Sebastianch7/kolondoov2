import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosFibra from '../../Components/Contenedor/ContenedorProductosFibra';
import MetaData from '../../Components/Header/SeoMetadata';
import FooterCo from '../../Components/Footer/FooterCo';

function ComparadorFibraCo() {
    return (
        <div>
            <MetaData titulo={'Comparador de fibra óptica: Encuentra la mejor oferta | Vuskoo'} descripcion={'Descubre las mejores opciones de fibra óptica con nuestro comparador. Compara velocidades, precios y beneficios de distintos proveedores en un solo lugar.'}/>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Fibras'}
                subtitle='¡Te ayudamos a encontrar la tarifa de fibra!'
                image={'/img/banner_fibra-co.png'}
                logo={'/img/icons/router.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosFibra />
            <Footer />
        </div>
    );
}

export default ComparadorFibraCo;