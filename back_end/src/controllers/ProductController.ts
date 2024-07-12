import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

const productService = new ProductService();

export const getAllProducts = (req: Request, res: Response) => {
    const products = productService.getAllProducts().map(product => ({
        id: product.id,
        nome: product.nome,
        categoria: product.categoria.nome,
        descricao: product.descricao.nome,
        preco: product.preco,
        imagem: product.imagem,
    }));
    res.json(products);
};

export const getProductsByCategory = (req: Request, res: Response) => {
    const category = req.params.category;
    const products = productService.getProductsByCategory(category).map(product => ({
        id: product.id,
        nome: product.nome,
        categoria: product.categoria.nome,
        descricao: product.descricao.nome,
        preco: product.preco,
        imagem: product.imagem,
    }));
    res.json(products);
};

export const searchProductsByName = (req: Request, res: Response) => {
    const productName = req.query.name as string;
    const products = productService.searchProductsByName(productName).map(product => ({
        id: product.id,
        nome: product.nome,
        categoria: product.categoria.nome,
        descricao: product.descricao.nome,
        preco: product.preco,
        imagem: product.imagem,
    }));
    res.json(products);
};
