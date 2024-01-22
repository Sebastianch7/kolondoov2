import React, {useState, useEffect} from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ButtonPrimary from '../Button/ButtonPrimary';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function TarjetaProducto({ data, large }) {
    const { icon, title, list = null, button, text, url } = data
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0])
    }, [])
    return (
        <Card className={`tarjeta tarjeta-producto m-1 shadow`}>
            <Card.Body className='card-icon'>
                <img src={icon} alt={icon} />
            </Card.Body>
            <Card.Title>
                <h6>{title}</h6>
            </Card.Title>
            <Card.Body className='p-0'>
                {list && <ul>
                    {
                        list?.map((item, index) => {
                            return <li key={index}>{item.item}</li>
                        })
                    }
                </ul>}
                {text &&
                    <p className='font-09'>{text}</p>
                }
            </Card.Body>
            {button && <Card.Body>
                <Link className='btn btn-primary' to={`/es-es${url}`}>{`Comparar`}</Link>
            </Card.Body>}
        </Card>
    );
}

export default TarjetaProducto;
