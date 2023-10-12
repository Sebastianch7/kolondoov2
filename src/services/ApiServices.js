import axios from 'axios';

function ApiServices() {
    const getFilterMovil = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/filterMovil');
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    return {
        getFilterMovil,
    };
}

export default ApiServices;
