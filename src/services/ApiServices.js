import axios from 'axios';

//const apiUrl = 'https://api.vuskoo.com/api';
const apiUrl = 'http://127.0.0.1:8000/api';

export const fetchFilterFibra = async () => {
    try {
        const response = await axios.get(`${apiUrl}/filterFibra`);
        const { min_gb, min_precio, max_precio } = response.data[0];
        return {
            minCapacity: parseInt(min_gb) > 0 ? parseInt(min_gb) : 0,
            maxPrice: parseInt(max_precio),
            minPrice: parseInt(min_precio) > 0 ? parseInt(min_precio) : 0,
            rangePrice: [parseInt(min_precio) > 0 ? parseInt(min_precio) : 0, parseInt(max_precio)],
        };
    } catch (error) {
        console.error("Error al obtener los datos iniciales de filtros:", error);
        throw error;
    }
};

export const fetchFilterMovil = async () => {
    try {
        const response = await axios.get(`${apiUrl}/filterMovil`);
        return response.data[0];
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchFilterMovilFibra = async () => {
    try {
        const response = await axios.get(`${apiUrl}/filterMovilFibra`);
        return response.data[0];
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchFilterMovilFibraTv = async () => {
    try {
        const response = await axios.get(`${apiUrl}/filterMovilFibraTv`);
        return response.data[0];
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchOperadorasFibra = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadorasFibra`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};


export const fetchOperadoras = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadoras`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchOperadorasFibraMovil = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadorasFibraMovil`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchOperadorasFibraMovilTv = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getOperadorasFibraMovilTv`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchTarifasMovil = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasMovil`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchComercializadorasGas = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getComercializadorasGas`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchComercializadoras = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getComercializadorasLuz`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchComercializadorasLuzGas = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getComercializadorasLuzGas`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchTarifasGas = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasGas`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchTarifasFibra = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasFibra`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchTarifasMovilFibra = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasFibraMovil`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchTarifasMovilFibraTv = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasFibraMovilTv`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};


export const fetchTarifasLuz = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasLuz`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const fetchTarifasLuzGas = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getTarifasGasLuz`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const getDetailOffer = async (offerLooking, idPlan) => {
    try {
        
        const response = await axios.get(`${apiUrl}/getDetailOffer${offerLooking.replaceAll('-','')}/${idPlan}`)
        return response.data[0];
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const getBlog = async (categoria) => {
    try {
            const response = await axios.get(`${apiUrl}/getBlog/${categoria}`)
        return response.data;
    } catch (error) {
        console.error("Error al obtener los blog", error);
        throw error;
    }
};

export const getBlogHome = async () => {
    try {
            const response = await axios.get(`${apiUrl}/getBlogHome`)
        return response.data;
    } catch (error) {
        console.error("Error al obtener los blog", error);
        throw error;
    }
};

export const getBlogDestacados = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getBlogDestacados`)
        return response.data;
    } catch (error) {
        console.error("Error al obtener los blog", error);
        throw error;
    }
};

export const getBlogById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/getBlogById/${id}`)
        return response.data[0];
    } catch (error) {
        console.error("Error al obtener los blog", error);
        throw error;
    }
};

export const getExtraOffer = async (offerLooking) => {
    try {
        const response = await axios.get(`${apiUrl}/getExtraOffer${offerLooking}`)
        return response.data;
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const getPriceLightService = async () => {
    try {
        let fecha = new Date();
        let año = fecha.getFullYear();
        let mes = fecha.getMonth() +1; // Los meses en JavaScript son indexados desde 0, por lo que sumamos 1
        let dia = fecha.getDate();

        const actual = `${año}-${mes}-${dia}`;
        const response = await axios.get(`https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${actual}T00:00&end_date=${actual}T23:00&time_trunc=hour`, {});
        const data = response.data.included[0].attributes.values;
        return data;
    } catch (error) {
        console.error("Error al obtener la informacion de las tarifas de luz", error);
        throw error;
    }
};

export const getPriceLightServiceMonth = async () => {
    try {
        const response = await axios.get(`https://www.apaga-luz.com/data/group_prices_by_month.json`, {});
        const data = response.data
        return data;
    } catch (error) {
        console.error("Error al obtener la informacion de las tarifas de luz", error);
        throw error;
    }
};


export const getDataLocation = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getDataLocation`);
        const data = response.data
        return data;
    } catch (error) {
        console.error("Error al obtener la informacion de localizacion", error);
        throw error;
    }
};

export const getIp = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getDataIp`);
        const data = response.data
        return data;
    } catch (error) {
        console.error("Error al obtener la informacion de localizacion", error);
        throw error;
    }
};

export const postLead = async (idOferta, phone, landing) => {
    console.log(idOferta, phone, landing)
    try {
        const response = await axios.post(`${apiUrl}/LeadRegister`, { idOferta, phone, landing });
        return response.data;
    } catch (error) {
        //console.error("Error al enviar la informacion del Lead:", error);
        throw new Error('Error en la solicitud POST:', error);
    }
};

export const postFormContactanos = async (nombre, consulta, email) => {
    try {
        const response = await axios.post(`${apiUrl}/contactanosRegister`, { nombre, consulta, email });
        return response.data;
    } catch (error) {
        //console.error("Error al enviar la informacion del Lead:", error);
        throw new Error('Error en la solicitud POST:', error);
    }
};