import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ContenedorTarjetaBlog from '../../Components/Contenedor/ContenedorTarjetaBlog';
import FooterMx from '../../Components/Footer/FooterMx';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import { useTranslation } from 'react-i18next';
import MetaData from '../../Components/Header/SeoMetadata';
import ConsentimientoCookies from '../../Components/Utils/ConsentimientoCookies';
import { Link } from 'react-router-dom';


function HomeMx(props) {
    const { t } = useTranslation();
    return (
        <div>
            <ConsentimientoCookies></ConsentimientoCookies>
            <MetaData imagen_destacada='/img/banner-home.png' descripcion={'Descubre una nueva era en la toma de decisiones con Vuskoo. Comparadores de servicios que te ofrecen información detallada, ofertas, promociones para que elijas'} titulo={'Optimiza tus elecciones con Vuskoo: Expertos en Comparadores de Servicios'} />
            <Header></Header>
            <main>
                <Banner
                    title={t('bannerHomeTitle')}
                    subtitle={t('bannerHomeSubtitle')}
                    image={'/img/banner-home.png'}
                    buttons={[
                        {
                            title: t('title_button_1'),
                            icon: '/img/icons/phone-light.svg',
                            url: 'internet-telefonia/comparador-tarifas-fibra-y-movil'
                        },
                        {
                            title: t('title_button_2'),
                            icon: '/img/icons/lighting.svg',
                            url: 'energia/comparador-tarifas-luz'
                        },
                        {
                            title: t('title_button_3'),
                            icon: '/img/icons/btn_streaming.svg',
                            url: 'television-streaming/comparador-plataformas-streaming'
                        },
                        {
                            title: t('title_button_4'),
                            icon: '/img/icons/btn_streaming.svg',
                            url: 'television-streaming/comparador-plataformas-streaming'
                        }
                    ]}
                />
                <ContenedorTarjetaBlog />
                <FormSuscripcion />
            </main>

            <FooterMx />
        </div>
    );
}

export default HomeMx;