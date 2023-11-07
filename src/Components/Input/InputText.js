import React from 'react';
import { Form } from 'react-bootstrap';
function InputText({text, type, placeholder, textarea}) {
    return (
        <Form.Control
            className={`form-input {isMobile} my-2 my-sm-1`}
            placeholder={placeholder}
            aria-label={text}
            type={type}
            as={textarea && "textarea"}
        />
    );
}
export default InputText;