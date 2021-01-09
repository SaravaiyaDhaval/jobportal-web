import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBIcon } from 'mdbreact';
import { Select, MenuItem, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./LoginModal.scss";
import { login } from '../../Actions/Auth';
import { setAlert ,toggleModal} from "../../Actions/UI";
import { connect } from 'react-redux';

class LoginModal extends Component {
    state = {
        email: "",
        password: "",
        errors: {
            email: null, password: null,
        },
        isPasswordShow: false
    }
    onInputValueChange = (event) => {
        let { name, value } = event.target;
        this.checkValidationOnChange(name, value)
        this.setState({
            [name]: value
        })
    }
    handlePasswordShow = () => {
        let { isPasswordShow } = this.state;
        this.setState({
            isPasswordShow: !isPasswordShow
        })
    }

    checkValidationOnSubmit = () => {
        let { dispatch } = this.props;
        let { errors } = this.state;
        let { email, password, } = this.state;

        if (!email) { errors.email = "email address must be required!" }
        if (!password) { errors.password = "password must be required!" }
        dispatch(setAlert('Not available for test user', 'error'))
        this.setState({
            errors: errors,
        })
    }
    checkValidationOnChange = (name, value) => {
        let { errors, password } = this.state;
        const validEmailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'email': errors.email = validEmailRegex.test(value) ? null : 'email is not valid!'; break;
            case 'password': errors.password = value.length < 6 ? 'password must be 6 characters long!' : null; break;
            default: break;
        }
        this.setState({
            errors: errors
        })
    }
    onUserLogin = () => {
        let { dispatch } = this.props;
        let { email, password, errors } = this.state;
        this.checkValidationOnSubmit()

        if (!errors.email && !errors.password) {
            let data = { email, password }
            dispatch(login(data));
        }
    }
    onModalHandle = (isOpen, key) => {
        let { dispatch } = this.props;
        dispatch(toggleModal(isOpen, key))
      
    }
    render() {
        let { user, loginModal } = this.props;

        let { email, password, isPasswordShow, errors } = this.state;
        return (
            <MDBModal isOpen={loginModal} toggle={() => this.onModalHandle(false, "loginModal")} fullHeight position="right">
                <MDBBtn className="modal-close-btn" tag="a" size="sm" floating gradient="blue" onClick={() => this.onModalHandle(false, "loginModal")}>
                    <Close />
                </MDBBtn>
                <MDBCard className='card-image' style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)' }}>
                    <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                        <div className='text-center'>
                            <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                                <strong>SIGN</strong>
                                <a href='#!' className='green-text font-weight-bold'>
                                    <strong>  IN</strong>
                                </a>
                            </h3>
                        </div>
                        <div id="Login">

                            <TextField className="mb-3" label="Email Address"
                                name="email" value={email} onChange={this.onInputValueChange}
                                fullWidth={true} required={true} error={errors.email ? true : false}
                                helperText={errors.email} />

                            <TextField className="mb-3" label="Password"
                                name="password" value={password} onChange={this.onInputValueChange}
                                fullWidth={true} type={isPasswordShow ? "text" : "password"}
                                error={errors.password ? true : false}
                                helperText={errors.password}
                                InputProps={{
                                    endAdornment: (<IconButton onClick={() => this.handlePasswordShow()}>
                                        {isPasswordShow ? <Visibility /> : <VisibilityOff />}</IconButton>)
                                }}
                                fullWidth={true} required={true} />
                            <p className="font-small white-text d-flex justify-content-end"> Forgot  <a href="#!" className="white-text ml-1 font-weight-bold" >  Password?                </a>
                            </p>
                            <MDBRow className='d-flex align-items-center '>
                                <div className='text-center mb-3 col-md-12'>
                                    <MDBBtn color='success' rounded type='button' className='btn-block z-depth-1' onClick={() => this.onUserLogin()} > Sign in  </MDBBtn>
                                </div>
                            </MDBRow>
                        </div>
                        <MDBCol md='12'>
                            <p className='font-small white-text d-flex justify-content-end'> Have not an account? <a href='#!' className='green-text ml-1 font-weight-bold' onClick={() => this.onModalHandle(true, "registerModal")}> Sign Up</a></p>

                        </MDBCol>
                    </div>
                </MDBCard>
            </MDBModal>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.data,
        loginModal: state.ui.modals.loginModal,

    };
}

export default connect(mapStateToProps)(LoginModal);