import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_SERVICES_URL;

export const fetchFilterFibra = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/filterFibra/${lang}`);
        const { min_gb, min_precio, max_precio, moneda } = response.data[0];
        return {
            minCapacity: parseInt(min_gb) > 0 ? parseInt(min_gb) : 0,
            maxPrice: parseInt(max_precio),
            minPrice: parseInt(min_precio) > 0 ? parseInt(min_precio) : 0,
            rangePrice: [parseInt(min_precio) > 0 ? parseInt(min_precio) : 0, parseInt(max_precio)],
            moneda
        };
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchFilterMovil = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/filterMovil/${lang}`);
        return response.data[0];
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchFilterMovilFibra = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/filterMovilFibra/${lang}`);
        return response.data[0];
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchFilterMovilFibraTv = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/filterMovilFibraTv/${lang}`);
        return response.data[0];
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchOperadorasFibra = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadorasFibra/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};


export const fetchOperadoras = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadoras/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchOperadorasFibraMovil = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadorasFibraMovil/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchOperadorasFibraMovilTv = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadorasFibraMovilTv/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasMovil = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasMovil/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchComercializadorasGas = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getComercializadorasGas/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchComercializadoras = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getComercializadorasLuz/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchComercializadorasLuzGas = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getComercializadorasLuzGas/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasGas = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasGas/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasFibra = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasFibra/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasMovilFibra = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasFibraMovil/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasMovilFibraTv = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasFibraMovilTv/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};


export const fetchTarifasLuz = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasLuz/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasLuzGas = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasGasLuz/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchStreamingOffers = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasStreaming/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getDetailOffer = async (offerLooking, idPlan) => {
    try {
        const response = await axios.get(`${apiUrl}/getDetailOffer${offerLooking.replaceAll('-', '')}/${idPlan}`)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getBlog = async (categoria) => {
    try {
        let url = categoria ? `/${categoria}` : ``;
        const response = await axios.get(`${apiUrl}/getBlog${url}`)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getBlogHome = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getBlogHome/${lang}`)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};


export const getMenu = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getMenu/${lang}`)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

/* export const getBlogDestacados = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getBlogDestacados/${lang}`)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
}; */

export const getBlogById = async (categoria, id) => {
    try {
        const response = await axios.get(`${apiUrl}/getBlog/${categoria}/${id}`)
        return response.data[0];
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getBlogPreviewId = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/getBlogPreview/${id}`)
        return response.data[0];
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getGestion = async (gestion) => {
    try {
        const response = await axios.get(`${apiUrl}/getGestion/${gestion}`)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getGestionById = async (gestion, id) => {
    try {
        const response = await axios.get(`${apiUrl}/getGestion/${gestion}/${id}`)
        return response.data[0];
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};


export const getExtraOffer = async (offerLooking) => {
    try {
        const response = await axios.get(`${apiUrl}/getExtraOffer${offerLooking.replaceAll('-', '')}`)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getPriceLightService = async () => {
    try {
        let fecha = new Date();
        let año = fecha.getFullYear();
        let mes = fecha.getMonth() + 1;
        let dia = fecha.getDate();

        const actual = `${año}-${mes}-${dia}`;
        const response = await axios.get(`https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${actual}T00:00&end_date=${actual}T23:00&time_trunc=hour`, {});
        const data = response.data.included[0].attributes.values;
        return data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getPriceLightServiceMonth = async () => {
    try {
        const response = await axios.get(`https://www.apaga-luz.com/data/group_prices_by_month.json`, {});
        const data = response.data
        return data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};


export const getDataLocation = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getDataLocation`);
        const data = response.data
        return data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getMenuBlog = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getMenuBlog/${lang}`);
        const data = response.data
        return data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const getIp = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getDataIp`);
        const data = response.data
        return data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const postLead = async (idOferta, phone, landing, urlOffer, company) => {
    try {
        const response = await axios.post(`${apiUrl}/LeadRegister`, { idOferta, phone, landing, urlOffer, company });
        return response;
    } catch (error) {
        //console.error("Error al procesar la solicitud", error);
        throw new Error('Error en la solicitud POST:', error);
    }
};

export const postLeadVehiculo = async (lang) => {
    try {
        //const response = await axios.post(`${apiUrl}/LeadRegisterVehiculo`, { idOferta, phone, landing, urlOffer, company });
        //return response;
        return 201;
    } catch (error) {
        //console.error("Error al procesar la solicitud", error);
        throw new Error('Error en la solicitud POST:', error);
    }
};

export const postFormContactanos = async (nombre, consulta, email) => {
    try {
        const response = await axios.post(`${apiUrl}/contactanosRegister`, { nombre, consulta, email });
        return response.data;
    } catch (error) {
        //console.error("Error al procesar la solicitud", error);
        throw new Error('Error en la solicitud POST:', error);
    }
};

export const postFormNews = async (email) => {
    try {
        const response = await axios.post(`${apiUrl}/NewsletterRegister`, { email });
        return response.data;
    } catch (error) {
        //console.error("Error al procesar la solicitud", error);
        throw new Error('Error en la solicitud POST:', error);
    }
};

/* MX */
export const fetchFilterPlanCelular = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/filterPlanCelular/${lang}`);
        const { min_gb, min_precio, max_precio, moneda } = response.data[0];
        return {
            minCapacity: parseInt(min_gb) > 0 ? parseInt(min_gb) : 0,
            maxPrice: parseInt(max_precio),
            minPrice: parseInt(min_precio) > 0 ? parseInt(min_precio) : 0,
            rangePrice: [parseInt(min_precio) > 0 ? parseInt(min_precio) : 0, parseInt(max_precio)],
            moneda
        };
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchOperadorasPlanCelular = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadorasPlanCelular/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasPlanCelular = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasPlanCelular/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchFilterVehiculos = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/filterVehiculos/${lang}`);
        const { min_precio, max_precio } = response.data[0];
        return {
            maxPrice: parseInt(max_precio),
            minPrice: parseInt(min_precio) > 0 ? parseInt(min_precio) : 0,
        };
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchFilterVehiculosChassis = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getValuesFilterVehiculosChassis/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchMarcasVehiculos = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getMarcasVehiculos/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasVehiculos = async (lang) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasVehiculos/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

/* CUPONES */
export const fetchComerciosCupones = async (lang, idCategoria) => {
    try {
        const response = await axios.get(`${apiUrl}/getComerciosCupones/${lang}/${idCategoria}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTipoCupones = async (lang, idCateogria = null) => {
    try {
        const response = await axios.get(`${apiUrl}/getTipoCupones/${lang}/${idCateogria}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifasCupones = async (lang, idCateogria = null) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasCupones/${lang}/${idCateogria}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchTarifaCupon = async (id) => {
    try {

        const response = await axios.get(`${apiUrl}/getTarifaCupon/${id}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};

export const fetchPrestamosOffers = async (lang) => {

    try {
        const response = await axios.get(`${apiUrl}/getTarifasPrestamos/${lang}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }

};

export const fetchTarifaPrestamo = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifaPrestamo/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al procesar la solicitud", error);
        throw error;
    }
};