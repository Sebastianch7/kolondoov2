import React from 'react';
import Header from '../Components/Header/Header';
import BannerImageFull from '../Components/Banner/BannerImageFull';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import TitleSection from '../Components/Text/TitleSection';
import Footer from '../Components/Footer/Footer';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
import BannerReverse from '../Components/Banner/BannerReverse';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import InterSection from '../Components/Utils/InterSection';
import TarjetaQuienesSomos from '../Content/TarjetaQuienesSomos.json'
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../Components/Acordion/AcordionItem';


function QuienesSomos(props) {
    const { t } = useTranslation();
    return (
        <div>
            <Header breadCrumb></Header>
            <main>
                <BannerImageFull
                    title={t('bannerQuienesSomosTitle')}
                    text1={'Kolondoo es una comunidad online especializada en Internet, Telefonía y Energía. Nuestro propósito es el de ayudar a los usuarios a tomar las mejores decisiones sobre los servicios más importantes del hogar, y hacer más sencillas gestiones que a menudo resultan complejas. ¿Las bases de nuestro ADN? la imparcialidad y la confianza.'}
                    text2={'Gracias a nuestro amplio knowledge de estos sectores, te ofrecemos un recorrido experiencial en el que no solo comparas las tarifas actuales disponibles en el mercado y eliges la que más encaja con tu visión del consumo. También, recibirás el asesoramiento que necesitas de forma clara y transparente, podrás contratar tu fibra o tu suministro de luz con nosotros … ¡y mucho más! ;)'}
                    image={'img/banner_quienes_somos.png'}
                />
                <ContenedorTarjeta 
                fluid
                title={'Cómo te ayudamos'}
                subtitle={'Gracias a pilares fundamentales para nosotros como la transparencia, la seguridad y la lealtad, logramos ayudarte a través de estas vías:'}
                >
                    {!isMobile ?
                        TarjetaQuienesSomos?.map((item, index) => {
                            return <TarjetaProducto key={index} data={item} />
                        })
                        :
                        TarjetaQuienesSomos?.map((item, index) => {
                            return <AcordionItem key={index} data={item} />
                        })
                    }
                </ContenedorTarjeta>
                <ContenedorTarjetaBlog>
                    <TitleSection
                        title={'últimas noticias'}
                        subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
                        center
                    />
                </ContenedorTarjetaBlog>
                <FormSuscripcion />
            </main>
            {
                isMobile && <InterSection></InterSection>
            }
            <Footer />
        </div>
    );
}

export default QuienesSomos;