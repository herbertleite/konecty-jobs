import axios from 'axios';
import { API_URL, PRODUCTS_ENDPOINT, CATEGORY_ENDPOINT, SEARCH_ENDPOINT } from '../util/Constants';
import { Produto } from '../entities/Produto';
import { CategoryEnum } from '../util/enums/CategoryEnum';

class ProductService {
    async getAllProducts(): Promise<Produto[]> {
        const response = await axios.get<Produto[]>(`${API_URL}${PRODUCTS_ENDPOINT}`);
        return response.data;
    }

    async getProductsByCategory(category: CategoryEnum | 'todos'): Promise<Produto[]> {
        let endpoint = PRODUCTS_ENDPOINT;
        if (category !== 'todos') {
            endpoint = `${CATEGORY_ENDPOINT}${category}`;
        }
        const response = await axios.get<Produto[]>(`${API_URL}${endpoint}`);
        return response.data;
    }

    async searchProductsByName(name: string): Promise<Produto[]> {
        const response = await axios.get<Produto[]>(`${API_URL}${SEARCH_ENDPOINT}?name=${name}`);
        return response.data;
    }
}

export default ProductService;
