import productsDAO from './productsDAO.js';

export default class ProductsController
{
    static async apiGetProducts(req, res, next)
    {
        const page = 0;
        const productsPerPage = 4;
        let filters = {};

        const {productsList, totalNumProducts} = await productsDAO.getProducts({});
        
        let response = {
            products: productsList,
            page: page,
            filters: filters,
            entries_per_page: productsPerPage,
            total_results: totalNumProducts
        }

        res.json(response);
    }
}