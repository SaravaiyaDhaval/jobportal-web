import React, { Component } from 'react';
import 'date-fns';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBIcon } from 'mdbreact';
import { Select, MenuItem, TextField, InputAdornment, IconButton, FormControl, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ImageOutlined from "@material-ui/icons/ImageOutlined";
import "./RegisterModal.scss";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { tr } from 'date-fns/locale';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import { register } from '../../Actions/Auth';
import { setAlert, toggleModal } from "../../Actions/UI";
class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                username: null, email: null, password: null, confirmPassword: null, mobile: null
            },
            isPasswordShow: false,
            fullName: "", email: "", password: "", confirmPassword: "", mobile: ""
        }
    }

    checkValidationOnSubmit = () => {
        let { dispatch } = this.props;
        let { errors } = this.state;
        let { fullName, mobile, email, password, confirmPassword } = this.state;
        if (!fullName) { errors.fullName = "full name must be required!" }
        if (!mobile) { errors.mobile = "mobile number must be required!" }
        if (!email) { errors.email = "email address must be required!" }
        if (!password) { errors.password = "password must be required!" }
        if (!confirmPassword) { errors.confirmPassword = "confirm password must be required!" }
        dispatch(setAlert('Not available for test user', 'error'))
        this.setState({
            errors: errors,
        })
    }
    checkValidationOnChange = (name, value) => {
        let { errors, password } = this.state;
        const validEmailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'fullName': errors.fullName = value.length < 6 ? 'full name must be 6 characters long!' : null; break;
            case 'email': errors.email = validEmailRegex.test(value) ? null : 'email is not valid!'; break;
            case 'password': errors.password = value.length < 6 ? 'password must be 6 characters long!' : null; break;
            case 'confirmPassword': errors.confirmPassword = value.length < 6 ? 'confirm password must be 6 characters long!' : password === value ? null : "password & confirm password not matched"; break;
            case 'mobile': errors.mobile = value.length !== 10 ? 'mobile number must be 10 number!' : null; break;
            default: break;
        }
        this.setState({
            errors: errors
        })
    }
    onUserRegister = () => {
        let { dispatch } = this.props;
        let { fullName, mobile, email, password, confirmPassword, errors } = this.state;
        this.checkValidationOnSubmit()

        if (!errors.fullName && !errors.mobile && !errors.email && !errors.password, !errors.confirmPassword) {
            let data = { fullName, email, mobile, password }
            dispatch(register(data));
        }
    }
    handlePasswordShow = () => {
        let { isPasswordShow } = this.state;
        this.setState({ isPasswordShow: !isPasswordShow })
    }
    onInputValueChange = (event) => {
        let { name, value } = event.target;
        this.checkValidationOnChange(name, value)
        this.setState({
            [name]: value,
        })
    }
    onModalHandle = (isOpen, key) => {
        let { dispatch } = this.props;
        dispatch(toggleModal(isOpen, key))

    }

    render() {
        let {registerModal}= this.props;
        let { isPasswordShow, errors, notification } = this.state;
        let { fullName, mobile, email, password, confirmPassword } = this.state;
        return (
            <MDBModal isOpen={registerModal} toggle={() => this.onModalHandle(false, "registerModal")} fullHeight position="right">
                <MDBBtn className="modal-close-btn" tag="a" size="sm" floating gradient="blue" onClick={() => this.onModalHandle(false, "registerModal")}>
                    <Close />
                </MDBBtn>
                <MDBCard className='card-image' style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)' }}>
                    <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                        <div className='text-center'>
                            <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                                <strong>SIGN</strong>
                                <a href='#!' className='green-text font-weight-bold'>
                                    <strong> UP</strong>
                                </a>
                            </h3>
                        </div>
                        <div id="Register">
                            <MDBRow className="justify-content-center">
                                <MDBCol md="12">
                                    {/* <h3 className="font-weight-bold pl-0 my-4">  <strong>Basic Information</strong> </h3> */}
                                    <TextField className="mb-3" label="Full Name"
                                        name="fullName" value={fullName} onChange={this.onInputValueChange}
                                        fullWidth={true} required={true}
                                        error={errors.fullName ? true : false}
                                        helperText={errors.fullName} />

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

                                    <TextField className="mb-3" label="Confirm Password" name="confirmPassword"
                                        value={confirmPassword} onChange={this.onInputValueChange} fullWidth={true}
                                        type={isPasswordShow ? "text" : "password"}
                                        error={errors.confirmPassword ? true : false}
                                        helperText={errors.confirmPassword}
                                        InputProps={{
                                            endAdornment: (<IconButton onClick={() => this.handlePasswordShow()}>
                                                {isPasswordShow ? <Visibility /> : <VisibilityOff />}</IconButton>)
                                        }}
                                        fullWidth={true} required={true} />

                                    <TextField className="mb-3" label="Mobile Number" name="mobile"
                                        value={mobile} onChange={this.onInputValueChange} type="number"
                                        fullWidth={true}
                                        required={true} error={errors.mobile ? true : false} helperText={errors.mobile}
                                    />
                                    <MDBBtn color="success" rounded className="float-right" onClick={() => this.onUserRegister()}> submit</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </div >
                        {/* <p className="font-medium white-text text-right d-flex justify-content-center  pt-2">  or Sign in with:</p>
                        <div className="row my-3 d-flex justify-content-center social-media-btn">
                            <MDBBtn social="fb">  <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook</MDBBtn>
                            <MDBBtn social="tw"> <MDBIcon fab icon="twitter" className="pr-1" /> Twitter  </MDBBtn>
                            <MDBBtn social="gplus"> <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google + </MDBBtn>
                        </div> */}
                        <MDBCol md='12'>
                                <p className='font-small white-text d-flex justify-content-end'> Have an account? <a href='#!' className='green-text ml-1 font-weight-bold' onClick={() => this.onModalHandle(true, "loginModal")}> Sign In</a></p>
                        </MDBCol>
                    </div>
                </MDBCard>
            </MDBModal>
        );
    }
}


function mapStateToProps(state) {
    return {
        ragisterData: state.ragisterData,
        registerModal: state.ui.modals.registerModal

    };
}
export default connect(mapStateToProps)(RegisterModal);