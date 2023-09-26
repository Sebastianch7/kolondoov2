import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function NotInfoItem({ title, text }) {

    return (
        <Alert variant="danger" dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            <p>
                {text}
            </p>
        </Alert>
    );
}

