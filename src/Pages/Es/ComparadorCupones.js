import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import MetaData from '../../Components/Header/SeoMetadata';
import ContenedorCupones from '../../Components/Contenedor/ContenedorCupones';
import { useParams } from 'react-router-dom';

function ComparadorCupones() {
    const { t } = useTranslation();
    const { idCategoria } = useParams();

    return (
        <div>
            <MetaData titulo={'Cupones: ¿Quieres ahorrar con tu compra? ¡Elige tu cupón y aprovecha el descuento! | Vuskoo'} descripcion={'Descubre y contrata las mejores ofertas en telefonía móvil con nuestro comparador de móviles. Compara planes, tarifas y contratos de distintos proveedores'} />
            <Header></Header>
            <Banner
                title={t('title-baner-comparador-cupones')}
                subtitle={t('subtitle-baner-comparador-cupones')}
                image={'/img/cupones/banner_cupones.png'}
                logo={'/img/icons/cupon.svg'}
            >
            </Banner>
            <ContenedorCupones categoria={idCategoria} />
            <Footer></Footer>
        </div>
    );
}

export default ComparadorCupones;