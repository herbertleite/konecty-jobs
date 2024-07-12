import { CategoryEnum } from '../util/enums/CategoryEnum';

export interface Produto {
    id: number;
    nome: string;
    categoria: CategoryEnum;
    descricao: string;
    preco: number;
    imagem: string;
}
