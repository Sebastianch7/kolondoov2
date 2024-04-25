import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Load from '../../Components/Utils/Load';
import Title from '../../Components/Text/Title';
import { isMobile } from 'react-device-detect';
import Footer from '../../Components/Footer/Footer';
import { getDetailOffer } from '../../services/ApiServices'
import HeaderLeadVehiculo from '../../Components/Header/HeaderLeadVehiculo';

export default function LeadVehiculo() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const [title, setTitle] = useState(null);
  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const [offerLooking, setOfferLooking] = useState(null)

  let descriptionSeo, titleSeo;

  useEffect(() => {
    let locations = location.pathname.split('/');
    let idSplit = locations[4].split('-');
    setIdPlan(idSplit[idSplit.length - 1]);
    locations.pop();
    setOfferLooking(locations[3])
    setBreadUrl(locations.join('/'));
  }, [location.pathname]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        if (idPlan !== null) {
          const response = await getDetailOffer(offerLooking, idPlan)
          console.log(response)
          setInfoOffer(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al cargar la informacion:", error);
      }
    };
    fetchTariffs();
  }, [idPlan]);

  
  return (
    'dd'
  );

}
