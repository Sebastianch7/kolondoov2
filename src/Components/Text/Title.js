import React from 'react';

function Title({ title, titleAlt, titleThird,titleBottom }) {
    return (
        <>
            <h1 className='text-title my-4' >{title} {titleAlt && <span className="color-secundaryText font-bold">{titleAlt}</span>} {titleThird && titleThird}</h1>
            {titleBottom && <p>{titleBottom}</p>}
        </>
    );
}
export default Title;