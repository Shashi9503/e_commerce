import axios from 'axios';

class ProductDataService{
    getAll()
    {
        return axios(`http://localhost:8000/api/v1/products`);
    }
}

export default new ProductDataService();