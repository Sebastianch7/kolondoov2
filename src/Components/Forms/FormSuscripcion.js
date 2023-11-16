import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonPrimary from '../Button/ButtonPrimary';
import InputText from '../Input/InputText';
import InputCheck from '../Input/InputCheck';
import { isMobile } from 'react-device-detect';
import BannerReverse from '../Banner/BannerReverse';

function FormSuscripcion({ }) {

    const [checkIn, setCheckIn] = useState(false);
    const text = 'Escribe tu mail aqui';

    const changeValue = (valor) => {
        console.log(checkIn)
        setCheckIn(valor);
    };

    const [inpEmail, setInpEmail] = useState('')
    const [isSend, setIsSend] = useState(false);
    const [textButton, setTextButton] = useState('button')
    const subscripcion = (e) => {
        e.preventDefault();
        //setIsSend(true)
        setTextButton('Suscripción exitosa!')
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
                                <InputGroup className="mt-3">
                                    <InputText
                                        text={text}
                                        onChange={(e) => setInpEmail(e.target.value)}
                                        type='email'
                                        placeholder={text}
                                    />
                                    <ButtonPrimary
                                        text={'Suscríbete gratis'}
                                        btnStatus={checkIn}
                                        type={'submit'}
                                        isSuccess={isSend && 'btn-success'}
                                    />
                                </InputGroup>
                                :
                                <>
                                    <InputText
                                        text={text}
                                        onChange={(e) => setInpEmail(e.target.value)}
                                        type='email'
                                        placeholder={text}
                                    />
                                    <ButtonPrimary
                                        text={'Suscríbete gratis'}
                                        btnStatus={checkIn}
                                        type={'submit'}
                                        isSuccess={isSend ? 'btn-success' : 'null'}
                                    />
                                </>
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