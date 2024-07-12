# Documentação da API de Produtos

## Requisitos
- Instalação do Node 20.15.1 ([Link para download](https://nodejs.org/pt/download/prebuilt-installer))
- Baixar as dependências: entre na pasta do projeto (`cd back_end`) e use o comando `npm install`

## Visão Geral
Esta API fornece acesso a um catálogo de produtos, permitindo listar todos os produtos, filtrar por categoria e pesquisar por nome de produto. A API está disponível no endereço base `http://localhost:3001`.

## Testes

### Descrição dos Testes

1. **Listar Todos os Produtos**
   - **Descrição:** Testa o método `getAllProducts` para garantir que todos os produtos sejam retornados corretamente.
   - **Verificação:** Verifica se o retorno é igual ao array `products` definido em `../util/Constants`.

2. **Filtrar Produtos por Categoria**
   - **Descrição:** Testa o método `getProductsByCategory` para garantir que os produtos sejam filtrados corretamente por categoria.
   - **Verificação:** Verifica se o retorno do método é igual ao resultado esperado.

3. **Pesquisar Produtos por Nome**
   - **Descrição:** Testa o método `searchProductsByName` para garantir que os produtos sejam retornados corretamente quando pesquisados pelo nome.
   - **Verificação:** Verifica se o retorno do método é igual ao resultado esperado.

- **No diretório raiz `back_end` use o seguinte comando para executar os testes: `npm test`**
- **No diretório raiz `back_end` use o seguinte comando para inciar o servidor da api: `npm start`**
![Testes Backend](https://raw.githubusercontent.com/herbertleite/imgs/main/saida_testes_backend.png)


## Endpoints

### 1. Listar Todos os Produtos
- **Endpoint:** `/products`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os produtos disponíveis.
- **Resposta de Sucesso:**
```json
[
    {
        "id": 1,
        "nome": "Air Force 1 Jester XX",
        "categoria": {
            "nome": "Nike"
        },
        "descricao": {
            "nome": "Black Sonic Yellow with bold design accents"
        },
        "preco": 96.00,
        "imagem": "https://raw.githubusercontent.com/herbertleite/imgs/main/tenis1.png"
    },
    {
        "id": 2,
        "nome": "Run Star Hike",
        "categoria": {
            "nome": "Converse"
        },
        "descricao": {
            "nome": "Pink high-top sneakers with a chunky sole"
        },
        "preco": 85.50,
        "imagem": "https://raw.githubusercontent.com/herbertleite/imgs/main/tenis2.png"
    }
    // Outros produtos...
]
```
### 2. Filtrar Produtos por Categoria

- **Endpoint:** `/products/category/:category`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de produtos filtrados por uma categoria específica.
- **Parâmetros de Caminho:** `category` (Nome da categoria, por exemplo, Nike, Converse, etc.)
- **Resposta de Sucesso:**

```json
[
    {
        "id": 1,
        "nome": "Air Force 1 Jester XX",
        "categoria": {
            "nome": "Nike"
        },
        "descricao": {
            "nome": "Black Sonic Yellow with bold design accents"
        },
        "preco": 96.00,
        "imagem": "https://raw.githubusercontent.com/herbertleite/imgs/main/tenis1.png"
    },
    {
        "id": 3,
        "nome": "Air Jordan 1 Retro",
        "categoria": {
            "nome": "Nike"
        },
        "descricao": {
            "nome": "Classic high-top sneakers in blue and white"
        },
        "preco": 196.00,
        "imagem": "https://raw.githubusercontent.com/herbertleite/imgs/main/tenis3.png"
    }
    // Outros produtos da categoria Nike...
]
```
### 3. Pesquisar Produtos por Nome
- **Endpoint:** `/products/search/:name`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de produtos cujo nome contém a string especificada.
- **Parâmetros de Caminho:** `name` (String a ser pesquisada no nome dos produtos)
- **Resposta de Sucesso:**

```json
[
    {
        "id": 4,
        "nome": "Air Force 1 Shadow",
        "categoria": {
            "nome": "Nike"
        },
        "descricao": {
            "nome": "White sneakers with a colorful swoosh"
        },
        "preco": 115.00,
        "imagem": "https://raw.githubusercontent.com/herbertleite/imgs/main/tenis4.png"
    }
    // Outros produtos que correspondem ao critério de pesquisa...
]
```


# Documentação do Front-end

## Requisitos
- Instalação do Node 20.15.1 ([Link para download](https://nodejs.org/pt/download/prebuilt-installer))
- Baixar as dependências: entre na pasta do projeto (`cd front_end`) e use o comando `npm install`

## Visão Geral
Este documento descreve o frontend desenvolvido com Next.js que consome uma API de produtos para exibir e filtrar uma lista de tênis. O frontend utiliza React com hooks para gerenciar o estado e Next.js para renderização do lado do servidor.

### Estrutura do Frontend
O frontend é composto por uma única página (HomePage) que lista os produtos e permite filtrar por categoria ou pesquisar por nome.

## Testes

### Descrição dos Testes

1. **Teste: should fetch all products successfully**
   - **Objetivo:** Verificar se o método `getAllProducts` do `ProductService` retorna todos os produtos corretamente.
   - **Implementação:**
     - Mock Axios: Utiliza `jest.mock('axios')` para substituir as chamadas reais do Axios por mocks controlados.
     - Mock de Resposta: Configura `axios.get` para retornar uma promessa resolvida com dados de produtos mockados quando chamado.
     - Verificação: Chama `getAllProducts` e compara o resultado com `mockProducts` esperado.

2. **Teste: should fetch products by category successfully**
   - **Objetivo:** Testar se o método `getProductsByCategory` retorna produtos filtrados por categoria corretamente.
   - **Implementação:**
     - Mock Axios: Configura `axios.get` para retornar uma promessa resolvida com produtos mockados filtrados por categoria.
     - Verificação: Chama `getProductsByCategory` com uma categoria específica e compara o resultado com `mockProducts` esperado.

3. **Teste: should search products by name successfully**
   - **Objetivo:** Garantir que o método `searchProductsByName` retorne produtos corretamente ao pesquisar por nome.
   - **Implementação:**
     - Mock Axios: Define `axios.get` para retornar uma promessa resolvida com produtos mockados que correspondem ao termo de pesquisa.
     - Verificação: Invoca `searchProductsByName` com um termo de pesquisa e verifica se o resultado é igual aos `mockProducts` esperados.

4. **Teste: should handle errors gracefully**
   - **Objetivo:** Testar o comportamento do `ProductService` ao lidar com erros durante a busca de produtos.
   - **Implementação:**
     - Mock Axios: Configura `axios.get` para retornar uma promessa rejeitada com um erro simulado.
     - Verificação: Utiliza um bloco try/catch para capturar o erro lançado por `getAllProducts` e assegura que a mensagem de erro corresponda ao esperado.

- **No diretório raiz `front_end` use o seguinte comando para executar os testes: `npx jest`**
- **No diretório raiz `front_end` use o seguinte comando para inciar o servidor: `npm run dev`**
![Testes Backend](https://raw.githubusercontent.com/herbertleite/imgs/main/saida_testes_frontend.png)

### Screenshots
![Testes Backend](https://raw.githubusercontent.com/herbertleite/imgs/main/visual_resultado_1.png)
![Testes Backend](https://raw.githubusercontent.com/herbertleite/imgs/main/visual_resultado_2.png)
###

