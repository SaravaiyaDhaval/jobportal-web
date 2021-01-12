import React, { Component } from "react";
import { connect } from 'react-redux';
import "./DetailsView.scss";
import { MDBTypography } from "mdbreact";
import MapSection from "./../../Components/Sections/MapSection";
import CarouselView from "./../../Components/CarouselView/CarouselView.jsx";
import AdminCardSection1 from "./../../Components/Sections/AdminCardSection1";
import AdminCardSection2 from "./../../Components/Sections/AdminCardSection2";
import GoogleMapReact from 'google-map-react';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from "mdbreact";

class DetailsView extends Component {
    render() {
        let { verifyAccountData } = this.props;
        return (
            <div id="DetailsView">
                <MDBCard className="card-body" >
                    <MDBRow >
                        <MDBCol sm="4">
                            <CarouselView />
                            <MapSection />
                        </MDBCol>
                        <MDBCol sm="8">
                            <MDBCardTitle>Front-end devloper</MDBCardTitle>
                            <MDBCardText>
                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                                </MDBCardText>
                            <MDBRow>
                                <MDBCol xl="12" md="12" className="mb-r"><h5>Company Details</h5></MDBCol>
                                <MDBCol xl="4" md="6" className="mb-r">
                                    <AdminCardSection1 title={"REVENUE"} subTitle={"$2,60,500"} icon={"chart-line"} theme={"primary"} progressRatio={25} footerText={"Better than last week (25%)"} />
                                </MDBCol>
                                
                                <MDBCol xl="4" md="6" className="mb-r">
                                    <AdminCardSection1 title={"EMPLOYEE"} subTitle={"1580"} icon={"users-cog"} theme={"secondary"} progressRatio={50} footerText={"Worse than last week (50%)"} />
                                </MDBCol>
                                <MDBCol xl="4" md="6" className="mb-r">
                                    <AdminCardSection1 title={"CLIENTS"} subTitle={"55"} icon={"users"} theme={"success"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                </MDBCol>
                                <MDBCol xl="4" md="6" className="mb-r">
                                    <AdminCardSection1 title={"RATING"} subTitle={"4.5/5"} icon={"star"} theme={"warning"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                </MDBCol>
                                <MDBCol xl="4" md="6" className="mb-r">
                                    <AdminCardSection1 title={"LOCATION"} subTitle={"7"} icon={"map-marker-alt"} theme={"info"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                </MDBCol>
                                <MDBCol xl="4" md="6" className="mb-r">
                                    <AdminCardSection1 title={"HEADQUARTERS"} subTitle={"California"} icon={"warehouse"} theme={"danger"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                </MDBCol>
                                
                                {/* <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection1 title={"ORGANIC TRAFFIC"} subTitle={"3568"} icon={"chart-bar"} theme={"warning"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                    </MDBCol> */}
                            </MDBRow>
                            </MDBCol>
                    </MDBRow>
                    <MDBRow>
                                <MDBCol xl="12" md="12" className="mb-r"><h5>Company Requirements</h5></MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"POSITION"} subTitle={"React-js developer"} icon={"vote-yea"} color={"#224D96"} theme={"primary"} progressRatio={25} footerText={"Better than last week (25%)"} />
                                </MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"REQUIREMENTS"} subTitle={"3"} icon={"plus"} color={"#794692"} theme={"secondary"} progressRatio={50} footerText={"Worse than last week (50%)"} />
                                </MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"EXPERAINACE"} subTitle={"5 years"} icon={"user-check"} theme={"success"} color={"#008636"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                </MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"EDUCATION"} subTitle={"M.C.A."} icon={"user-graduate"} theme={"warning"} color={"#bd881d"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                </MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"SALARY"} subTitle={"₹40,000 - ₹60,000"} icon={"rupee-sign"} theme={"danger"} color={"#CC2735"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                </MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"LOCATION"} subTitle={"Ahemdabad"} icon={"map-marked"} theme={"warning"} color={"#bd881d"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                </MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"WORK TYPE"} subTitle={"Fulltime"} icon={"hourglass-half"} theme={"primary"} color={"#224D96"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                </MDBCol>
                                <MDBCol xl="3" md="6" className="mb-r">
                                    <AdminCardSection2 title={"OFFICE TIME"} subTitle={"10:00AM - 07:00PM"} icon={"business-time"} theme={"secondary"} color={"#794692"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                </MDBCol>
                            </MDBRow>
                    <MDBRow>
                        <MDBCol xl="4" md="12" className="mb-r">
                            <h5>Job Description</h5>
                            <MDBTypography listUnStyled>
                                <ul>
                                    <li>Female Staff for Back Office in E-commerce Company and Other Management Work</li>

                                    <li> Minimum 6 Months Experience Required.</li>

                                    <li>  Good English and Hindi communication required.</li>

                                    <li>  Basic knowledge of Microsoft Excel is required.</li>

                                    <li>  Good opportunity and long term position for the right candidate.</li>
                                </ul>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol xl="4" md="12" className="mb-r">
                            <h5>Benefits:</h5>
                            <MDBTypography listUnStyled>
                                <ul>
                                    <li>Female Staff for Back Office in E-commerce Company and Other Management Work</li>

                                    <li> Minimum 6 Months Experience Required.</li>

                                    <li>  Good English and Hindi communication required.</li>
                                </ul>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol xl="4" md="12" className="mb-r">
                            <h5>Supplemental Pay:</h5>
                            <MDBTypography listUnStyled>
                                <ul>
                                    <li>Female Staff for Back Office in E-commerce Company and Other Management Work</li>

                                    <li> Minimum 6 Months Experience Required.</li>

                                    <li>  Good English and Hindi communication required.</li>
                                </ul>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol xl="4" md="12" className="mb-r">
                            <h5>Experience:</h5>
                            <MDBTypography listUnStyled>
                                <ul>
                                    <li>Female Staff for Back Office in E-commerce Company and Other Management Work</li>

                                    <li> Minimum 6 Months Experience Required.</li>

                                    <li>  Good English and Hindi communication required.</li>
                                </ul>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol xl="4" md="12" className="mb-r">
                            <h5>Education:</h5>
                            <MDBTypography listUnStyled>
                                <ul>
                                    <li>Female Staff for Back Office in E-commerce Company and Other Management Work</li>

                                    <li> Minimum 6 Months Experience Required.</li>

                                    <li>  Good English and Hindi communication required.</li>
                                </ul>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol xl="4" md="12" className="mb-r">
                            <h5>Contact:</h5>
                            <MDBTypography listUnStyled>
                                <ul>
                                    <li>webside: http://natrixsoftware.com/</li>
                                    <li>Email: natrixsoftware@gmail.com</li>
                                    <li>Contact: 9865984456/6815555248</li>
                                </ul>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol xl="12" md="12" className="mb-r">
                            <div className="apply-view">
                                <MDBBtn color="indigo" > Apply </MDBBtn>
                                <MDBBtn > Favourite </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>


                </MDBCard>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return ({
        verifyAccountData: state.verifyAccountData,
    })
}
export default connect(mapStateToProps,)(DetailsView);
