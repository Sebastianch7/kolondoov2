import React from 'react'
export default function Simulador() {
    return (
        <>
            <h6><a href="https://app.kreditiweb.com/es/finanzas?token=0b18b8f8f26988c4ad929dc23cfbe6da">https://app.kreditiweb.com/es/finanzas?token=0b18b8f8f26988c4ad929dc23cfbe6da</a></h6>
            <iframe
                id="kw_iframe1"
                width="100%"
                height="100%"
                src="https://app.kreditiweb.com/es/finanzas?token=0b18b8f8f26988c4ad929dc23cfbe6da"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='border border-dark'
            ></iframe>

            <h6><a href="https://app.kreditiweb.com/es/finanzas?token=8da9913634f5b3446bc1243117877ffe">https://app.kreditiweb.com/es/finanzas?token=8da9913634f5b3446bc1243117877ffe</a></h6>
            <iframe
                id="kw_iframe2"
                width="100%"
                height="100%"
                src="https://app.kreditiweb.com/es/finanzas?token=8da9913634f5b3446bc1243117877ffe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='border border-dark'
            ></iframe>

            <script defer src="https://statics.app.kreditiweb.com/iframe/kw3_0_iframe.js"></script>
        </>
    );
}
