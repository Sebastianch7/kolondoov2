import React from 'react';
import { Form } from 'react-bootstrap';
function InputText({text, type, placeholder}) {
    return (
        <Form.Control
            className={`form-input {isMobile}`}
            placeholder={placeholder}
            aria-label={text}
            type={type}
        />
    );
}
export default InputText;