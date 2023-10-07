import ProductDataService from "../../../services/Product";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductsList = props => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        retrieveProducts()
    }, [])

    const retrieveProducts = () => {
        ProductDataService.getAll()
        .then(response => {
            console.log(response.data);
            setProducts(response.data.products);
        })
        .catch( e =>{
            console.log(e);
        });
    }

    return (
        <Row xs={2} sm={3} md={4} className="g-5  w-11/12 lg:flex mt-[10px] mx-auto bg-richblack-900">
            {
                
            products.map(product => (
                <Col  className=" border-4  border-red-800 rounded-sm cursor-pointer "  key={product._id}>
                    <Card >
                        <Card.Img variant="top" src={product.Images.split(',')[0]} />
                        <Card.Body>
                            <Card.Title className="text-white">Card title</Card.Title>
                            <Card.Text className="text-white">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))
            
                }
        </Row>
    );
}

export default ProductsList;