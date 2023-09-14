import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import TitleSection from '../Components/Text/TitleSection';
import TarjetaBlogFull from '../Components/Tarjeta/TarjetaBlogFull';
import Footer from '../Components/Footer/Footer';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
import TarjetaBlogMin from '../Components/Tarjeta/TarjetaBlogMin';
import BannerReverse from '../Components/Banner/BannerReverse';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ButtonPrimary from '../Components/Button/ButtonPrimary';
import InterSection from '../Components/Utils/InterSection';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';
import TarjetasProductos from '../Content/TarjetaProducto.json'
import Blog from '../Content/Blog.json'
import { useTranslation } from 'react-i18next';
import { Col,Row } from 'react-bootstrap';


function Home(props) {
    const { t } = useTranslation();
    return (
        <div>
            <Header></Header>
            <BreadCrumb></BreadCrumb>
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
                    {
                        TarjetasProductos?.map((item, index) => {
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
                        Blog?.map((item, index) => {
                            return item.type == 'max' && <TarjetaBlogFull key={index} data={item}></TarjetaBlogFull>
                        })
                    }
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                {Blog?.map((item, index) => {
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