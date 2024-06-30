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
    const [filtro, setFiltro] = useState(null)
    const location = useLocation();
    const tipo = location.pathname.split('/').pop();

    useEffect(() => {
        switch (tipo) {
            case 'cuenta-ahorro':
                setTitle('Cuenta de ahorro');
                setFiltro(1)
                break;
            case 'tarjeta-credito':
                setTitle('Tarjeta de crédito');
                setFiltro(2)
                break;
            case 'creditos':
                setTitle('Créditos');
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
                title={title}
                image={'/img/banner-movil-co.png'}
                logo={'/img/icons/mobile.svg'}
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