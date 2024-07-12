import { Categoria } from './Categoria';
import { Descricao } from './Descricao';

export interface Produto {
    id: number;
    nome: string;
    categoria: Categoria;
    descricao: Descricao;
    preco: number;
    imagem: string;
}
