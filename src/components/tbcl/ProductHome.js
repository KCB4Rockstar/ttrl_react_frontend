import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Product from "./Product";

class ProductHome extends Component {
    render() {
        return (
            <div>
                All Products
                <Switch>
                    <Route path='/tbcl/products/:product' component={Product}/>
                </Switch>
            </div>
        );
    }
}

export default ProductHome;