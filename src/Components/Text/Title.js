import React from 'react';

function Title({title, titleAlt}) {
    return (
        <h2 className='text-title mt-3 mt-2 mt-md-1' >{title} {titleAlt && <span class="color-secundary font-semibold">{titleAlt}</span>}</h2>
    );
}

export default Title;