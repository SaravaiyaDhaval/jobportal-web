import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBIcon } from 'mdbreact';
import "./LoginRegister.scss";
import Login from "./Login/Login.jsx";
import Register from './Register/Register.jsx';
import Close from '@material-ui/icons/Close';
class LoginRegister extends Component {
    state = {
        isSigninView: true,
    }

    onViewChangeHandle = (isActive) => {
        this.setState({
            isSigninView: isActive
        })
    }
    render() {
        let { isActive, } = this.props;
        let { isSigninView } = this.state;
        return (
            <MDBModal isOpen={isActive} toggle={() => this.props.onModalActionHandle(true)} fullHeight position="right">
                <MDBBtn className="modal-close-btn" tag="a" size="sm" floating gradient="blue" onClick={() => this.props.onModalActionHandle(false)}>
                    <Close/>
                </MDBBtn>
                <MDBCard className='card-image' style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)' }}>
                    <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                        <div className='text-center'>
                            <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                                <strong>SIGN</strong>
                                <a href='#!' className='green-text font-weight-bold'>
                                    <strong> {isSigninView ? "IN" : "UP"}</strong>
                                </a>
                            </h3>
                        </div>
                        {isSigninView ? <Login /> : <Register />}
                        <p className="font-medium white-text text-right d-flex justify-content-center  pt-2">  or Sign in with:</p>
                        <div className="row my-3 d-flex justify-content-center social-media-btn">
                            <MDBBtn social="fb">  <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook</MDBBtn>
                            <MDBBtn social="tw"> <MDBIcon fab icon="twitter" className="pr-1" /> Twitter  </MDBBtn>
                            <MDBBtn social="gplus"> <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google + </MDBBtn>
                        </div>
                        <MDBCol md='12'>
                            {isSigninView ?
                                <p className='font-small white-text d-flex justify-content-end'> Have not an account? <a href='#!' className='green-text ml-1 font-weight-bold' onClick={() => this.onViewChangeHandle(false)}> Sign Up</a></p>
                                :
                                <p className='font-small white-text d-flex justify-content-end'> Have an account? <a href='#!' className='green-text ml-1 font-weight-bold' onClick={() => this.onViewChangeHandle(true)}> Sign In</a></p>

                            }
                        </MDBCol>
                    </div>
                </MDBCard>
            </MDBModal>
        );
    }
}

export default LoginRegister;