import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { getDataLocation } from '../../services/ApiServices';
import { useLocation } from 'react-router-dom';

export default function ChangeLang() {
  const [dataLocation, setDataLocalitation] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const [lang, setLang] = useState(null)
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1])
    changeLanguage(location.pathname.split('/')[1])
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getDataLocation()
        setDataLocalitation(response.location);
        //changeLanguage(response.location.languages[0].code)
      } catch (error) {
        console.error("Error al obtener informacion de localizacion:", error);
      }
    };

    fetchData();
  }, []);

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className='mt-2'>
      <button className='btn' onClick={() => changeLanguage('en')}>En</button>
      <button className='btn' onClick={() => changeLanguage('es')}>Es</button>
      {dataLocation?.country_flag_emoji}
    </div>
  );
}



