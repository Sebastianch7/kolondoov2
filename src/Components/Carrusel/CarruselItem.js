import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import TarjetaBlogFull from '../Tarjeta/TarjetaBlogFull';

export default function CarruselItem({ data }) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+1"
                alt="First slide"
            />
            <Carousel.Caption>
                <TarjetaBlogFull data={data} />
            </Carousel.Caption>
        </Carousel.Item>
    )
}
