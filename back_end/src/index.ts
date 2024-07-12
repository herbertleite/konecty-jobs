import express from 'express';
import cors from 'cors';
import * as ProductController from './controllers/ProductController';
import { PORT } from './util/Constants';

const app = express();

app.use(cors());

app.get('/products', ProductController.getAllProducts);
app.get('/products/category/:category', ProductController.getProductsByCategory);
app.get('/products/search', ProductController.searchProductsByName);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});