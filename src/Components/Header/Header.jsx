import React, { Component } from "react";
import "./Header.scss";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import LoginRegister from "./../../Modals/LoginRegister/LoginRegister.jsx";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, isLoginModalActive:false };
    }

    toggleCollapse = () => {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    onLoginRegisterModalHandle = (isActive, actionData)=>{
        let {isLoginModalActive} = this.state;
        this.setState({
            isLoginModalActive: isActive
        })
    }
    render() {
        let { isOpen, isLoginModalActive } = this.state;

        return (
            <div id="Header">
                <MDBNavbar color="indigo" dark expand="md">
                    <MDBNavbarBrand>
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" className="logo-style"></img>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={() => this.toggleCollapse()} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem className="search-nav-item">
                                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem onClick={() => this.onLoginRegisterModalHandle(true)}>
                                <button class="btn btn-sm align-middle btn-outline-white" type="button">Login</button>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        Menu
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-indigo">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <LoginRegister isActive={isLoginModalActive} onModalActionHandle={this.onLoginRegisterModalHandle}/>
            </div>
        );
    }
}
export default Header
