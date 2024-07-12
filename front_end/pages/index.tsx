import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Produto } from '../src/entities/Produto';
import { CategoryEnum } from '../src/util/enums/CategoryEnum';
import ProductService from '../src/services/ProductService';

const productService = new ProductService();

const SearchIcon = () => (
    <svg
        className="h-5 w-5 text-gray-500 ml-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M8 14a6 6 0 100-12 6 6 0 000 12zM18 15.586l-4.243-4.243a7 7 0 10-1.414 1.414L16.586 17H18v-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

const HomePage: NextPage = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [totalProdutos, setTotalProdutos] = useState<number>(0); 
    const [selectedCategory, setSelectedCategory] = useState<CategoryEnum | null>(null); 

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtos = await productService.getAllProducts();
                setProdutos(produtos);
                setTotalProdutos(produtos.length); 
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    const handleFilterByCategory = async (category: CategoryEnum | 'todos') => {
        try {
            const produtos = await productService.getProductsByCategory(category);
            setProdutos(produtos);
            setTotalProdutos(produtos.length);
            setLoading(false);
            setSelectedCategory(category === 'todos' ? null : category); 
        } catch (err) {
            setError(category === 'todos' ? 'Failed to fetch all products' : `Failed to fetch products by category ${category}`);
            setLoading(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm.trim() === '') {
            return;
        }
        try {
            const produtos = await productService.searchProductsByName(searchTerm);
            setProdutos(produtos);
            setTotalProdutos(produtos.length); 
            setLoading(false);
            setSelectedCategory(null); 
        } catch (err) {
            setError('Failed to search products');
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            <form onSubmit={handleSearchSubmit} className="mb-4 flex items-center">
                <div className="relative flex items-center w-full md:w-1/3">
                    <span className="absolute left-0 pl-1">
                        <SearchIcon />
                    </span>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Buscar produto"
                        className="border p-2 pl-10 rounded-l w-full"
                    />
                </div>
            </form>
            
            <h1 className="text-2xl font-bold mb-1">Tênis</h1>
            <p className="text mb-4">{totalProdutos} {totalProdutos === 1 ? 'produto encontrado' : 'produtos encontrados'}</p>

            <div className="mb-4 space-x-4">
                <button
                    onClick={() => handleFilterByCategory('todos')}
                    className={`p-2 rounded-full ${selectedCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Todos
                </button>
                {Object.values(CategoryEnum).map((categoria, index) => (
                    <button
                        key={index}
                        onClick={() => handleFilterByCategory(categoria)}
                        className={`p-2 rounded-full ${selectedCategory === categoria ? 'bg-blue-500 text-white font-bold mb-4' : 'bg-gray-200'}`}
                    >
                        {categoria}
                    </button>
                ))}
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {produtos.map(produto => (
                    <li key={produto.id} className="bg-white p-4 rounded shadow flex flex-col">
                        <img src={produto.imagem} alt={produto.nome} className="w-full h-auto object-cover rounded mb-4" style={{ maxHeight: '300px' }} />
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className="text-black font-bold">{produto.categoria}</p>
                                <h2 className="text-gray-500">{produto.nome}</h2>
                                <p className="text-gray-500">{produto.descricao}</p>
                            </div>
                            <p className="text-green-500 text-lg font-semibold">${produto.preco.toFixed(2)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
