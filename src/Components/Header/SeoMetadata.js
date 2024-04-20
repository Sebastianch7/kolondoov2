import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;
const App = ({ titulo, descripcion, url, imagen_destacada = `${apiUrl}/img/logos/logo.svg` }) => {
    const location = useLocation();
    const apiUrl = process.env.REACT_APP_API_URL;
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Vuskoo" />
            <meta name="geo.region" content="ES" />
            <meta name="geo.position" content="40.4165, -3.70256" />
            <meta name="ICBM" content="40.4165, -3.70256" />
            <meta name="geo.placename" content="España" />
            <meta name="language" content="spanish" />
            <meta name="description" content={descripcion} />
            <title>{titulo}</title>
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`www.${apiUrl}${location.pathname}`} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={titulo} />
            <meta property="og:description" content={descripcion} />
            <meta property="og:url" content={`www.${apiUrl}${location.pathname}`} />
            <meta property="og:image" content={`${imagen_destacada}`} />
            <meta property="og:site_name" content="Vuskoo" />
            <meta property="fb:admins" content="222214799752613" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:locale:alternate" content="es_ES" />

        </Helmet>
    );
};

export default App;
