import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import ContenedorProductosMovil from '../Components/Contenedor/ContenedorProductosMovil';
import { useTranslation } from 'react-i18next';
import MetaData from '../Components/Header/SeoMetadata';

function ComparadorMovil() {
    const { t } = useTranslation();
    return (
        <div>
            <MetaData titulo={'Comparador móvil: compare precios y beneficios | Vuskoo'} descripcion={'Descubre y contrata las mejores ofertas en telefonía móvil con nuestro comparador de móviles. Compara planes, tarifas y contratos de distintos proveedores'} />
            <Header breadCrumb></Header>
            <Banner
                title={t('title-baner-comparador-de-internet-y-comparador-movil')}
                subtitle={t('subtitle-baner-comparador-de-internet-y-comparador-movil')}
                image={'/img/internet-telefonia/banner_movil.png'}
                logo={'/img/icons/mobile.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosMovil>
            </ContenedorProductosMovil>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorMovil;