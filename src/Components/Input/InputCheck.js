import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function InputCheck(props) {
    console.log(props)
    const [checkIn, setCheckIn] = useState(true);
    const enviarValorAlPadre = () => {
        props.onValorChange(checkIn);
    };

    return (
        <Form.Switch
            className='input-check mt-2'
            type='switch'
            checked={checkIn}
            label={props.text}
            onChange={(e) => {
                enviarValorAlPadre()
                setCheckIn(!checkIn)
            }
            }
        />
    )
}
