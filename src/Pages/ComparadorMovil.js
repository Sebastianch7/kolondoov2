import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import ContenedorProductosMovil from '../Components/Contenedor/ContenedorProductosMovil';
import { useTranslation } from 'react-i18next';

function ComparadorMovil() {
    const { t } = useTranslation();
    return (
        <div>
            <Header breadCrumb></Header>
            <Banner
                title={t('title-baner-comparador-de-internet-y-comparador-movil')}
                subtitle={t('subtitle-baner-comparador-de-internet-y-comparador-movil')}
                image={'/img/internet-telefonia/banner_movil.png'}
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