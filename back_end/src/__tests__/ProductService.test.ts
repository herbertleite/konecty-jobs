import { ProductService } from '../services//ProductService';
import { products } from '../util/Constants';

describe('ProductService', () => {
    let service: ProductService;

    beforeEach(() => {
        service = new ProductService();
    });

    it('should return all products', () => {
        const allProducts = service.getAllProducts();
        expect(allProducts).toEqual(products);
    });

    it('should filter products by category', () => {
        const category = 'Nike';
        const filteredProducts = service.getProductsByCategory(category);
        const expectedProducts = products.filter(product => product.categoria.nome === category);
        expect(filteredProducts).toEqual(expectedProducts);
    });

    it('should search products by name', () => {
        const searchTerm = 'running shoes';
        const searchedProducts = service.searchProductsByName(searchTerm);
        const expectedProducts = products.filter(product =>
            product.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        expect(searchedProducts).toEqual(expectedProducts);
    });
});
