import axios from 'axios';

export const getAllProducts = async () => {
    const responce = await axios.get('https://fakestoreapi.com/products');
    const { data } = responce;
    return data;
};

export const getProduct = async (id: number | string) => {
    const responce = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const { data } = responce;
    return data;
};

export const getAllCategory = async () => {
    const responce = await axios.get('https://fakestoreapi.com/products/categories')
    const { data } = responce
    return data;
}
