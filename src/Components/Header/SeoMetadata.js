import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { fetchSeoMeta } from '../../services/ApiServices';

const apiUrl = process.env.REACT_APP_API_URL;
const App = ({ titulo, descripcion, url, imagen_destacada = `${apiUrl}/img/logos/logo.svg` }) => {
    const [lang, setLang] = useState(null)
    const [dataSeo, setDataSeo] = useState([])
    const location = useLocation();
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    useEffect(() => {
        if (lang != null) {
          const fetchSeoData = async () => {
            try {
              const response = await fetchSeoMeta(lang)
              setDataSeo(response);
            } catch (error) {
              console.error("Error al obtener las marcas de operadoras:", error);
            }
          };
    
          fetchSeoData();
        }
      }, [lang]);

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Vuskoo" />
            <meta name="geo.region" content={dataSeo?.geo_region} />
            <meta name="geo.position" content={dataSeo?.geo_position} />
            <meta name="ICBM" content={dataSeo?.geo_position} />
            <meta name="geo.placename" content={dataSeo?.geo_placename} />
            <meta name="language" content={dataSeo?.language} />
            <meta name="description" content={descripcion} />
            <title>{titulo}</title>
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`${apiUrl}${location.pathname}`} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={titulo} />
            <meta property="og:description" content={descripcion} />
            <meta property="og:url" content={`${apiUrl}${location.pathname}`} />
            <meta property="og:image" content={`${imagen_destacada}`} />
            <meta property="og:site_name" content="Vuskoo" />
            <meta property="fb:admins" content="222214799752613" />
            <meta property="og:locale" content={dataSeo?.locale} />
            <meta property="og:locale:alternate" content={dataSeo?.locale} />

        </Helmet>
    );
};

export default App;
