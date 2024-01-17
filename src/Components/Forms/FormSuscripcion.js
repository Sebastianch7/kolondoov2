import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import InputText from '../Input/InputText';
import InputCheck from '../Input/InputCheck';
import { isMobile } from 'react-device-detect';
import BannerReverse from '../Banner/BannerReverse';
import { postFormNews } from '../../services/ApiServices';

function FormSuscripcion({ }) {

    const [checkIn, setCheckIn] = useState(false);
    const [isError, setIsError] = useState(null)

    const changeValue = (valor) => {
        setCheckIn(valor);
    };

    const [inpEmail, setInpEmail] = useState(null)
    const [isSend, setIsSend] = useState(false);

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
                subtitle='Únete a nuestra comunidad. Recibirás nuestros mejores contenidos semanalmente: guías prácticas para ahorrar y gestionar tu consumo, últimas noticias…¡Y mucho más!'
                image={'/img/bannerFooter.png'}
            >
                <Form onSubmit={subscripcion}>
                    <div className='mx-2'>
                        {
                            !isMobile ?
                                <InputGroup className="">
                                    <Form.Control
                                        className={'form-control no-radius'}
                                        placeholder={('Escribe tu mail aqui')}
                                        aria-label={('Escribe tu mail aqui')}
                                        type={'text'}
                                        onChange={(e) => setInpEmail(e.target.value)}
                                        value={inpEmail}
                                    />
                                    <Button
                                        type='submit'
                                        disabled={(!checkIn && inpEmail?.length > 3) ? false : true}
                                    >
                                        Suscribete gratis
                                    </Button>
                                </InputGroup>
                                :
                                <>
                                    <Form.Control
                                        className={'form-control no-radius'}
                                        placeholder={('Escribe tu mail aqui')}
                                        aria-label={('Escribe tu mail aqui')}
                                        type={'text'}
                                        onChange={(e) => setInpEmail(e.target.value)}
                                        value={inpEmail}
                                    />
                                    <Button
                                        type='submit'
                                        disabled={(!checkIn && inpEmail?.length > 3) ? false : true}
                                    >
                                        Suscribete gratis
                                    </Button>
                                </>
                        }
                        {
                            isSend && 
                            <p className='color-green'>Tu suscripción se realizó con exito</p>
                        }
                        <InputCheck
                            onChangeValue={changeValue}
                            text={`He leído y acepto <a href="politica-privacidad" target='_blank'>la Política de Privacidad</a> y quiero recibir comunicaciones comerciales.`}
                        />
                    </div>
                </Form>
            </BannerReverse>
        </>
    );
}

export default FormSuscripcion;