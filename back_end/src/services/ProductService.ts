import { Produto } from '../entities/Produto';
import { products } from '../util/Constants';

export class ProductService {
    getAllProducts(): Produto[] {
        return products;
    }

    getProductsByCategory(category: string): Produto[] {
        return products.filter(product => product.categoria.nome === category);
    }

    searchProductsByName(name: string): Produto[] {
        return products.filter(product => product.nome.toLowerCase().includes(name.toLowerCase()));
    }
}
