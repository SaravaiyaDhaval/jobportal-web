import React, { Component } from "react";
import "./Header.scss";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import LoginModal from "./../../Modals/LoginModal/LoginModal";
import RegisterModal from "./../../Modals/RegisterModal/RegisterModal"
import { connect } from 'react-redux'
import { logout } from '../../Actions/Auth';
import { toggleModal } from "./../../Actions/UI";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, isLoginModalActive: false };
    }

    toggleCollapse = () => {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    onLoginRegisterModalHandle = (isActive, actionData) => {
        let { isLoginModalActive } = this.state;
        this.setState({
            isLoginModalActive: isActive
        })
    }
    onLogout = () => {
        let { dispatch } = this.props;
        dispatch(logout());
    }
    onModalHandle = (isOpen, key) => {
        let { dispatch } = this.props;
        dispatch(toggleModal(isOpen, key))

    }
    render() {
        let { token } = this.props;
        let { isOpen, isLoginModalActive } = this.state;
        console.log("token--->", token)
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
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            {!token ?
                                <>
                                    <MDBNavItem onClick={() => this.onModalHandle(true, "loginModal")}>
                                        <button className="btn btn-sm align-middle btn-outline-white" type="button">Login</button>
                                    </MDBNavItem>
                                    <MDBNavItem onClick={() => this.onModalHandle(true, "registerModal")}>
                                        <button className="btn btn-sm align-middle btn-outline-white" type="button">Register</button>
                                    </MDBNavItem>
                                </>
                                :
                                <MDBNavItem onClick={() => this.onLogout()}>
                                    <button className="btn btn-sm align-middle btn-outline-white" type="button">Logout</button>
                                </MDBNavItem>
                            }
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
                <LoginModal />
                <RegisterModal/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return ({
        token: state.user.token,
    })
}
export default connect(mapStateToProps,)(Header);