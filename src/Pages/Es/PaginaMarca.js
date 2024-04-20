import React from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import MetaData from '../../Components/Header/SeoMetadata';
import Footer from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import { getDetailOffer, getExtraOffer } from '../../services/ApiServices';
import { useLocation } from 'react-router-dom';

export default function PaginaMarca() {
    const [isLoading, setIsLoading] = useState(true);
    const [infoOffer, setInfoOffer] = useState([]);
    const [extraOffer, setExtraOffer] = useState([]);
    const [idPlan, setIdPlan] = useState(null);

    const location = useLocation();
    const [breadUrl, setBreadUrl] = useState(null);

    const [offerLooking, setOfferLooking] = useState(null)

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                if (idPlan !== null) {
                    const response = await getExtraOffer(offerLooking)
                    setExtraOffer(response);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Error al obtener oferta extra:", error);
            }
        };

        fetchTariffs();
    }, [idPlan]);

    return (
        <div>
            <metadata titulo={'Comparador móvil: compare precios y beneficios | Vuskoo'} descripcion={'Descubre y contrata las mejores ofertas en telefonía móvil con nuestro comparador de móviles. Compara planes, tarifas y contratos de distintos proveedores'} />
            <Header breadCrumb></Header>
            <Banner
                title={'Filtro por marca'}
                subtitle={'subtitle-baner-comparador-de-internet-y-comparador-movil'}
                image={'/img/internet-telefonia/banner_movil.png'}
                logo={'/img/icons/mobile.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <Footer></Footer>
        </div>
    )
}
