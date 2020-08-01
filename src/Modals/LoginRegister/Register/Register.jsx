import React, { Component } from 'react';
import 'date-fns';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBNotification } from "mdbreact";
import { Select, MenuItem, TextField, InputAdornment, IconButton, FormControl, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ImageOutlined from "@material-ui/icons/ImageOutlined";
import "./Register.scss";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { tr } from 'date-fns/locale';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from './Actions/Index';
class Register extends Component {
    constructor(props) {
        super(props);
        this.profileImgUploadInputRef = React.createRef();
        this.resumeDocsUploadInputRef = React.createRef();
        this.state = {
            fromActiveTab: 1,
            notification: {
                isActive: null,
                type: null,
                message: null
            },
            errors: {
                firstName: null, lastName: null, emailAddress: null, password: null, confirmPassword: null,
                mobileNumber: null, birthDate: null, city: null, address: null,
                jobTitle: null, qualification: null, experience: null, currentSallery: null, expectedSallery: null,
                profileImg: null, resumeDocs: null, aboutSelf: null, acceptTerms: null,
            },
            formActivePanel1Changed: false,
            isPasswordShow: false,
            firstName: "", lastName: "", emailAddress: "", password: "", confirmPassword: "",
            mobileNumber: "", birthDate: "2001-01-01", city: "", address: "",
            jobTitle: "", qualification: "", experience: "", currentSallery: "", expectedSallery: "",
            profileImg: "", resumeDocs: "", aboutSelf: "", acceptTerms: false,
        }
    }
    swapFormTab = (id) => {
        this.handleNextPrevClick()
        this.checkValidationOnSubmit(id)
    }
    handleNextPrevClick = (a) => (param) => (event) => {
        this.checkValidationOnSubmit(param)
    }
    checkValidationOnSubmit = (id) => {
        let { fromActiveTab, errors } = this.state;
        // first Tab
        let { firstName, lastName, emailAddress, password, confirmPassword } = this.state;
        // Second Tab
        let { mobileNumber, birthDate, city, address } = this.state;
        // Third Tab
        let { jobTitle, qualification, experience, currentSallery, expectedSallery } = this.state;
        // Fourth Tab
        let { profileImg, resumeDocs, aboutSelf, acceptTerms } = this.state;

        if (fromActiveTab === 1 || id === 1) {
            if (!errors.firstName && !errors.lastName && !errors.emailAddress && !errors.password && !errors.confirmPassword &&
                firstName && lastName && emailAddress && password && confirmPassword) {
                this.setState({ fromActiveTab: id });
            }
            else {
                if (!firstName) { errors.firstName = "first name must be required!" }
                if (!lastName) { errors.lastName = "last name must be required!" }
                if (!emailAddress) { errors.emailAddress = "email address must be required!" }
                if (!password) { errors.password = "password must be required!" }
                if (!confirmPassword) { errors.confirmPassword = "confirm password must be required!" }

                this.setState({
                    errors: errors,
                    notification: { isActive: true, type: "error", message: "Form data is not valid please chack error messages." }
                }, () => setTimeout(() => {
                    this.setState({ notification: { isActive: null, type: null, message: null }, })
                }, 5000))
            }
        }
        else if (fromActiveTab === 2 || id === 2) {
            if (!errors.mobileNumber && !errors.birthDate && !errors.city && !errors.address &&
                mobileNumber && birthDate && city && address) {
                this.setState({ fromActiveTab: id });
            }
            else {
                if (!mobileNumber) { errors.mobileNumber = "mobile number must be required!" }
                if (!birthDate) { errors.birthDate = "birth date must be required!" }
                if (!city) { errors.city = "city address must be required!" }
                if (!address) { errors.address = "address must be required!" }

                this.setState({
                    errors: errors,
                    notification: { isActive: true, type: "error", message: "Form data is not valid please chack error messages." }
                }, () => setTimeout(() => {
                    this.setState({ notification: { isActive: null, type: null, message: null }, })
                }, 5000))
            }
        }
        else if (fromActiveTab === 3 || id === 3) {
            if (!errors.jobTitle && !errors.qualification && !errors.experience && !errors.currentSallery && !errors.expectedSallery &&
                jobTitle && qualification && experience && currentSallery && expectedSallery) {
                this.setState({ fromActiveTab: id });
            }
            else {
                if (!jobTitle) { errors.jobTitle = "job title must be required!" }
                if (!qualification) { errors.qualification = "qualification must be required!" }
                if (!experience) { errors.experience = "experience must be required!" }
                if (!currentSallery) { errors.currentSallery = "current sallery must be required!" }
                if (!expectedSallery) { errors.expectedSallery = "expected sallery  must be required!" }

                this.setState({
                    errors: errors,
                    notification: { isActive: true, type: "error", message: "Form data is not valid please chack error messages." }
                }, () => setTimeout(() => {
                    this.setState({ notification: { isActive: null, type: null, message: null }, })
                }, 5000))
            }
        }
        else if (fromActiveTab === 4 || id === 4) {
            if (!errors.profileImg && !errors.resumeDocs && !errors.aboutSelf && !errors.address &&
                profileImg && resumeDocs && aboutSelf && aboutSelf) {
                this.handleSubmission()
            }
            else {
                if (!profileImg) { errors.profileImg = "mobile number must be required!" }
                if (!resumeDocs) { errors.resumeDocs = "last name must be required!" }
                if (!aboutSelf) { errors.aboutSelf = "about self must be required!" }
                if (!acceptTerms) { errors.acceptTerms = "accept terms must be required to check!" }

                this.setState({
                    errors: errors,
                    notification: { isActive: true, type: "error", message: "Form data is not valid please chack error messages." }
                }, () => setTimeout(() => {
                    this.setState({ notification: { isActive: null, type: null, message: null }, })
                }, 5000))
            }
        }

        else {
            this.setState({ fromActiveTab: id });
        }
    }
    checkValidationOnChange = (name, value) => {
        let { errors, password } = this.state;
        const validEmailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'firstName': errors.firstName = value.length < 3 ? 'first name must be 3 characters long!' : null; break;
            case 'lastName': errors.lastName = value.length < 3 ? 'last name must be 3 characters long!' : null; break;
            case 'emailAddress': errors.emailAddress = validEmailRegex.test(value) ? null : 'email is not valid!'; break;
            case 'password': errors.password = value.length < 6 ? 'password must be 6 characters long!' : null; break;
            case 'confirmPassword': errors.confirmPassword = value.length < 6 ? 'confirm password must be 6 characters long!' : password === value ? null : "password & confirm password not matched"; break;

            case 'mobileNumber': errors.mobileNumber = value.length !== 10 ? 'mobile number must be 10 number!' : null; break;
            case 'birthDate': errors.birthDate = Number(value.substring(0, 4)) > 2002 ? 'age is must be more then 18 year!' : null; break;
            case 'city': errors.city = value.length < 3 ? 'city must be 3 characters long!' : null; break;
            case 'address': errors.address = value.length < 8 ? 'address must be 8 characters long!' : null; break;

            case 'jobTitle': errors.jobTitle = value.length < 4 ? 'job title must be 4 characters long!' : null; break;
            case 'qualification': errors.qualification = !value ? 'qualification must be required!' : null; break;
            case 'experience': errors.experience = !value ? 'experience must be required!' : null; break;
            case 'currentSallery': errors.currentSallery = value.length < 3 ? 'current sallery must be  3 digit  long!' : null; break;
            case 'expectedSallery': errors.expectedSallery = value.length < 3 ? 'expected sallery must be 3 digit long!' : null; break;

            case 'profileImg': errors.profileImg = !value ? 'profile image must be required!' : null; break;
            case 'resumeDocs': errors.resumeDocs = !value ? 'resume must be required!' : null; break;
            case 'aboutSelf': errors.aboutSelf = value.length < 30 ? 'about self must be 30 characters long!' : null; break;
            case 'acceptTerms': errors.acceptTerms = !value ? 'accept terms must be required to check!' : null; break;

            default:
                break;
        }
        this.setState({
            errors: errors
        })
    }
    handleSubmission = () => {
        let data = {
            title: "Mr", firstName: "Jason", lastName: "Watmore", email: "dhavalsaravaiya@gmail.com",
            password: "my-super-secret-password", confirmPassword: "my-super-secret-password", acceptTerms: true
        }
        this.props.registerUserData(data);
    }
    componentDidUpdate(props) {
        let { ragisterData } = this.props
        if (ragisterData !== props.ragisterData) {
            debugger
            console.log("ragisterData ----> ", ragisterData)

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
    onCheckboxValueChange = (event) => {
        debugger
        let { name, checked } = event.target;
        this.checkValidationOnChange(name, checked)

        this.setState({
            [name]: checked
        })
    }
    onFileUoloadUsingSelect = (event, fieldName) => {
        if (event.target.files.length > 0) {
            var allFile = event.target.files;
            if (allFile.length > 0) {
                for (let index = 0; index < allFile.length; index++) {
                    let percentages = 0;
                    let isUploading = false;
                    const reader = new FileReader();
                    reader.onprogress = (event) => {
                        percentages = +((event.loaded / event.total) * 100).toFixed(2);
                        // this.handleFileUploadProcess(true, percentages, allFile[index].name);
                    };
                    reader.readAsDataURL(allFile[index]);
                    reader.onabort = () => console.log("file reading was aborted");
                    reader.onerror = () => console.log("file reading has failed");
                    reader.onload = (e) => {
                        let imgUrl = reader.result;
                        this.handleFileDropUpload(allFile[index], imgUrl, fieldName);
                    };
                }
            }
        }
    }
    handleFileDropUpload = (file, preview, fieldName) => {
        let { errors } = this.state;
        let Data = { file: file, preview: preview }
        this.checkValidationOnChange(fieldName, file)
        this.setState({ [fieldName]: Data, errors: errors });
    }

    render() {
        let { isPasswordShow, fromActiveTab, errors, notification } = this.state;
        // first Tab
        let { firstName, lastName, emailAddress, password, confirmPassword } = this.state;
        // Second Tab
        let { mobileNumber, birthDate, city, address } = this.state;
        // Third Tab
        let { jobTitle, qualification, experience, currentSallery, expectedSallery } = this.state;
        // Fourth Tab
        let { profileImg, resumeDocs, aboutSelf, acceptTerms } = this.state;

        return (
            <div id="Register">
                <MDBRow className="justify-content-center">
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
                                <TextField className="mb-3" label="First Name"
                                    name="firstName" value={firstName} onChange={this.onInputValueChange}
                                    fullWidth={true} required={true}
                                    error={errors.firstName ? true : false}
                                    helperText={errors.firstName} />

                                <TextField className="mb-3" label="Last Name"
                                    name="lastName" value={lastName} onChange={this.onInputValueChange}
                                    fullWidth={true} required={true} error={errors.lastName ? true : false}
                                    helperText={errors.lastName} />

                                <TextField className="mb-3" label="Email Address"
                                    name="emailAddress" value={emailAddress} onChange={this.onInputValueChange}
                                    fullWidth={true} required={true} error={errors.emailAddress ? true : false}
                                    helperText={errors.emailAddress} />

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

                                <MDBBtn color="mdb-color" rounded className="float-right" type="submit" onClick={this.handleNextPrevClick(3)(2)}>next</MDBBtn>
                            </MDBCol>
                        )}
                        {fromActiveTab === 2 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4"> <strong>Personal Information</strong></h3>
                                <TextField className="mb-3" label="Mobile Number" name="mobileNumber"
                                    value={mobileNumber} onChange={this.onInputValueChange} type="number"
                                    fullWidth={true}
                                    required={true} error={errors.mobileNumber ? true : false} helperText={errors.mobileNumber}
                                />
                                <TextField className="mb-3" label="Birth Date" name="birthDate"
                                    value={birthDate} onChange={this.onInputValueChange} type="date"
                                    fullWidth={true} InputLabelProps={{ shrink: true, }} required={true}
                                    error={errors.birthDate ? true : false}
                                    helperText={errors.birthDate}
                                />
                                <TextField className="mb-3" label="City Name" name="city"
                                    value={city} onChange={this.onInputValueChange} fullWidth={true}
                                    required={true} error={errors.city ? true : false} helperText={errors.city}
                                />
                                <TextField className="mb-3" label="Address" name="address" value={address}
                                    onChange={this.onInputValueChange} multiline rows={3} rowsMax={3} fullWidth={true}
                                    required={true} error={errors.address ? true : false} helperText={errors.address}
                                />
                                <MDBBtn color="mdb-color" rounded className="float-left " onClick={this.handleNextPrevClick(3)(1)}> previous</MDBBtn>
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(3)}>   next </MDBBtn>
                            </MDBCol>
                        )}
                        {fromActiveTab === 3 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4">  <strong>Qualification</strong></h3>
                                <TextField name="jobTitle" value={jobTitle} onChange={this.onInputValueChange}
                                    label="job title" className="mb-3" fullWidth={true}
                                    required={true} error={errors.jobTitle ? true : false} helperText={errors.jobTitle} />
                                <TextField name="qualification" value={qualification} onChange={this.onInputValueChange}
                                    className="mb-3" label="qualification" fullWidth={true} select
                                    required={true} error={errors.qualification ? true : false} helperText={errors.qualification}>
                                    <MenuItem value={"BCA"}>BCA</MenuItem>
                                    <MenuItem value={"BBA"}>BBA</MenuItem>
                                    <MenuItem value={"MCA"}>MCA</MenuItem>
                                    <MenuItem value={"MBA"}>MBA</MenuItem>
                                    <MenuItem value={"BE"}>BE</MenuItem>
                                    <MenuItem value={"BSc"}>BSc</MenuItem>
                                    <MenuItem value={"Msc"}>Msc</MenuItem>
                                </TextField>
                                <TextField name="experience" value={experience} onChange={this.onInputValueChange}
                                    className="mb-3" label="experience" fullWidth={true} select
                                    required={true} error={errors.experience ? true : false} helperText={errors.experience}                                 >
                                    <MenuItem value={"fresher"}>Fresher</MenuItem>
                                    <MenuItem value={"1"}>1 year</MenuItem>
                                    <MenuItem value={"2"}>2 Years</MenuItem>
                                    <MenuItem value={"3"}>3 Years</MenuItem>
                                    <MenuItem value={"5"}>5 Years</MenuItem>
                                    <MenuItem value={"more then 5"}>Above 5 Years</MenuItem>
                                </TextField>
                                <TextField name="currentSallery" value={currentSallery} onChange={this.onInputValueChange}
                                    className="mb-3" label="current sallery" InputProps={{ startAdornment: <InputAdornment position="start">RS</InputAdornment> }}
                                    type="number" fullWidth={true}
                                    required={true} error={errors.currentSallery ? true : false} helperText={errors.currentSallery} />
                                <TextField name="expectedSallery" value={expectedSallery} onChange={this.onInputValueChange}
                                    className="mb-3" label="expected sallery" InputProps={{ startAdornment: <InputAdornment position="start">RS</InputAdornment> }}
                                    type="number" fullWidth={true} required={true} error={errors.expectedSallery ? true : false} helperText={errors.expectedSallery} />
                                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(2)}> previous </MDBBtn>
                                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(4)}> next </MDBBtn>
                            </MDBCol>
                        )}
                        {fromActiveTab === 4 && (
                            <MDBCol md="12">
                                <h3 className="font-weight-bold pl-0 my-4"> <strong>Documents</strong></h3>
                                {/* <h2 className="text-center font-weight-bold my-4"> Registration completed!</h2> */}
                                <TextField className="mb-3" fullWidth={true} onChange={() => { this.profileImgUploadInputRef.current.click(); }} label="Upload Profile Picture" value={profileImg && profileImg.file && profileImg.file.name}
                                    required={true} error={errors.profileImg ? true : false} helperText={errors.profileImg}
                                    InputProps={{
                                        endAdornment: <IconButton onClick={() => { this.profileImgUploadInputRef.current.click(); }}>
                                            <InputAdornment position="start"><ImageOutlined /></InputAdornment> </IconButton>
                                    }} />

                                <input id="upload" className="display-none" type="file" ref={this.profileImgUploadInputRef}
                                    onChange={(event) => this.onFileUoloadUsingSelect(event, "profileImg")} accept='image/*' />

                                <TextField className="mb-3" onChange={() => { this.resumeDocsUploadInputRef.current.click(); }} fullWidth={true} label="Upload Resume"
                                    value={resumeDocs && resumeDocs.file && resumeDocs.file.name}
                                    required={true} error={errors.resumeDocs ? true : false} helperText={errors.resumeDocs}
                                    InputProps={{
                                        endAdornment: <IconButton onClick={() => { this.resumeDocsUploadInputRef.current.click(); }} >
                                            <InputAdornment position="start"><AttachFile /></InputAdornment> </IconButton>
                                    }} />

                                <input id="upload" className="display-none" type="file" ref={this.resumeDocsUploadInputRef}
                                    onChange={(event) => this.onFileUoloadUsingSelect(event, "resumeDocs")}
                                    accept="application/pdf,application/msword" />

                                <TextField className="mb-3" name="aboutSelf" value={aboutSelf} onChange={this.onInputValueChange}
                                    fullWidth={true} label="About Your Self" multiline rows={3} rowsMax={6}
                                    required={true} error={errors.aboutSelf ? true : false} helperText={errors.aboutSelf} />

                                <FormControl component="fieldset" color="success" checked={acceptTerms} className="mb-3" required={true} error={errors.acceptTerms ? true : false}                                     >
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox checked={acceptTerms} onChange={(event) => this.onCheckboxValueChange(event)} name="acceptTerms" />}
                                            label="I agreee to the terms and conditions"
                                        />
                                    </FormGroup>
                                    {errors.acceptTerms && <FormHelperText>{errors.acceptTerms}</FormHelperText>}
                                </FormControl>
                                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(4)(3)}>  previous</MDBBtn>
                                <MDBBtn color="success" rounded className="float-right" onClick={this.handleNextPrevClick(4)(4)}> submit</MDBBtn>
                            </MDBCol>
                        )}

                    </MDBCol>
                    {notification.isActive &&
                        <MDBNotification show fade autohide={5000}
                            className={notification.type === "error" ? "notification-toast-right error" : "notification-toast-right success"}
                            icon={notification.type === "error" ? "exclamation-triangle" : "envelope"}
                            iconClassName={notification.type === "error" ? "red-text" : "green-text"}
                            title="New Message"
                            message={notification.message}
                            text="just now" />}
                </MDBRow>
            </div >
        );
    }
}


function mapStateToProps(state) {
    return {
        ragisterData: state.ragisterData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ registerUserData: registerUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);