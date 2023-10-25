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
        const response = await axios.get(`http://127.0.0.1:8000/api/getDetailOffer${offerLooking}/${idPlan}`)
        return response.data[0];
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};

export const postLead = async (offerLooking, idPlan) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getDetailOffer${offerLooking}/${idPlan}`)
        return response.data[0];
    } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
        throw error;
    }
};
