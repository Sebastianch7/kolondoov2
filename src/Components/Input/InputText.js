import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { Form } from 'react-bootstrap';

function InputText({ text, type = 'text', placeholder, icon }) {
    return (
        <div className="input-group">
            <span className="input-group-text"><BsFillTelephoneFill /></span>
            <Form.Control
                className={`form-control {isMobile}`}
                placeholder={placeholder}
                aria-label={text}
                type={type}
            />
        </div>

    );
}

export default InputText;
