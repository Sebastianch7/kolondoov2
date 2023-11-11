import React from 'react';

function Title({title, titleAlt}) {
    return (
        <h2 className='text-title my-4' >{title} {titleAlt && <span class="color-secundary font-semibold">{titleAlt}</span>}</h2>
    );
}

export default Title;