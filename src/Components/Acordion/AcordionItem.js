import React from 'react'
import { Accordion } from 'react-bootstrap'
export default function AcordionItem({ data }) {
    const { icon, title, text } = data
    return (
        <Accordion.Item eventKey={title}>
            <Accordion.Header><img src={icon} className='acordion-icon-title' alt={icon} /> {title}</Accordion.Header>
            <Accordion.Body>
                {
                    <ul>
                        {
                            text.map((item, index) => {
                                return <li key={index}>{item.item}</li>
                            })
                        }
                    </ul>
                }
            </Accordion.Body>
        </Accordion.Item>
    )
}
