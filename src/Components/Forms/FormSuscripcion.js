import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import InputText from '../Input/InputText';
import InputCheck from '../Input/InputCheck';
import { isMobile } from 'react-device-detect';
import BannerReverse from '../Banner/BannerReverse';
import { postFormNews } from '../../services/ApiServices';
import { useLocation } from 'react-router-dom';

function FormSuscripcion({ }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    const [checkIn, setCheckIn] = useState(false);
    const [isError, setIsError] = useState(null)
    const [inpEmail, setInpEmail] = useState(null)
    const [isSend, setIsSend] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(null)

    const handleEmailChange = (input) => {
        setInpEmail(input);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(input));
    };

    const changeValue = (valor) => {
        setCheckIn(valor);
    };


    async function subscripcion(e) {
        e.preventDefault();
        setIsSend(false)
        setIsError(null)
        try {
            const response = await postFormNews(inpEmail);
            if (response.status === 201) {
                setInpEmail('')
                setCheckIn(false);
                setIsSend(true)
            }
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setIsError('Error al procesar tu solicitud')
        }
    }

    return (
        <>
            <BannerReverse
                title={'Suscríbete gratis y recibe nuestras mejores ofertas'}
                subtitle='Únete a nuestra comunidad. Recibirás nuestros mejores contenidos semanalmente: guías prácticas para ahorrar y gestionar tu consumo, últimas entradas…¡ Y mucho más!'
                image={'/img/bannerFooter.png'}
            >
                <Form onSubmit={subscripcion}>
                    <div className='mx-2'>
                        {
                            !isMobile ?
                                <InputGroup className="">
                                    <Form.Control
                                        className={'form-control no-radius'}
                                        placeholder={('Escribe tu email aquí')}
                                        aria-label={('Escribe tu email aquí')}
                                        type={'email'}
                                        onChange={(e) => handleEmailChange(e.target.value)}
                                        value={inpEmail}
                                    />
                                    <Button
                                        type='submit'
                                        disabled={(!checkIn && isValidEmail) ? false : true}
                                    >
                                        Suscríbete gratis
                                    </Button>
                                </InputGroup>
                                :
                                <>
                                    <Form.Control
                                        className={'form-control no-radius'}
                                        placeholder={('Escribe tu email aquí')}
                                        aria-label={('Escribe tu email aquí')}
                                        type={'email'}
                                        onChange={(e) => handleEmailChange(e.target.value)}
                                        value={inpEmail}
                                    />
                                    <Button
                                        type='submit'
                                        disabled={(!checkIn && isValidEmail) ? false : true}
                                        className='col-12'
                                    >
                                        Suscríbete gratis
                                    </Button>
                                </>
                        }
                        {
                            isSend && 
                            <p className='color-green'>Tu suscripción se realizó con éxito</p>
                        }
                        <InputCheck
                            onChangeValue={changeValue}
                            text={`He leído y acepto <a href='/es/politica-privacidad' target='_self'>la Política de Privacidad</a> y quiero recibir comunicaciones comerciales.`}
                        />
                    </div>
                </Form>
            </BannerReverse>
        </>
    );
}

export default FormSuscripcion;