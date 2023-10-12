import ProductDataService from "../../../services/Product";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductsList = props => {
    const [products, setProducts] = useState([]);
    const [Productlist, setProductlist] = useState("false");
   
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
     
    const prodname = [
        {
           
            heading: "Woman",
            Description:"Fully committed to the success company",
        },
        {
           
            heading: "Man",
            Description:"Fully committed to the success company",
        },
        {
            
            heading: "Kids",
            Description:"Fully committed to the success company",
        },
        {
            
            heading: "Accesories",
            Description:"Fully committed to the success company",
        },
    ];
     


    return (
        
        <Row xs={2} sm={3} md={4} className=" ml-[1%] mr-[2%] lg:flex mt-[10px] mx-auto ">
            {
              products.map(product => (
                
                <Col  className="   cursor-pointer "  key={product._id}>
                   { 
                    <Card className="relative border-2 rounded-md border-slate-300 flex gap-2 group">
                
                        

                   <div className="flex flex-col w-5/12 absolute translate-x-[10%] translate-y-[20%] :
                                group-hover:scale-95 
                                 group-hover:transition-all  group-hover:duration-200"  >
                                 <div className="
                                  font-small lg:font-[600] 
                                  text-richblack-600 lg:text-2xl text-xs ">
                                      {prodname[1].heading}
                                     </div>
                                     <div className="invisible group-hover:visible">{prodname[1].Description}</div>
                                           
                                 </div>


                   
                   
                        <Card.Img className=" group-hover:transition-all  group-hover:duration-200" variant="top" src={product.Images.split(',')[0]} />
                        {/* <Card.Body>
                            <Card.Title className="text-white">Card title</Card.Title>
                            <Card.Text className="texe">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body> */}
                    
                    </Card>
}
                </Col>
                    
            ))
            
                    }
                    
        </Row>
        
    );
}

export default ProductsList;