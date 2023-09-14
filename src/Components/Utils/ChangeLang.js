import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ChangeLang() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (


        <div>
            <button className='btn' onClick={() => changeLanguage('en')}>En</button>
            <button className='btn' onClick={() => changeLanguage('es')}>Es</button>
        </div>
    );
}



