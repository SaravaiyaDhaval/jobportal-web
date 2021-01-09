import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBIcon } from 'mdbreact';
import { Select, MenuItem, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./Login.scss";
import { login } from '../../../Actions/Auth';
import {setAlert} from "./../../../Actions/UI";
import { connect } from 'react-redux';

class Login extends Component {
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
        let {dispatch} = this.props;
        let { errors } = this.state;
        let {  email, password, } = this.state;

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
        let {dispatch} = this.props;
        let { email, password,errors } = this.state;
        this.checkValidationOnSubmit()
        debugger
        if (!errors.email && !errors.password) {
            let data ={email, password}
            dispatch(login(data));
        }
    }
    render() {
        let {user} = this.props;
        debugger
        let { email, password, isPasswordShow , errors} = this.state;
        return (
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
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.data
    };
}

export default connect(mapStateToProps)(Login);