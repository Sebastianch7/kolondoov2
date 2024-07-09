import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosGas from '../../Components/Contenedor/ContenedorProductosGas';
import MetaData from '../../Components/Header/SeoMetadata';
import ContenedorPrestamos from '../../Components/Contenedor/ContenedorPrestamos';
import FooterCo from '../../Components/Footer/FooterCo';
import { useLocation, useParams } from 'react-router-dom';
import TitleSection from '../../Components/Text/TitleSection';

function ComparadorPrestamosCo() {

    const [title, setTitle] = useState(null)
    const [titleLanding, setTitleLanding] = useState(null)
    const [subtitleLanding, setSubtitleLanding] = useState(null)
    const [imagenLanding, setImagenLanding] = useState(null)
    const [filtro, setFiltro] = useState(null)
    const location = useLocation();
    const tipo = location.pathname.split('/').pop();

    useEffect(() => {
        switch (tipo) {
            case 'cuenta-ahorro':
                setTitle('Cuenta de ahorro');
                setTitleLanding('Comparador de Cuentas de Ahorro')
                setSubtitleLanding('¡Te ayudamos a encontrar la cuenta de ahorro que mejor se adapte a ti!')
                setImagenLanding('/img/banner-ahorro-co.png')
                setFiltro(1)
                break;
            case 'tarjeta-credito':
                setTitle('Tarjeta de crédito');
                setTitleLanding('Comparador de Tarjetas crédito')
                setSubtitleLanding('¡Te ayudamos a encontrar la tarjeta de crédito que mejor se adapte a ti!')
                setImagenLanding('/img/banner-tarjeta-credito-co.png')
                setFiltro(2)
                break;
            case 'creditos':
                setTitle('Créditos');
                setTitleLanding('')
                setSubtitleLanding('')
                setImagenLanding('/img/banner-credito-co.png')
                setFiltro(3)
                break;
            default:
                setTitle(null);
                break;
        }
    }, [tipo]);


    return (
        <div>
            <MetaData titulo={'Comparador de préstamos | Vuskoo'} descripcion={'Compara las diferentes compañías para préstamos'} />
            <Header breadCrumb></Header>
            <Banner
                title={titleLanding}
                subtitle={subtitleLanding}
                image={imagenLanding}
                logo={'/img/logos/logo_finanzas_comprador.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>

            <ContenedorPrestamos filtroCategoria={filtro} />
            <FooterCo />
        </div>
    );
}

export default ComparadorPrestamosCo;