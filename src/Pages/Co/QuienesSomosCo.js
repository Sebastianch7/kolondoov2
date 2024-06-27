import React from 'react';
import Header from '../../Components/Header/Header';
import BannerImageFull from '../../Components/Banner/BannerImageFull';
import TarjetaProducto from '../../Components/Tarjeta/TarjetaProducto';
import ContenedorTarjeta from '../../Components/Contenedor/ContenedorTarjeta';
import TitleSection from '../../Components/Text/TitleSection';
import Footer from '../../Components/Footer/Footer';
import ContenedorTarjetaBlog from '../../Components/Contenedor/ContenedorTarjetaBlog';
import BannerReverse from '../../Components/Banner/BannerReverse';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import InterSection from '../../Components/Utils/InterSection';
import TarjetaQuienesSomos from '../../Content/TarjetaQuienesSomosCo.json'
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../../Components/Acordion/AcordionItem';
import MetaData from '../../Components/Header/SeoMetadata';
import FormSuscripcionCo from '../../Components/Forms/FormSuscripcionCo';
import FooterCo from '../../Components/Footer/FooterCo';

function QuienesSomosCo(props) {
    const { t } = useTranslation();
    return (
        <div>
            <MetaData titulo={'Quiénes Somos: Tu Guía de comparadores de servicios | Vuskoo'} descripcion={'En Vuskoo, te ayudamos a encontrar la mejor oferta y cómo puedes tomar decisiones informadas con nuestros comparadores de servicios. Conoce quiénes somos'}/>
            <Header breadCrumb></Header>
            <main>
                <BannerImageFull
                    title={t('bannerQuienesSomosTitle')}
                    text1={'Vuskoo es una comunidad online especializada en Internet, Telefonía y Energía. Nuestra misión es ayudarte a tomar las mejores decisiones sobre los servicios más importantes para tu hogar, y simplificar gestiones que suelen ser complicadas. ¿Nuestros pilares? La imparcialidad y la confianza.'}
                    text2={'Gracias a nuestro amplio conocimiento en estos sectores, te ofrecemos una experiencia completa: no solo comparas las tarifas disponibles en el mercado y eliges la que más te conviene, sino que también recibes asesoría clara y transparente, puedes contratar tu fibra o luz con nosotros... ¡y mucho más!'}
                    image={'/img/banner-quienes-somos-co.png'}
                />
                <ContenedorTarjeta 
                fluid
                title={'Cómo te ayudamos'}
                subtitle={'Con transparencia, seguridad y lealtad como base, te ofrecemos apoyo a través de:'}
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
                {/* <ContenedorTarjetaBlog /> */}
                <InterSection></InterSection>
                <FormSuscripcionCo />
            </main>
            {
                isMobile && <InterSection></InterSection>
            }
            <FooterCo />
        </div>
    );
}

export default QuienesSomosCo;