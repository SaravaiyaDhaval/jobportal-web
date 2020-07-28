import React, { Component } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBIcon, } from "mdbreact";
import { Select, MenuItem, TextField, InputAdornment, IconButton } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ImageOutlined from "@material-ui/icons/ImageOutlined";
import "./Register.scss";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { tr } from 'date-fns/locale';
class Register extends Component {
    state = {
        fromActiveTab: 1,
        formActivePanel1Changed: false,
        isPasswordShow: false,
        fullName: "", userName: "", password: "", emailAddress: "",
        mobileNumber: "", birthDate: "", city: "", address: "",
        jobTitle: "", qualification: "BCA", experience: "fresher", currentSallery: "", expectedSallery: ""
    }

    swapFormTab = (id) => {
        this.setState({ fromActiveTab: id });
    }

    handleNextPrevClick = (a) => (param) => (e) => {
        this.setState({ fromActiveTab: param, });
    }

    handleSubmission = () => {
        alert('Form submitted!');
    }

    handlePasswordShow = () => {
        let { isPasswordShow } = this.state;
        this.setState({ isPasswordShow: !isPasswordShow })
    }
    onInputValueChange = (event) => {
        debugger
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        let { isPasswordShow, fromActiveTab, } = this.state;
        // first Tab
        let { fullName, userName, password, emailAddress } = this.state;
        // Second Tab
        let { mobileNumber, birthDate, city, address } = this.state;
        // Third Tab
        let { jobTitle, qualification, experience, currentSallery, expectedSallery } = this.state;
        // Fourth Tab
        let { } = this.state;
        return (
            <div id="Register">
                <MDBRow className=" justify-content-center">
                    <MDBCol md="12" className="">
                        <div class="md-stepper-horizontal ">
                            <div class="md-step active done" onClick={() => this.swapFormTab(1)}>
                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" floating={true} gradient="blue">
                                    <MDBIcon icon="folder-open" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                            <div class="md-step active editable" onClick={() => this.swapFormTab(2)}>
                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" gradient="blue">
                                    <MDBIcon icon="pencil-alt" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                            <div class="md-step active" onClick={() => this.swapFormTab(3)} >
                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" floating={true} gradient="blue">
                                    <MDBIcon icon="image" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                            <div class="md-step active" onClick={() => this.swapFormTab(4)}>
                                <MDBBtn tag="button" className="btn-floating waves-effect waves-light" floating={true} gradient="blue">
                                    <MDBIcon icon="check" />
                                </MDBBtn>
                                <div class="md-step-bar-left"></div>
                                <div class="md-step-bar-right"></div>
                            </div>
                        </div>
                    </MDBCol>

                    <MDBCol md="12">
                        {fromActiveTab === 1 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4">  <strong>Basic Information</strong> </h3>
                                <TextField className="mb-3" label="Full Name" name="fullName" value={fullName} onChange={this.onInputValueChange} fullWidth={true} />
                                <TextField className="mb-3" label="User Name" name="userName" value={userName} onChange={this.onInputValueChange} fullWidth={true} />
                                <TextField className="mb-3" label="Password" name="password" value={password} onChange={this.onInputValueChange} fullWidth={true} type={isPasswordShow ? "text" : "password"} InputProps={{ endAdornment: (<IconButton onClick={() => this.handlePasswordShow()}>{isPasswordShow ? <Visibility /> : <VisibilityOff />}</IconButton>) }} label="password" fullWidth={true} />
                                <TextField className="mb-3" label="Email Address" name="emailAddress" value={emailAddress} onChange={this.onInputValueChange} fullWidth={true} />
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(2)}>next</MDBBtn>
                            </MDBCol>
                        )}
                        {fromActiveTab === 2 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4"> <strong>Personal Information</strong></h3>
                                <div className="md-form mt-4 ">
                                    <PhoneInput country={'us'} value={mobileNumber} onChange={phone => this.setState({ mobileNumber })} />
                                    <label class="number-lable" data-error="" data-success="" id="" aria-labelledby="">Mobile No.</label>
                                </div>
                                <TextField className="mb-3" label="Birth Date" name="birthDate" value={birthDate} onChange={this.onInputValueChange} type="date" defaultValue="2017-05-24" fullWidth={true} InputLabelProps={{ shrink: true, }} />
                                <TextField className="mb-3" label="City Name" name="city" value={city} onChange={this.onInputValueChange} fullWidth={true} />
                                <TextField className="mb-3" label="Address" name="address" value={address} onChange={this.onInputValueChange} multiline rows={3} rowsMax={3} fullWidth={true} />
                                <MDBBtn color="mdb-color" rounded className="float-left " onClick={this.handleNextPrevClick(3)(1)}> previous</MDBBtn>
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(3)}>   next </MDBBtn>
                            </MDBCol>
                        )}
                        {fromActiveTab === 3 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4">  <strong>Qualification</strong>                                </h3>
                                <TextField name="jobTitle" value={jobTitle} onChange={this.onInputValueChange} label="job title" className="mb-3" fullWidth={true} />
                                <TextField name="qualification" value={qualification} onChange={this.onInputValueChange} className="mb-3" label="qualification" fullWidth={true} select>
                                    <MenuItem value={"BCA"}>BCA</MenuItem>
                                    <MenuItem value={"BBA"}>BBA</MenuItem>
                                    <MenuItem value={"MCA"}>MCA</MenuItem>
                                    <MenuItem value={"MBA"}>MBA</MenuItem>
                                    <MenuItem value={"BE"}>BE</MenuItem>
                                    <MenuItem value={"BSc"}>BSc</MenuItem>
                                    <MenuItem value={"Msc"}>Msc</MenuItem>
                                </TextField>
                                <TextField name="experience" value={experience} onChange={this.onInputValueChange} className="mb-3" label="experience" fullWidth={true} select>
                                    <MenuItem value={"fresher"}>Fresher</MenuItem>
                                    <MenuItem value={"1"}>1 year</MenuItem>
                                    <MenuItem value={"2"}>2 Years</MenuItem>
                                    <MenuItem value={"3"}>3 Years</MenuItem>
                                    <MenuItem value={"5"}>5 Years</MenuItem>
                                    <MenuItem value={"more then 5"}>Above 5 Years</MenuItem>
                                </TextField>
                                <TextField name="currentSallery" value={currentSallery} onChange={this.onInputValueChange} className="mb-3" label="current sallery" InputProps={{ startAdornment: <InputAdornment position="start">RS</InputAdornment> }} type="number" fullWidth={true} />
                                <TextField name="expectedSallery" value={expectedSallery} onChange={this.onInputValueChange} className="mb-3" label="expected sallery" InputProps={{ startAdornment: <InputAdornment position="start">RS</InputAdornment> }} type="number" fullWidth={true} />
                                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(2)}> previous </MDBBtn>
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(4)}> next </MDBBtn>
                            </MDBCol>
                        )}
                        {fromActiveTab === 4 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4"> <strong>Documents</strong></h3>
                                {/* <h2 className="text-center font-weight-bold my-4"> Registration completed!</h2> */}
                                <TextField className="mb-3" fullWidth={true} label="Upload Profile Picture" InputProps={{ endAdornment: <IconButton><InputAdornment position="start"><ImageOutlined /></InputAdornment> </IconButton> }} />
                                <TextField className="mb-3" fullWidth={true} label="Upload Resume" InputProps={{ endAdornment: <IconButton><InputAdornment position="start"><AttachFile /></InputAdornment> </IconButton> }} />
                                <TextField className="mb-3" fullWidth={true} label="About Your Self" multiline rows={3} rowsMax={3} />
                                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(3)}>  previous</MDBBtn>
                                <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}> submit</MDBBtn>
                            </MDBCol>
                        )}
                    </MDBCol>
                </MDBRow>
            </div >
        );
    }
}

export default Register;