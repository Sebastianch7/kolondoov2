import React, { useEffect, useState } from 'react';
import InputCheck from '../Input/InputCheck';
import { isMobile } from 'react-device-detect';
import { postFormContactanos } from '../../services/ApiServices'
import { Button, Card, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export default function FormContactenos({ }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    const [checkIn, setCheckIn] = useState(false);
    const { t } = useTranslation();
    const [isError, setIsError] = useState(null)

    const changeValue = (valor) => {
        setCheckIn(valor);
    };

    const [inpName, setInpName] = useState(null)
    const [inpMessage, setInpMessage] = useState(null)
    const [inpEmail, setInpEmail] = useState(null)
    const [isSend, setIsSend] = useState(false);
    const [textButton, setTextButton] = useState('Enviar consulta')

    async function subscripcion(e) {
        e.preventDefault();
        setIsSend(false)
        setIsError(null)
        try {
            const response = await postFormContactanos(inpName, inpMessage, inpEmail);
            if (response.status === 201) {
                setInpName('')
                setInpMessage('')
                setInpEmail('')
                setIsSend(true)
            }
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setIsError('Error al procesar tu solicitud')
        }
    }


    return (
        <Form onSubmit={subscripcion}>
            <div className='mx-2'>
                {
                    <>
                        <Form.Control
                            className={'form-control no-radius my-md-3'}
                            placeholder={t('Nombre')}
                            aria-label={t('Nombre')}
                            type={'text'}
                            onChange={(e) => setInpName(e.target.value)}
                            value={inpName}
                        />
                        <Form.Control
                            className={'form-control no-radius my-md-3'}
                            placeholder={t('Tu consulta aqui')}
                            aria-label={t('Tu consulta aqui')}
                            type={'text'}
                            onChange={(e) => setInpMessage(e.target.value)}
                            value={inpMessage}
                        />
                        <Form.Control
                            className={'form-control no-radius my-md-3'}
                            placeholder={t('email')}
                            aria-label={t('email')}
                            type={'text'}
                            onChange={(e) => setInpEmail(e.target.value)}
                            value={inpEmail}
                        />
                    </>
                }

                <InputCheck
                    onChangeValue={changeValue}
                    text={`He leído y acepto <a href={"/${lang}/politica-privacidad"} target='_blank'>la Política de Privacidad</a> y quiero recibir comunicaciones comerciales.`}
                    politica
                />

                {
                    isError &&
                    <p className='color-red'>No pudimos registrar tu mensaje en estos momentos, intenta de nuevo</p>
                }
                {
                    isSend &&
                    <p className='color-green'>Gracias por enviar tu mensaje, pronto te contactaremos</p>
                }
                <Button
                    type='submit'
                    disabled={(!checkIn && inpName?.length > 3 && inpMessage?.length > 3 && inpEmail?.length > 3) ? false : true}
                >
                    Enviar consulta
                </Button>
            </div>
        </Form>
    )
}
