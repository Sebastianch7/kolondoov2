import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
import Footer from '../Components/Footer/Footer';
import BannerReverse from '../Components/Banner/BannerReverse';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import InterSection from '../Components/Utils/InterSection';
import TarjetasProductos from '../Content/TarjetaProducto.json'
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../Components/Acordion/AcordionItem';


function Home(props) {
    const { t } = useTranslation();
    return (
        <div>
            <Header></Header>
            <main>
                <Banner
                    title={t('bannerHomeTitle')}
                    subtitle={t('bannerHomeSubtitle')}
                    image={'/img/banner-home.png'}
                    logo={'/img/icons/phone.svg'}
                    buttons={[
                        {
                            title: t('Internet y Telefonía'),
                            icon: '/img/icons/lighting.svg',
                            url: 'internet-telefonia/comparador-movil'
                        },
                        {
                            title: t('Energía'),
                            icon: '/img/icons/phone-light.svg',
                            url: 'energia/comparador-tarifas-luz'
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
                <FormSuscripcion />
            </main>
            
            <Footer />
        </div>
    );
}

export default Home;