import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonPrimary from '../Button/ButtonPrimary';
import InputText from '../Input/InputText';
import InputRange from '../Input/InputRange';
import InputCheck from '../Input/InputCheck';

function FormSuscripcion({ text, button, check, politicy = false }) {

    const [checkIn, setCheckIn] = useState(false);

    const manejarValorDesdeHijo = (valor) => {
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
                <InputGroup className="mt-3">
                    <InputText
                        text={inpEmail}
                        onChange={(e) => setInpEmail(e.target.value)}
                        type='email'
                        placeholder={text}
                    />
                    <ButtonPrimary
                        text={textButton}
                        btnStatus={checkIn}
                        type={'submit'}
                        isSuccess={isSend ? 'btn-success' : 'null'}
                    />
                </InputGroup>
                {check &&
                    <InputCheck
                        onValorChange={manejarValorDesdeHijo}
                        text={'He leído y acepto la Política de Privacidad y quiero recibir comunicaciones comerciales.'}
                    />}
                {politicy &&
                    <Link className='link-politicy' to="politicy"> Política de Privacidad</Link>
                }
            </div>
        </Form>

    );
}

export default FormSuscripcion;