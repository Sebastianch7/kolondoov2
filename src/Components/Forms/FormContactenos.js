import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonPrimary from '../Button/ButtonPrimary';
import InputText from '../Input/InputText';
import InputCheck from '../Input/InputCheck';
import { isMobile } from 'react-device-detect';

export default function FormContactenos({ }) {
    const [checkIn, setCheckIn] = useState(false);

    const changeValue = (valor) => {
        setCheckIn(valor);
    };

    const [inpName, setInpName] = useState('')
    const [inpMessage, setInpMessage] = useState('')
    const [inpEmail, setInpEmail] = useState('')
    const [isSend, setIsSend] = useState(false);
    const [textButton, setTextButton] = useState('Enviar consulta')
    const subscripcion = (e) => {
        e.preventDefault();
        //setIsSend(true)
        setTextButton('Suscripción exitosa!')
    }
    return (
        <Form onSubmit={subscripcion}>
            <div className='mx-2'>
                {
                    <>
                        <InputText
                            text={inpName}
                            onChange={(e) => setInpName(e.target.value)}
                            type='text'
                            placeholder={'Nombre*'}
                        />
                        <InputText
                            text={inpMessage}
                            onChange={(e) => setInpMessage(e.target.value)}
                            type='text'
                            placeholder={'Tu consulta'}
                            textarea
                        />
                        <InputText
                            text={inpEmail}
                            onChange={(e) => setInpEmail(e.target.value)}
                            type='email'
                            placeholder={'email*'}
                        />
                    </>
                }

                <InputCheck
                    onChangeValue={changeValue}
                    text={'He leído y acepto '}
                    politica
                />

                <ButtonPrimary
                    text={'Enviar consulta'}
                    type={'submit'}
                    btnStatus={checkIn}
                    isSuccess={isSend && 'btn-success'}
                />

            </div>
        </Form>
    )
}
