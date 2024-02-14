import React from 'react';

function Title({title, titleAlt, titleThird}) {
    return (
        <h1 className='text-title my-4' >{title.charAt(0).toUpperCase() + title.slice(1)} {titleAlt && <span className="color-secundary font-semibold">{titleAlt}</span>} {titleThird && titleThird}</h1>
    );
}

export default Title;