import { Produto } from '../entities/Produto';
import { CategoriaEnum } from './enum/CategoriaEnum';

export const PORT = 3001;
const REPO_IMAGES = 'https://raw.githubusercontent.com/herbertleite/imgs/main/'

export const products: Produto[] = [{
    id: 1,
    nome: 'Air Force 1 Jester XX',
    categoria: {
        nome: CategoriaEnum.Nike
    },
    descricao: {
        nome: 'Black Sonic Yellow with bold design accents'
    },
    preco: 96.00,
    imagem: REPO_IMAGES + 'tenis1.png'
},
{
    id: 2,
    nome: 'Run Star Hike',
    categoria: {
        nome: CategoriaEnum.Converse
    },
    descricao: {
        nome: 'Pink high-top sneakers with a chunky sole'
    },
    preco: 85.50,
    imagem: REPO_IMAGES + 'tenis2.png'
},
{
    id: 3,
    nome: 'Air Jordan 1 Retro',
    categoria: {
        nome: CategoriaEnum.Nike
    },
    descricao: {
        nome: 'Classic high-top sneakers in blue and white'
    },
    preco: 196.00,
    imagem: REPO_IMAGES + 'tenis3.png'
},
{
    id: 4,
    nome: 'Air Force 1 Shadow',
    categoria: {
        nome: CategoriaEnum.Nike
    },
    descricao: {
        nome: 'White sneakers with a colorful swoosh'
    },
    preco: 115.00,
    imagem: REPO_IMAGES + 'tenis4.png'
},
{
    id: 5,
    nome: '574 Core',
    categoria: {
        nome: CategoriaEnum.NewBalance
    },
    descricao: {
        nome: 'Multicolor running shoes with a retro look'
    },
    preco: 96.00,
    imagem: REPO_IMAGES + 'tenis5.png'
},
{
    id: 6,
    nome: 'Gel-Kayano 14',
    categoria: {
        nome: CategoriaEnum.Asics
    },
    descricao: {
        nome: 'White running shoes with advanced support'
    },
    preco: 96.00,
    imagem: REPO_IMAGES + 'tenis6.png'
},
{
    id: 7,
    nome: 'Adilette Sandals',
    categoria: {
        nome: CategoriaEnum.Adidas
    },
    descricao: {
        nome: 'Blue athletic sandals for comfort'
    },
    preco: 96.00,
    imagem: REPO_IMAGES + 'tenis7.png'
},
{
    id: 8,
    nome: 'Air Max 270',
    categoria: {
        nome: CategoriaEnum.Nike
    },
    descricao: {
        nome: 'Black athletic shoes with air cushion sole'
    },
    preco: 85.50,
    imagem: REPO_IMAGES + 'tenis8.png'
},
{
    id: 9,
    nome: 'Joyride Run Flyknit',
    categoria: {
        nome: CategoriaEnum.Nike
    },
    descricao: {
        nome: 'Purple running shoes with innovative cushioning'
    },
    preco: 85.50,
    imagem: REPO_IMAGES + 'tenis9.png'
},
{
    id: 10,
    nome: 'Air Force 999',
    categoria: {
        nome: CategoriaEnum.Nike
    },
    descricao: {
        nome: 'Classic white sneakers with timeless design'
    },
    preco: 85.50,
    imagem: REPO_IMAGES + 'tenis10.png'
}
];
