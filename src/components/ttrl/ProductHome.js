import React, {Component} from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText, Button} from "mdbreact";

class ProductHome extends Component {
    constructor(props){
        super(props);

        this.state = {
            products : []
        }
    }

    componentDidMount(){
        fetch('/api/ttrl/products')
            .then(res => res.json())
            .then(products => this.setState({ products }));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid">
                        <h1 className="deep-orange-text">Products</h1>
                    </div>
                </div>
                <div className="row">
                    {this.state.products && this.state.products.map(product =>
                        <div className="col-lg-3 mt-3" key={product.id}>
                            <Card className="product">
                                <CardImage
                                    className="img-fluid h-100 prodimg"
                                    src={"/uploads/"+product.img}
                                    waves
                                />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content. {product.img}
                                    </CardText>
                                    <hr/>
                                </CardBody>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ProductHome;