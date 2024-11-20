import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { fetchDataAll } from "../../services/ApiServices";

const apiUrl = process.env.REACT_APP_API_URL;

const SeoMetadata = ({
  titulo = "Default Title",
  descripcion = "Default Description",
  url,
  robots = "index, follow",
  imagen_destacada = `${apiUrl}/img/logos/logo.svg`,
}) => {
  const [lang, setLang] = useState(null);
  const [dataSeo, setDataSeo] = useState({});
  const location = useLocation();

  // Extraer el idioma de la URL
  useEffect(() => {
    const langPath = location.pathname.split("/")[1];
    setLang(langPath || "default");
  }, [location]);

  // Obtener datos SEO
  useEffect(() => {
    if (lang) {
      const fetchSeoData = async () => {
        try {
          const response = await fetchDataAll("MetaDataSEO", lang);
          setDataSeo(response || {});
        } catch (error) {
          console.error("Error al obtener los datos SEO:", error);
        }
      };

      fetchSeoData();
    }
  }, [lang]);

  return (
    <Helmet>
      {/* Meta Tags Globales */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Vuskoo" />

      {/* Meta Tags SEO */}
      <meta name="description" content={descripcion} />
      <meta name="robots" content={robots} />
      <title>{titulo}</title>
      <link rel="canonical" href={url || `${apiUrl}${location.pathname}`} />

      {/* Meta Tags de Geolocalización */}
      <meta name="geo.region" content={dataSeo.geo_region || ""} />
      <meta name="geo.position" content={dataSeo.geo_position || ""} />
      <meta name="ICBM" content={dataSeo.geo_position || ""} />
      <meta name="geo.placename" content={dataSeo.geo_placename || ""} />
      <meta name="language" content={dataSeo.language || "en"} />

      {/* Meta Tags de Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titulo} />
      <meta property="og:description" content={descripcion} />
      <meta
        property="og:url"
        content={url || `${apiUrl}${location.pathname}`}
      />
      <meta property="og:image" content={imagen_destacada} />
      <meta property="og:site_name" content="Vuskoo" />
      <meta property="og:locale" content={dataSeo.locale || "en_US"} />
      <meta
        property="og:locale:alternate"
        content={dataSeo.locale || "en_US"}
      />

      {/* Meta Tags de Facebook */}
      <meta property="fb:admins" content="222214799752613" />
    </Helmet>
  );
};

export default SeoMetadata;
