import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function InputCheck(props) {
    const [checkIn, setCheckIn] = useState(true);
    const enviarValorAlPadre = () => {
        props.onChangeValue(checkIn);
    };

    return (
        <div className='my-3'>
            <Form.Switch
                className='input-check mt-2'
                type='switch'
                checked={checkIn}
                label={
                    <div dangerouslySetInnerHTML={{ __html: props.text }}>
                        {props.politica && <a href="politica-privacidad" target='_blank'>la Política de Privacidad</a>}
                    </div>
                }
                onChange={(e) => {
                    enviarValorAlPadre();
                    setCheckIn(!checkIn);
                }}
            />
        </div>
    )
}
