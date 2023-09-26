import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ButtonPrimary from '../Button/ButtonPrimary';
import InputText from '../Input/InputText';

export default function FormLead({ text, button, check, politicy = false, icon }) {
    const [checkInAsesoria, setCheckInAsesoria] = useState(false);
    const [checkInComercial, setCheckInComercial] = useState(false);

    const [inpEmail, setInpEmail] = useState('')
    const [isSend, setIsSend] = useState(false);
    const [textButton, setTextButton] = useState(button)

    const subscripcion = (e) => {
        e.preventDefault();
        //setIsSend(true)
        setTextButton('Suscripción exitosa!')
    }
    return (
        <Form onSubmit={subscripcion}>
            <div className='mx-2'>
                <InputText
                    text={inpEmail}
                    onChange={(e) => setInpEmail(e.target.value)}
                    type='email'
                    placeholder={text}
                    icon={icon}
                />
                <div className='my-3'>
                    <Form.Switch
                        className='input-check mt-2'
                        type='switch'
                        checked={checkInAsesoria}
                        label={'Acepto que Kolondoo me asesore telefónicamente sobre el producto y servicio elegido de acuerdo con su Política de Privacidad'}
                        onChange={(e) => {
                            setCheckInAsesoria(!checkInAsesoria)
                        }
                        }
                    />
                </div>
                <div className='my-3'>
                    <Form.Switch
                        className='input-check mt-2'
                        type='switch'
                        checked={checkInComercial}
                        label={'Acepto recibir comunicaciones comerciales de Kolondoo. Más información en Política de Privacidad'}
                        onChange={(e) => {
                            setCheckInComercial(!checkInComercial)
                        }
                        }
                    />
                </div>
                <div className='text-center m-4'>
                    <ButtonPrimary
                        text={textButton}
                        btnStatus={(checkInAsesoria && checkInComercial) ? false : true}
                        type={'submit'}
                        isSuccess={isSend ? 'btn-success' : 'null'}
                    />
                </div>
                {politicy &&
                    <Link className='link-politicy' to="politicy"> Política de Privacidad</Link>
                }
            </div>
        </Form>
    )
}




