import React from 'react';
import { Button, Col } from 'react-bootstrap';

function ButtonPrimary({ icon, text, btnStatus, type, isSuccess }) {
    return (
        <Button key={text} className={isSuccess } type={type} disabled={btnStatus}>{icon && <img src={icon} />} {text}</Button>
    );
}

export default ButtonPrimary;