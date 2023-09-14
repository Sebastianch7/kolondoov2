import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function InputRange({ min = 0, max = 100, type, text, onValueChange }) {
    const [range, setRange] = useState([min, max]);

    const handleRangeChange = (newRange) => {
        setRange(newRange);
        handleFilterPrice(newRange)
    };

    const handleFilterPrice = (newValue) => {
        onValueChange(newValue);
    };
    
    return (
        <div className='my-4'>
            <b>{text}:</b>
            <div className='my-4'>
                {range[0]} {type} - {range[1]} {type}
            </div>
            <Slider
                range
                min={min}
                max={max}
                value={range}
                onChange={handleRangeChange}
                className='form-input-range'
            />
        </div>
    )
}
