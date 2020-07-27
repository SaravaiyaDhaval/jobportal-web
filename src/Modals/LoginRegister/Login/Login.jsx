import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBIcon } from 'mdbreact';
import "./Login.scss";
class Login extends Component {
    state = {
    }

    render() {
        return (
            <div id="Login">
                <MDBInput
                    label='Your email'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                />
                <MDBInput
                    label='Your password'
                    group
                    type='password'
                    validate
                    labelClass='white-text'
                    containerClass="mb-0"
                    className="password-field"
                />
                <p className="font-small white-text d-flex justify-content-end">
                    Forgot
                <a
                        href="#!"
                        className="white-text ml-1 font-weight-bold"
                    >
                        Password?
                </a>
                </p>
                <MDBRow className='d-flex align-items-center '>
                    <div className='text-center mb-3 col-md-12'>
                        <MDBBtn
                            color='success'
                            rounded
                            type='button'
                            className='btn-block z-depth-1'
                        >
                            Sign in
                  </MDBBtn>
                    </div>
                </MDBRow>


            </div>
        );
    }
}

export default Login;