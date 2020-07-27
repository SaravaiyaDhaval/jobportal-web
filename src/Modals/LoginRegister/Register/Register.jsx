import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBIcon } from "mdbreact";
import "./Register.scss";
class Register extends Component {
    state = {
        formActivePanel3: 1,
        formActivePanel1Changed: false,
    }

    swapFormActive = (id) => {
        this.setState({
            formActivePanel3: id
        });
    }

    handleNextPrevClick = (a) => (param) => (e) => {
        this.setState({
            ['formActivePanel' + a]: param,
            ['formActivePanel' + a + 'Changed']: true
        });
    }

    handleSubmission = () => {
        alert('Form submitted!');
    }

    calculateAutofocus = (a) => {
        if (this.state['formActivePanel' + a + 'Changed']) {
            return true
        }
    }
    render() {
        return (
            <div id="Register">
                <MDBRow className=" justify-content-center">
                    <MDBCol md="12" className="">
                        <div class="md-stepper-horizontal ">
                            <div class="md-step active done" onClick={() => this.swapFormActive(1)}>

                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" floating={true} gradient="blue">
                                    <MDBIcon icon="folder-open" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                            <div class="md-step active editable" onClick={() => this.swapFormActive(2)}>
                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" gradient="blue">
                                    <MDBIcon icon="pencil-alt" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                            <div class="md-step active" onClick={() => this.swapFormActive(3)} >
                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" floating={true} gradient="blue">
                                    <MDBIcon icon="image" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                            <div class="md-step active" onClick={() => this.swapFormActive(4)}>
                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" floating={true} gradient="blue">
                                    <MDBIcon icon="check" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                        </div>

                    </MDBCol>

                    <MDBCol md="12">
                        {this.state.formActivePanel3 === 1 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4">
                                    <strong>Basic Information</strong>
                                </h3>
                                <MDBInput label="Email" className="mt-4" autoFocus={this.calculateAutofocus(3)} />
                                <MDBInput label="Username" className="mt-4" />
                                <MDBInput label="Password" className="mt-4" />
                                <MDBInput label="Repeat Password" className="mt-4" />
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(2)}>
                                    next
                </MDBBtn>
                            </MDBCol>
                        )}
                        {this.state.formActivePanel3 === 2 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4">
                                    <strong>Personal Data</strong>
                                </h3>
                                <MDBInput label="First Name" className="mt-3" autoFocus={this.calculateAutofocus(3)} />
                                <MDBInput label="Second Name" className="mt-3" />
                                <MDBInput label="Surname" className="mt-3" />
                                <MDBInput label="Address" type="textarea" rows="2" />
                                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(1)}>
                                    previous
                </MDBBtn>
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(3)}>
                                    next
                </MDBBtn>
                            </MDBCol>
                        )}
                        {this.state.formActivePanel3 === 3 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4">
                                    <strong>Terms and conditions</strong>
                                </h3>
                                <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox3" autoFocus={this.calculateAutofocus(3)} />
                                <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox4" />
                                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(2)}>
                                    previous
                </MDBBtn>
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(4)}>
                                    next
                </MDBBtn>
                            </MDBCol>
                        )}
                        {this.state.formActivePanel3 === 4 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4">
                                    <strong>Finish</strong>
                                </h3>
                                <h2 className="text-center font-weight-bold my-4">
                                    Registration completed!
                </h2>
                                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(3)}>
                                    previous
                </MDBBtn>
                                <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}>
                                    submit
                </MDBBtn>
                            </MDBCol>
                        )}
                    </MDBCol>
                </MDBRow>
            </div >
        );
    }
}

export default Register;