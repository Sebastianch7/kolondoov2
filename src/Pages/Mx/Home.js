import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ContenedorTarjetaBlog from '../../Components/Contenedor/ContenedorTarjetaBlog';
import FooterMx from '../../Components/Footer/FooterMx';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import { useTranslation } from 'react-i18next';
import MetaData from '../../Components/Header/SeoMetadata';
import ConsentimientoCookies from '../../Components/Utils/ConsentimientoCookies';


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
                            title: ('Planes Celular'),
                            icon: '/img/icons/phone-light.svg',
                            url: 'planes-celulares-telefonia-internet-y-tv/comparador-planes-celular'
                        },
                        {
                            title: ('Vehículos'),
                            icon: '/img/icons/coche.png',
                            url: ''
                        },
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