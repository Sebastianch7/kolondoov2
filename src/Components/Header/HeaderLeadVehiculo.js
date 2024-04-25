import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function HeaderLeadVehiculo({logo}) {
    const { t } = useTranslation();
    
    return (
        <>
            <Navbar bg="ligth" data-bs-theme="ligth">
                <Container>
                <img className='img-fluid' src={logo} alt={logo} style={{ height: '100px' }} />
                </Container>
            </Navbar>
        </>
    );
}
