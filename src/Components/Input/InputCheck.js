import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function InputCheck(props) {
    const [checkIn, setCheckIn] = useState(true);
    const enviarValorAlPadre = () => {
        props.onChangeValue(checkIn);
    };

    return (
        <div className='my-3'>
            <Form.Group controlId="switchControlId">
                <Form.Switch
                    className='input-check mt-2'
                    type='switch'
                    checked={checkIn}
                    label={
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
                        </div>
                    }
                    onChange={(e) => {
                        enviarValorAlPadre();
                        setCheckIn(!checkIn);
                    }}
                />
            </Form.Group>
        </div>
    )
}
