import axios from 'axios';
import ProductService from '../services/ProductService';
import { CategoryEnum } from '../util/enums/CategoryEnum';

jest.mock('axios');

describe('ProductService', () => {
    let productService: ProductService;

    beforeEach(() => {
        productService = new ProductService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch all products successfully', async () => {
        const mockProducts = [
            { id: 1, nome: 'Produto 1', categoria: CategoryEnum.Nike, descricao: 'Descrição do Produto 1', preco: 100, imagem: 'imagem1.jpg' },
            { id: 2, nome: 'Produto 2', categoria: CategoryEnum.Adidas, descricao: 'Descrição do Produto 2', preco: 120, imagem: 'imagem2.jpg' },
        ];

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockProducts });

        const result = await productService.getAllProducts();
        expect(result).toEqual(mockProducts);
    });

    it('should fetch products by category successfully', async () => {
        const mockProducts = [
            { id: 1, nome: 'Produto 1', categoria: CategoryEnum.Nike, descricao: 'Descrição do Produto 1', preco: 100, imagem: 'imagem1.jpg' },
        ];

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockProducts });

        const result = await productService.getProductsByCategory(CategoryEnum.Nike);
        expect(result).toEqual(mockProducts);
    });

    it('should search products by name successfully', async () => {
        const mockProducts = [
            { id: 1, nome: 'Produto 1', categoria: CategoryEnum.Nike, descricao: 'Descrição do Produto 1', preco: 100, imagem: 'imagem1.jpg' },
            { id: 2, nome: 'Produto 2', categoria: CategoryEnum.Adidas, descricao: 'Descrição do Produto 2', preco: 120, imagem: 'imagem2.jpg' },
        ];

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockProducts });

        const result = await productService.searchProductsByName('Produto');
        expect(result).toEqual(mockProducts);
    });

    it('should handle errors gracefully', async () => {
        const errorMessage = 'Failed to fetch products';

        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error(errorMessage));

        try {
            await productService.getAllProducts();
        } catch (err: any) {
            expect(err.message).toEqual(errorMessage);
        }
    });
});
