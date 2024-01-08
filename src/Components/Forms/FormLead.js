import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { BsFillTelephoneFill, BsXCircle, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { postLead } from '../../services/ApiServices'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export default function FormLead({ idPlan, landing, offerLooking, urlOffers, company }) {
    const { t } = useTranslation();

    const [lang, setLang] = useState(null)
    const location = useLocation();

    const [checkInAsesoria, setCheckInAsesoria] = useState(false);
    const [checkInComercial, setCheckInComercial] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('+34');
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [urlOffer, setUrlOffer] = useState(urlOffers);

    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [isSend, setIsSend] = useState(false);
    const [isError, setIsError] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])


    const handlePhoneNumberChange = (e) => {
        const inputPhoneNumber = e.target.value;
        setPhoneNumber(inputPhoneNumber);
        const phoneNumberRegex = /^\+34[6-9]\d{8}$/;
        const isValid = phoneNumberRegex.test(inputPhoneNumber);
        setIsValidPhoneNumber(isValid);
    };

    const [textButton, setTextButton] = useState('LLÁMAME AHORA')

    async function subscripcion(e) {
        e.preventDefault();
        setIsError(false)
        setIsSend(true)
        try {
            const response = await postLead(idPlan, phoneNumber, landing, urlOffer, company);
            if (response?.data.status === 201) {
                setTextButton('Tu solicitud ha sido registrada.')
                setCheckInAsesoria(false)
                setTimeout(() => {
                    navigate(`/${lang}/thank/${landing}/${idPlan}`)
                }, 3000)
            } else {
                setIsError(response?.data?.message)
            }
        } catch (error) {
            setTextButton('Error al procesa la solicitud')
            setIsError(error.statusText)
        }
    }

    return (
        <Card className='tarjeta-lead'>
            <Card.Header className="text-center">{t('Oferta disponible')}</Card.Header>
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
                                    placeholder={t('Introduce tu teléfono')}
                                    aria-label={t('Introduce tu teléfono')}
                                    type={'phone'}
                                    onChange={handlePhoneNumberChange}
                                    value={phoneNumber}
                                    isSuccess={isValidPhoneNumber}
                                />
                            </div>
                            {(!isValidPhoneNumber && phoneNumber?.length > 4) &&
                                <div className="text-danger mt-3"><BsXCircle />&nbsp;El número de teléfono ingresado no es valido</div>
                            }
                            <div className='my-3'>
                                <Form.Switch
                                    className='input-check mt-2'
                                    type='switch'
                                    checked={checkInAsesoria}
                                    label={'Acepto que Vuskoo me asesore telefónicamente sobre el producto y servicio elegido de acuerdo con su Política de Privacidad'}
                                    onChange={() => setCheckInAsesoria(!checkInAsesoria)}
                                />
                            </div>
                            <div className='my-3'>
                                <Form.Switch
                                    className='input-check mt-2'
                                    type='switch'
                                    checked={checkInComercial}
                                    label={'Acepto recibir comunicaciones comerciales de Vuskoo. Más información en Política de Privacidad'}
                                    onChange={() => setCheckInComercial(!checkInComercial)}
                                />
                            </div>
                            {isError !== false &&
                                <div className='my-3'>
                                    <span className='color-red' dangerouslySetInnerHTML={{ __html: isError }}></span>
                                </div>
                            }

                            <div className='text-center m-4'>
                                <Button
                                    disabled={(checkInAsesoria && isValidPhoneNumber) ? false : true}
                                    type="submit"
                                >
                                    {textButton}
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card >
    )
}




