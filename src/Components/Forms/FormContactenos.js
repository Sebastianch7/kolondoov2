import React, { useEffect, useState } from 'react';
import InputText from '../Input/InputText';
import InputCheck from '../Input/InputCheck';
import { isMobile } from 'react-device-detect';
import { postFormContactanos } from '../../services/ApiServices'
import { Button, Card, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function FormContactenos({ }) {
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
        console.log(inpName)
        e.preventDefault();
        setIsError(null)
        try {
            const response = await postFormContactanos(inpName, inpMessage, inpEmail);
            console.log(response)
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setIsError(error)
        }
    }
    return (
        <Form onSubmit={subscripcion}>
            <div className='mx-2'>
                {
                    <>
                        <Form.Control
                            className={'form-control no-radius'}
                            placeholder={t('Nombre')}
                            aria-label={t('Nombre')}
                            type={'text'}
                            onChange={(e) => setInpName(e.target.value)}
                            value={inpName}
                        />
                        <Form.Control
                            className={'form-control no-radius'}
                            placeholder={t('Tu consulta aqui')}
                            aria-label={t('Tu consulta aqui')}
                            type={'text'}
                            onChange={(e) => setInpMessage(e.target.value)}
                            value={inpMessage}
                        />
                        <Form.Control
                            className={'form-control no-radius'}
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
                    text={`He leído y acepto <a href="politica-privacidad" target='_blank'>la Política de Privacidad</a> y quiero recibir comunicaciones comerciales.`}
                    politica
                />

                <Button
                    type='submit'
                    disabled={checkIn}
                >
                    Enviar consulta
                </Button>

            </div>
        </Form>
    )
}
