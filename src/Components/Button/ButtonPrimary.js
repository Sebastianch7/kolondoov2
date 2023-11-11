import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ButtonPrimary({ icon, text, btnStatus, type, isSuccess, url }) {
    return (
        <Link 
        key={text} 
        className={`${isSuccess} mt-2 mt-md-0 btn btn-primary`} 
        type={type} 
        to={url}
        disabled={btnStatus}>{icon && <img src={icon} />} {text}</Link>
    );
}

export default ButtonPrimary;