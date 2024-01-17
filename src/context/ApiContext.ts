import axios from 'axios';
import API_URL from "../assets/static/API";
export const getListAirport = () => {
    return axios.get(`${API_URL}/v1/airports`)
        .then(({ data }) => data.data.content)
        .catch((error) => {
            console.log(error);
            return [];
        });
};

export const getListAirplane = () => {
    return axios.get(`${API_URL}/v1/airplanes`)
        .then(({ data }) => data.data.content)
        .catch((error) => {
            console.log(error);
            return [];
        });
};
