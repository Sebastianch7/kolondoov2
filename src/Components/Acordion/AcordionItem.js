import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function AccordionItem({ data }) {
    const { icon, title, list, text } = data;
    return (
        <Accordion.Item eventKey={title}>
            <Accordion.Header><img src={icon} className='accordion-icon-title' alt={icon} /> {title}</Accordion.Header>
            <Accordion.Body>
                {list && (
                    <ul>
                        {list?.map((item, index) => (
                            <li key={index}>{item.item}</li>
                        ))}
                    </ul>
                )}
                {text && <p>{text}</p>}
            </Accordion.Body>
        </Accordion.Item>
    );
}
