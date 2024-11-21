import React, { useEffect } from 'react';

export default function SimuladorSolicitudFinanciacion() {
    useEffect(() => {
        // Crear y cargar el script después de que el iframe esté disponible en el DOM
        const script = document.createElement('script');
        script.src = "https://statics.app.kreditiweb.com/iframe/kw3_0_iframe.js";
        script.defer = true;

        // Escucha de eventos para asegurarnos de que el iframe esté listo antes de cargar el script
        const iframe = document.getElementById('kw_iframe');
        iframe.onload = () => {
            document.body.appendChild(script);
        };

        // Limpieza del script
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                id="kw_iframe"
                width="100%"
                height="100%"
                src="https://app.kreditiweb.com/es/finanzas?token=8da9913634f5b3446bc1243117877ffe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
