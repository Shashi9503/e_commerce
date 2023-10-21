import axios from 'axios';

class ProductDataService{
    getAll()
    {
        return axios.get(`http://localhost:8000/api/v1/products`);
    }
}

const ProducDataService = new ProductDataService();

export default ProducDataService;