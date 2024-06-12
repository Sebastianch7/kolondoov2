import React, {useEffect} from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ContenedorTarjetaBlog from '../../Components/Contenedor/ContenedorTarjetaBlog';
import Footer from '../../Components/Footer/Footer';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import { useTranslation } from 'react-i18next';
import MetaData from '../../Components/Header/SeoMetadata';
import ConsentimientoCookies from '../../Components/Utils/ConsentimientoCookies';
import { Link } from 'react-router-dom';


function HomeCo(props) {
    const { t } = useTranslation();
    return (
        <div>
            <ConsentimientoCookies></ConsentimientoCookies>
            <MetaData imagen_destacada='/img/banner-home.png' descripcion={'Descubre una nueva era en la toma de decisiones con Vuskoo. Comparadores de servicios que te ofrecen información detallada, ofertas, promociones para que elijas'} titulo={'Optimiza tus elecciones con Vuskoo: Expertos en Comparadores de Servicios'} />
            <Header></Header>
            <main>
                <Banner
                    title={'Bienvenido a Colombia'}
                    subtitle={t('bannerHomeSubtitle')}
                    image={'/img/banner-home.png'}
                    buttons={[
                        /* {
                            title: t('Internet y Telefonía'),
                            icon: '/img/icons/phone-light.svg',
                            url: 'internet-telefonia/comparador-tarifas-fibra-y-movil'
                        } */
                    ]}
                />
                <FormSuscripcion  />
            </main>

            <Footer />
        </div>
    );
}

export default HomeCo;