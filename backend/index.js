import express from 'express';
import cors from 'cors';
import {fileURLToPath} from 'url';
import products from './api/products.route.js';

const dirname = fileURLToPath(new URL('.', import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", products);

app.use('*', (req, res) => {
    res.status(404).sendFile(dirname+'not_found.html');
});

export default app;