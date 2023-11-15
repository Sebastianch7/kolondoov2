import React from 'react';

function Title({title, titleAlt, titleThird}) {
    return (
        <h2 className='text-title my-4' >{title} {titleAlt && <span className="color-secundary font-semibold">{titleAlt}</span>} {titleThird && titleThird}</h2>
    );
}

export default Title;