import React from 'react';

const App = () => {
    // Supongamos que tienes estas variables dinámicas
    const varURLdelDespliegue = 'https://www.ejemplo.com';
    const VarDescripcionGeneral = 'Descripción dinámica';
    const VarTituloGeneral = 'Título dinámico';
    
    return (
        <>
            <meta name="author" content="Vuskoo" />
            <meta name="geo.region" content="ES" />
            <meta name="geo.position" content="43.009738;-7.5567583" />
            <meta name="ICBM" content="43.009738;-7.556758" />
            <meta name="geo.placename" content="España" />
            <meta name="language" content="spanish" />
            <link href={varURLdelDespliegue} rel="canonical" />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={VarDescripcionGeneral} />
            <title>{VarTituloGeneral} | Vuskoo</title>
            <meta name="robots" content="index, follow" />
        </>
    );
};

export default App;
