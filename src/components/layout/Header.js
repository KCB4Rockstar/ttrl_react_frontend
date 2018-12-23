import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse} from "mdbreact";

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse(){
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(params) {
        return (
            <Navbar color="orange darken-3" light expand="md" fixed="top" scrolling>
                <NavbarBrand>
                    <NavLink to="/">
                        <h5 className="d-none d-lg-block black-text">Trinidad Tent Rentals Group</h5>
                        <h6 className="d-block d-sm-none d-md-none black-text">Trinidad Tent Rentals Group</h6>
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <NavbarNav right>
                        <NavItem active={window.location.pathname === '/'}>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem active={window.location.pathname.startsWith('/ttrl')}>
                            <NavLink to="/ttrl">Trinidad Tent Rentals</NavLink>
                        </NavItem>
                        <NavItem active={window.location.pathname.startsWith('/tbcl')}>
                            <NavLink to="/tbcl">Trinidad Blocks Company</NavLink>
                        </NavItem>
                        <NavItem active={window.location.pathname.startsWith('/secrets')}>
                            <NavLink to="/secrets">Secrets Guest House</NavLink>
                        </NavItem>
                        <NavItem active={window.location.pathname.startsWith('/conference')}>
                            <NavLink to="/conference">Conference Room</NavLink>
                        </NavItem>
                        <NavItem active={window.location.pathname.startsWith('/resort')}>
                            <NavLink to="/resort">Resort Packages</NavLink>
                        </NavItem>
                        <NavItem active={window.location.pathname.startsWith('/contact')}>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;