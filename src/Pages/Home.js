import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import TitleSection from '../Components/Text/TitleSection';
import Footer from '../Components/Footer/Footer';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
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
                    image={'/img/banner1.png'}
                    buttons={[
                        {
                            title: t('btn_net_phone'),
                            icon: '/img/flash.png'
                        },
                        {
                            title: t('btn_energy'),
                            icon: '/img/phone.png'
                        }
                    ]}
                />
                <InterSection></InterSection>
                <ContenedorTarjeta>
                    {!isMobile ?
                        TarjetasProductos?.map((item, index) => {
                            return <TarjetaProducto key={index} data={item} />
                        })
                        :
                        TarjetasProductos?.map((item, index) => {
                            return <AcordionItem key={index} data={item} />
                        })
                    }
                </ContenedorTarjeta>
                <InterSection></InterSection>
                <ContenedorTarjetaBlog>
                    <TitleSection
                        title={'últimas noticias'}
                        subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
                        center
                    />
                </ContenedorTarjetaBlog>
                {
                    !isMobile && <InterSection></InterSection>
                }
                <BannerReverse
                    title={'Suscríbete gratis y recibe nuestras mejores ofertas'}
                    subtitle='Únete a nuestra comunidad. Recibirás nuestros mejores contenidos semanalmente: guías prácticas para ahorrar y gestionar tu consumo, últimas noticias…¡Y mucho más!'
                    image={'/img/bannerFooter.png'}
                >
                    <FormSuscripcion
                        text={'Escribe tu mail aqui'}
                        button={'Suscríbete gratis'}
                        check={isMobile ? false : true}
                    />
                </BannerReverse>
            </main>
            {
                isMobile && <InterSection></InterSection>
            }
            <Footer />
        </div>
    );
}

export default Home;