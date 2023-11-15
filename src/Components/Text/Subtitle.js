import React from 'react';

function Subtitle({subtitle}) {
    return (
        <p className='my-3 subtitle' dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    );
}

export default Subtitle;