import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosMovilFibraTv from '../../Components/Contenedor/ContenedorProductosMovilFibraTv';
import MetaData from '../../Components/Header/SeoMetadata';
import FooterCo from '../../Components/Footer/FooterCo';

function ComparadorFibraMovilTvCo() {
    return (
        <div>
            <MetaData titulo={'Comparador de Fibra, Móvil y TV: contrata y ahorra | Vuskoo '} descripcion={'Descubre las mejores ofertas de los principales proveedores de fibra óptica, móvil y TV. Compara precios, servicios y beneficios en un solo lugar. ¡Ahorra!'}/>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Fibra, Móvil y TV'}
                subtitle='¡Te ayudamos a encontrar la tarifa movil con fibra y tv!'
                image={'/img/banner_telefonia_fibra_tv-co.png'}
                logo={'/img/icons/router.svg'}
                logo2={'/img/icons/mobile.svg'}
                logo3={'/img/icons/tv.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosMovilFibraTv>
            </ContenedorProductosMovilFibraTv>
            <FooterCo />
        </div>
    );
}

export default ComparadorFibraMovilTvCo;