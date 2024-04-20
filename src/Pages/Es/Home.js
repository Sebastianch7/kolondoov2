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


function Home(props) {
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
                            title: t('Internet y Telefonía'),
                            icon: '/img/icons/phone-light.svg',
                            url: 'internet-telefonia/comparador-tarifas-fibra-y-movil'
                        },
                        {
                            title: t('Energía'),
                            icon: '/img/icons/lighting.svg',
                            url: 'energia/comparador-tarifas-luz'
                        },
                        {
                            title: t('Streaming'),
                            icon: '/img/icons/btn_streaming.svg',
                            url: 'television-streaming/comparador-plataformas-streaming'
                        }
                    ]}
                />
                {/* <ContenedorTarjeta cols={12}>
                    {!isMobile ?
                        TarjetasProductos?.map((item, index) => {
                            return <TarjetaProducto key={index} data={item} />
                        })
                        :
                        TarjetasProductos?.map((item, index) => {
                            return <AcordionItem key={index} data={item} />
                        })
                    }
                </ContenedorTarjeta> */}
                <ContenedorTarjetaBlog />
                <FormSuscripcion  />
            </main>

            <Footer />
        </div>
    );
}

export default Home;