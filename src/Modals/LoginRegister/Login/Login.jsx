import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBIcon } from 'mdbreact';
import { Select, MenuItem, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./Login.scss";
class Login extends Component {
    state = {
        email: "",
        password: "",
        isPasswordShow: false
    }
    onInputValueChange = (event) => {
        let { name, value } = event.target;
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
    render() {
        let { email, password, isPasswordShow } = this.state;
        return (
            <div id="Login">
                <TextField id="standard-basic" className="mb-3" name="email" onChange={this.onInputValueChange} value={email} label="email" fullWidth={true} />
                <TextField id="standard-basic" className="mb-3" name="password" onChange={this.onInputValueChange}   value={password} label="password" fullWidth={true} type={isPasswordShow ? "text" : "password"} InputProps={{ endAdornment: (<IconButton onClick={() => this.handlePasswordShow()}>{isPasswordShow ? <Visibility /> : <VisibilityOff />}</IconButton>) }} label="password" fullWidth={true} />
                <p className="font-small white-text d-flex justify-content-end"> Forgot  <a href="#!" className="white-text ml-1 font-weight-bold" >  Password?                </a>
                </p>
                <MDBRow className='d-flex align-items-center '>
                    <div className='text-center mb-3 col-md-12'>
                        <MDBBtn color='success' rounded type='button' className='btn-block z-depth-1' > Sign in  </MDBBtn>
                    </div>
                </MDBRow>
            </div>
        );
    }
}

export default Login;