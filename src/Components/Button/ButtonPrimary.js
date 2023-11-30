import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ButtonPrimary({ icon, text, btnStatus = false, type, isSuccess, url }) {
    return (
        <Link 
        key={text} 
        className={`${isSuccess} my-1 btn btn-primary ${btnStatus && 'disabled'}`} 
        type={type} 
        to={url}
        >{icon && <img src={icon} />} {text}</Link>
    );
}

export default ButtonPrimary;