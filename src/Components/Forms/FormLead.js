import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonPrimary from '../Button/ButtonPrimary';
import InputText from '../Input/InputText';
import InputCheck from '../Input/InputCheck';

export default function FormLead({ text, button, check, politicy = false }) {
    const [checkIn, setCheckIn] = useState(false);

    const changeValue = (valor) => {
        setCheckIn(valor);
    };

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
                />
                <div className='m-4'></div>
                <InputCheck
                    onChangeValue={changeValue}
                    text={'Acepto que Kolondoo me asesore telefónicamente sobre el producto y servicio elegido de acuerdo con su Política de Privacidad'}
                />
                <div className='m-4'></div>
                <InputCheck
                    onChangeValue={changeValue}
                    text={'Acepto recibir comunicaciones comerciales de Kolondoo.'}
                />
                <div className='text-center m-4'>
                    <ButtonPrimary
                        text={textButton}
                        btnStatus={checkIn}
                        type={'submit'}
                        isSuccess={isSend ? 'btn-success' : 'null'}
                    />
                </div>
                {politicy &&
                    <Link className='link-politicy' to="politicy"> Política de Privacidad</Link>
                }
                <p className='mt-3 mb-1 text-center'>O si lo prefieres llama gratis al
                    <h5>911 821 808</h5>
                </p>
            </div>
        </Form>
    )
}




