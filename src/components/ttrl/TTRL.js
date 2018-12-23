import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import TtrlHome from './TtrlHome';
import ProductHome from './ProductHome';
import Product from "./Product";

class Ttrl extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/ttrl' component={TtrlHome}/>
                <Route exact path='/ttrl/products' component={ProductHome}/>
                <Route exact path='/ttrl/products/:product' component={Product}/>
            </Switch>
        );
    }
}

export default Ttrl;