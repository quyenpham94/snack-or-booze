import axios from 'axios';

const BASE_API_URL = "http://localhost:5000";

export async function fetchItems(type) {
    let res = await axios.get(`${BASE_API_URL}/${type}`);
    return res.data;
}

export async function addItem(type, data) {
    await axios.post(`${BASE_API_URL}/${type}`, data);
}