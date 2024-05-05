import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { BsFillTelephoneFill, BsXCircle, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { postLeadVehiculo } from '../../services/ApiServices'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export default function FormLeadVehiculo({  }) {
    const { t } = useTranslation();

    const [lang, setLang] = useState(null)
    const location = useLocation();

    const [checkInAsesoria, setCheckInAsesoria] = useState(false);
    const [checkInComercial, setCheckInComercial] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [urlSplit, setUrlSplit] = useState([])

    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isError, setIsError] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        setUrlSplit(location.pathname.split('/'))
        setLang(location.pathname.split('/')[1])
    }, [])


    const handlePhoneNumberChange = (e) => {
        const inputValue = e.target.value;
        const inputPhoneNumber = inputValue.replace(/\D/g, '');
        setPhoneNumber(inputPhoneNumber);
        const phoneNumberRegex = /^[6-9]\d{8}$/;
        const isValid = phoneNumberRegex.test(inputPhoneNumber);
        setIsValidPhoneNumber(isValid);
    };

    const [textButton, setTextButton] = useState('Enviar')

    async function subscripcion(e) {
        e.preventDefault();
        setIsError(false)
        setIsSend(true)
        try {
            const response = await postLeadVehiculo(phoneNumber);
            if (response?.data.status === 201) {
                setTextButton('Tu solicitud ha sido registrada.');
                setCheckInComercial(false);
                setTimeout(() => {
                    //navigate(`/es/${urlSplit[2]}/${urlSplit[3]}/thank/${urlSplit[4]}`);
                }, 3000);
            } else if (response?.data.status === 308) {
                setTextButton('Tu solicitud ha sido registrada.');
                setCheckInComercial(false);
                setTimeout(() => {
                    navigate(``);
                }, 3000);
            } else {
                setIsError(response?.data?.message);
            }
        } catch (error) {
            setTextButton('Error al procesa la solicitud')
            setIsError(error.statusText)
        }
    }

    return (
        <Form onSubmit={subscripcion}>
            <div className='mx-2'>
                <div className="input-group my-1">
                    <Form.Control
                        className={'form-control no-radius'}
                        placeholder={t('Nombre')}
                        aria-label={t('Nombre')}
                        type={'text'}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                {(!isValidPhoneNumber && phoneNumber?.length > 4) &&
                    <div className="text-danger mt-3"><BsXCircle />&nbsp;El número de teléfono ingresado no es valido</div>
                }
                <div className="input-group my-1">
                    <Form.Control
                        className={'form-control no-radius'}
                        placeholder={t('Apellidos')}
                        aria-label={t('Apellidos')}
                        type={'text'}
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div className="input-group my-1">
                    <Form.Control
                        className={'form-control no-radius'}
                        placeholder={t('Correo electrónico')}
                        aria-label={t('Correo electrónico')}
                        type={'email'}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="input-group my-1">
                    <Form.Control
                        className={'form-control no-radius'}
                        placeholder={t('Teléfono')}
                        aria-label={t('Teléfono')}
                        type={'tel'}
                        pattern="[0-9]*"  // Esto permite solo números
                        onChange={handlePhoneNumberChange}
                        value={phoneNumber}
                        isSuccess={isValidPhoneNumber}
                        maxLength={9}
                    />
                </div>
                <div className='my-3'>
                    <Form.Group controlId="switchControlId1">
                        <Form.Switch
                            className='input-check mt-2'
                            type='switch'
                            checked={checkInComercial}
                            label={
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            `He leído y acepto la <a href="">Política de Privacidad</a> y quiero recibir comunicaciones comerciales.`,
                                    }}
                                />
                            }
                            onChange={() => setCheckInComercial(!checkInComercial)}
                        />
                    </Form.Group>
                </div>
                {isError !== false &&
                    <div className='my-3'>
                        <span className='color-red' dangerouslySetInnerHTML={{ __html: isError }}></span>
                    </div>
                }

                <div className='text-center m-4'>
                    <Button
                        disabled={(checkInComercial && isValidPhoneNumber) ? false : true}
                        type="submit"
                    >
                        {textButton}
                    </Button>
                </div>
            </div>
        </Form>

    )
}




