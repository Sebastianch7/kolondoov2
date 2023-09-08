import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import TitleSection from '../Components/Text/TitleSection';
import TarjetaBlogFull from '../Components/Tarjeta/TarjetaBlogFull';
import Footer from '../Components/Footer/Footer';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
import { Button, Col, Row } from 'react-bootstrap';
import TarjetaBlogMin from '../Components/Tarjeta/TarjetaBlogMin';
import BannerReverse from '../Components/Banner/BannerReverse';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ButtonPrimary from '../Components/Button/ButtonPrimary';
import InterSection from '../Components/Utils/InterSection';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';

const productos = [
    {
        icon: '/img/monitor.png',
        title: 'Televisión y streaming',
        text: [
            {
                'item': 'Paquetes de TV',
            },
            {
                'item': 'Plataformas de streaming',
            }
        ],
        button: 'ver más'
    },
    {
        icon: '/img/money.png',
        title: 'Finanzas',
        text: [
            {
                'item': 'Tarjetas de crédito',
            },
            {
                'item': 'Hipotecas',
            },
            {
                'item': 'Cuentas y ahorro',
            },
            {
                'item': 'Préstamos',
            }

        ],
        button: 'ver más'
    },
    {
        icon: '/img/money.png',
        title: 'Seguros',
        text: [
            {
                'item': 'Hogar',
            },
            {
                'item': 'Vida',
            },
            {
                'item': 'Coche',
            },
            {
                'item': 'Viaje',
            }

        ],
        button: 'ver más'
    },
    {
        icon: '/img/money.png',
        title: 'Seguridad',
        text: [
            {
                'item': 'Alarmas para casa',
            },
            {
                'item': 'Alarmas para negocios',
            },
        ],
        button: 'ver más'
    },

]

const blog = [
    {
        img: '/img/bannerFull1.png',
        date: '18 mayo 2023',
        title: 'Opiniones sobre Gana Energía: ventajas e inconvenientes',
        button: 'Ver más',
        url: '',
        type: 'max'
    },
    {
        img: '/img/bannerFull2.png',
        date: '18 mayo 2023',
        title: 'Opiniones sobre Gana Energía: ventajas e inconvenientes',
        button: 'Ver más',
        url: '',
        type: 'max'
    },
    {
        img: '/img/bannerFull2.png',
        date: '2 mayo 2023',
        title: 'Vuelven los teléfonos tontos',
        content: 'Los teléfonos tontos, también llamados dumbphones, son lo contrario a los smartphones o teléfonos inteligentes.',
        button: 'Ver más',
        url: '',
        type: 'min'
    },
    {
        img: '/img/bannerFull2.png',
        date: '08 diciembre 2023',
        title: 'La operadora con la mejor oferta de Netflix ',
        content: 'Quieres saber qué operadoras lo ofrecen y en qué condiciones? Entonces no te pierdas el análisis que te mostramos a continuación. ¡Sigue leyendo!',
        button: 'Ver más',
        url: '',
        type: 'min'
    },

]

function Home(props) {
    return (
        <div>
            <Header></Header>
            <BreadCrumb></BreadCrumb>
            <main>
                <Banner
                    title={'Comparador de tarifas y Ofertas Online'}
                    subtitle='!Nuestros agentes te asesorarán para tomar las mejores decisiones y que empieces a ahorrar en tu hogar!'
                    image={'/img/banner1.png'}
                    buttons={[
                        {
                            title: 'Internet y telefonia',
                            icon: '/img/flash.png'
                        },
                        {
                            title: 'Energia',
                            icon: '/img/phone.png'
                        }
                    ]}
                />
                <InterSection></InterSection>
                <ContenedorTarjeta>
                    {
                        productos?.map((item, index) => {
                            return <TarjetaProducto key={index} data={item}></TarjetaProducto>
                        })
                    }
                </ContenedorTarjeta>
                <InterSection></InterSection>
                <ContenedorTarjetaBlog>
                    <InterSection></InterSection>
                    <TitleSection
                        title={'últimas noticias'}
                        subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
                        center
                    />
                    {
                        blog?.map((item, index) => {
                            return item.type == 'max' && <TarjetaBlogFull key={index} data={item}></TarjetaBlogFull>
                        })
                    }
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                {blog?.map((item, index) => {
                                    return item.type == 'min' && <TarjetaBlogMin key={index} data={item}></TarjetaBlogMin>
                                })}
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className='mx-auto text-center py-5'>
                        <ButtonPrimary text={'Descubre más noticias'} />
                    </Col>
                </ContenedorTarjetaBlog>
                    <InterSection></InterSection>
                <BannerReverse
                    title={'Suscríbete gratis y recibe nuestras mejores ofertas'}
                    subtitle='Únete a nuestra comunidad. Recibirás nuestros mejores contenidos semanalmente: guías prácticas para ahorrar y gestionar tu consumo, últimas noticias…¡Y mucho más!'
                    image={'/img/bannerFooter.png'}
                >
                    <FormSuscripcion
                        text={'Escribe tu mail aqui'}
                        button={'Suscríbete gratis'}
                        check={true}
                    />
                </BannerReverse>
            </main>
            <Footer />
        </div>
    );
}

export default Home;