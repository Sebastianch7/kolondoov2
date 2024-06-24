import React from 'react';

function Title({ title, titleAlt, titleThird,titleBottom }) {
    return (
        <>
            <h1 className='text-title my-4' >{title} {titleAlt && <span className="color-secundary font-semibold">{titleAlt}</span>} {titleThird && titleThird}</h1>
            <p>{titleBottom && titleBottom}</p>
        </>
    );
}
export default Title;