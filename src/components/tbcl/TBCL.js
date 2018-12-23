import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import TbclHome from "./TbclHome";
import ProductHome from "./ProductHome";

class Tbcl extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/tbcl' component={TbclHome}/>
                <Route path='/tbcl/products' component={ProductHome}/>
            </Switch>
        );
    }
}

export default Tbcl;