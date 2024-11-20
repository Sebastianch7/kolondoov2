import axios from "axios";

const apiUrl = process.env.REACT_APP_API_SERVICES_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "X-API-Key": `${apiKey}`,
    "Content-Type": "application/json",
  },
});

export const fetchOperadorasAll = async (lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getOperadorasAll/${lang}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchTarifasMovil = async (lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getTarifasMovil/${lang}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchDataAll = async (endpoint, lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/get${endpoint}/${lang}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error al procesar la solicitud en el endpoint ${endpoint}`,
      error
    );
    throw error;
  }
};

export const getDetailOffer = async (offerLooking, idPlan) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getDetailOffer${offerLooking.replaceAll("-", "")}/${idPlan}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getBlog = async (lang, categoria) => {
  try {
    let url = categoria ? `/${categoria}` : ``;
    const response = await axiosInstance.get(`${apiUrl}/getBlog/${lang}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getBlogDestacados = async (lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getBlogDestacados/${lang}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getEmailConfirmacion = async (token) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/emailConfirmacion/${token}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getBlogById = async (lang, categoria, id) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getBlog/${lang}/${categoria}/${id}`
    );
    return response.data[0];
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getBlogPreviewId = async (id) => {
  try {
    const response = await axiosInstance.get(`${apiUrl}/getBlogPreview/${id}`);
    return response.data[0];
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getExtraOffer = async (offerLooking) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getExtraOffer${offerLooking.replaceAll("-", "")}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getPriceLightService = async () => {
  try {
    const response = await axiosInstance.get(`${apiUrl}/pricesByNow`);
    const data = response.data.included[0].attributes.values;
    return data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const getPriceLightServiceMonth = async () => {
  try {
    const response = await axiosInstance.get(`${apiUrl}/groupPricesByMonth`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const postLead = async (idOferta, phone, landing, urlOffer, company) => {
  try {
    const response = await axiosInstance.post(`${apiUrl}/LeadRegister`, {
      idOferta,
      phone,
      landing,
      urlOffer,
      company,
    });
    return response;
  } catch (error) {
    //console.error("Error al procesar la solicitud", error);
    throw new Error("Error en la solicitud POST:", error);
  }
};

export const postLeadVehiculo = (lang) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(201);
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      reject(500);
    }
  });
};

export const postFormContactanos = async (nombre, consulta, email) => {
  try {
    const response = await axiosInstance.post(`${apiUrl}/contactanosRegister`, {
      nombre,
      consulta,
      email,
    });
    return response.data;
  } catch (error) {
    //console.error("Error al procesar la solicitud", error);
    throw new Error("Error en la solicitud POST:", error);
  }
};

export const postFormNews = async (email) => {
  try {
    const response = await axiosInstance.post(`${apiUrl}/NewsletterRegister`, {
      email,
    });
    return response.data;
  } catch (error) {
    //console.error("Error al procesar la solicitud", error);
    throw new Error("Error en la solicitud POST:", error);
  }
};

/* MX */
export const fetchFilterPlanCelular = async (lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/filterPlanCelular/${lang}`
    );
    const { min_gb, min_precio, max_precio, moneda } = response.data[0];
    return {
      minCapacity: parseInt(min_gb) > 0 ? parseInt(min_gb) : 0,
      maxPrice: parseInt(max_precio),
      minPrice: parseInt(min_precio) > 0 ? parseInt(min_precio) : 0,
      rangePrice: [
        parseInt(min_precio) > 0 ? parseInt(min_precio) : 0,
        parseInt(max_precio),
      ],
      moneda,
    };
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchOperadorasPlanCelular = async (lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getOperadorasPlanCelular/${lang}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchTarifasPlanCelular = async (lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getTarifasPlanCelular/${lang}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchTarifasSegurosSalud = async (lang, categoria) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getTarifasSegurosSalud/${lang}/${categoria}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchFilterVehiculos = async (lang) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/filterVehiculos/${lang}`
    );
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

/* CUPONES */
export const fetchComerciosCupones = async (lang, idCategoria) => {
  let categoria = idCategoria ? `/${idCategoria}` : "";
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getComerciosCupones/${lang}${categoria}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    // Opcional: retornar un valor por defecto en caso de error
    return [];
  }
};

export const fetchTipoCupones = async (lang, idCateogria = null) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getTipoCupones/${lang}/${idCateogria}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchTarifasCupones = async (lang, idCateogria = null) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getTarifasCupones/${lang}/${idCateogria}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchTarifaCupon = async (id) => {
  try {
    const response = await axiosInstance.get(`${apiUrl}/getTarifaCupon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchPrestamosOffers = async (lang, filtroCategoria) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getTarifasPrestamos/${lang}/${filtroCategoria}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};

export const fetchBancosPrestamos = async (lang, filtroCategoria) => {
  try {
    const response = await axiosInstance.get(
      `${apiUrl}/getBancasPrestamos/${lang}/${filtroCategoria}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al procesar la solicitud", error);
    throw error;
  }
};
