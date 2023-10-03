import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary';
import { BsFillTelephoneFill } from "react-icons/bs";
import axios from 'axios';

export default function FormLead({ idPlan, landing }) {
    const [checkInAsesoria, setCheckInAsesoria] = useState(true);
    const [checkInComercial, setCheckInComercial] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

    const handlePhoneNumberChange = (e) => {
        const inputPhoneNumber = e.target.value;
        setPhoneNumber(inputPhoneNumber);
        const phoneNumberRegex = /^[6-8]\d{8}$/
        const isValid = phoneNumberRegex.test(inputPhoneNumber);
        setIsValidPhoneNumber(isValid);
    };

    const [isSend, setIsSend] = useState(false);
    const [textButton, setTextButton] = useState('LLÁMAME AHORA')

    const subscripcion = (e) => {
        e.preventDefault();
        try {
            const response = axios.post('http://127.0.0.1:8000/api/newLeadMobile', {idPlan, phoneNumber, landing});
            console.log('Respuesta de la API después de enviar datos:', response.data);
            setTextButton('Suscripcion exitosa')
            setIsSend(true)
            setPhoneNumber('')
            setIsValidPhoneNumber(false)
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    }
    return (
        <Card className='tarjeta-lead'>
            <Card.Header className="text-center">¡Oferta disponible!</Card.Header>
            <Card.Body>
                <Card.Text className='text-center text-primary'>
                    Déjanos tu teléfono y <b>te llamamos gratis</b>
                </Card.Text>
                <Card.Text>
                    <Form onSubmit={subscripcion}>
                        <div className='mx-2'>
                            <div className="input-group">
                                <span className="input-group-text"><BsFillTelephoneFill /></span>
                                <Form.Control
                                    className={'form-control no-radius'}
                                    placeholder={'Introduce tu teléfono'}
                                    aria-label={'Introduce tu teléfono'}
                                    type={'phone'}
                                    onChange={handlePhoneNumberChange}
                                    value={phoneNumber}
                                    isSuccess={isValidPhoneNumber}
                                />
                            </div>
                            <div className='my-3'>
                                <Form.Switch
                                    className='input-check mt-2'
                                    type='switch'
                                    checked={checkInAsesoria}
                                    label={'Acepto que Kolondoo me asesore telefónicamente sobre el producto y servicio elegido de acuerdo con su Política de Privacidad'}
                                    onChange={() => setCheckInAsesoria(!checkInAsesoria)}
                                />
                            </div>
                            <div className='my-3'>
                                <Form.Switch
                                    className='input-check mt-2'
                                    type='switch'
                                    checked={checkInComercial}
                                    label={'Acepto recibir comunicaciones comerciales de Kolondoo. Más información en Política de Privacidad'}
                                    onChange={() => setCheckInComercial(!checkInComercial)}
                                />
                            </div>
                            <div className='text-center m-4'>
                                <ButtonPrimary
                                    text={textButton}
                                    btnStatus={(checkInAsesoria && isValidPhoneNumber) ? false : true}
                                    type={'submit'}
                                    isSuccess={isSend ? 'btn-success' : 'null'}
                                />
                            </div>
                        </div>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}




