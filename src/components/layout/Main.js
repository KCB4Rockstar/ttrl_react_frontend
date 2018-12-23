import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import Login from '../admin/Login';
import Ttrl from '../ttrl/TTRL';
import Tbcl from '../tbcl/TBCL';
import Secret from '../secrets/Secret';
import Conference from '../conference/Conference';
import Contact from '../contact/Contact';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/ttrl" component={Ttrl}/>
                    <Route path="/tbcl" component={Tbcl}/>
                    <Route path="/secrets" component={Secret}/>
                    <Route path="/admin" component={Login}/>
                    <Route path="/conference" component={Conference}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </main></div>
        );
    }
}

export default Main;