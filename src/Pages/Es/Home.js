import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ContenedorTarjetaBlog from '../../Components/Contenedor/ContenedorTarjetaBlog';
import Footer from '../../Components/Footer/Footer';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import { useTranslation } from 'react-i18next';
import MetaData from '../../Components/Header/SeoMetadata';
import ConsentimientoCookies from '../../Components/Utils/ConsentimientoCookies';
import { Link } from 'react-router-dom';
import BannerHome from '../../Components/Banner/BannerHome';
import ContenedorContratacion from '../../Components/Contenedor/ContenedorContratacion';
import ContenedorServiciosCalidad from '../../Components/Contenedor/ContenedorServiciosCalidad';
import ContenedorElegirVuskoo from '../../Components/Contenedor/ContenedorElegirVuskoo';
import ContenedorExplorar from '../../Components/Contenedor/ContenedorExplorar';


function Home(props) {
    const { t } = useTranslation();
    return (
        <div>
            <ConsentimientoCookies></ConsentimientoCookies>
            <MetaData imagen_destacada='/img/banner-home.png' descripcion={'Descubre una nueva era en la toma de decisiones con Vuskoo. Comparadores de servicios que te ofrecen información detallada, ofertas, promociones para que elijas'} titulo={'Optimiza tus elecciones con Vuskoo: Expertos en Comparadores de Servicios'} />
            <Header></Header>
            <main>
                <BannerHome
                    title={'La mejor manera de ahorrar'}
                    subtitle={'Encuentra y elige las mejores ofertas para ahorrar a lo grande.'}
                    image={'/img/banner-home.png'}
                    buttons={[
                        {
                            title: 'Internet y Telefonía',
                            icon: '/img/icons/phone-light.svg',
                            url: 'internet-telefonia/comparador-tarifas-fibra-y-movil'
                        },
                        {
                            title: 'Energía',
                            icon: '/img/icons/lighting.svg',
                            url: 'energia/comparador-tarifas-luz'
                        },
                        /*{
                            title: 'Cupones descuento',
                            icon: '/img/icons/cupon_home.svg',
                            url: 'cupones'
                        } ,
                        {
                            title: 'Seguros',
                            icon: '/img/icons/casa.svg',
                            url: 'television-streaming/comparador-plataformas-streaming'
                        } */
                    ]}
                />
                <ContenedorContratacion />
                <ContenedorServiciosCalidad />
                <div class="interSeccion"></div>
                <ContenedorElegirVuskoo />
                <div class="interSeccion"></div>
                <ContenedorExplorar />
                <div class="interSeccion"></div>
                <FormSuscripcion />
            </main>

            <Footer />
        </div>
    );
}

export default Home;