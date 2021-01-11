import React, { Component } from "react";
import { connect } from 'react-redux';
import "./DetailsView.scss";
import CarouselView from "./../../Components/CarouselView/CarouselView.jsx";
import AdminCardSection1 from "./../../Components/Sections/AdminCardSection1";
import AdminCardSection2 from "./../../Components/Sections/AdminCardSection2";

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
                        </MDBCol>
                        <MDBCol sm="8">
                            <MDBCardBody>
                                <MDBCardTitle>Front-end devloper</MDBCardTitle>
                                <MDBCardText>
                                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                                </MDBCardText>
                                {/* <MDBBtn color="indigo">Apply </MDBBtn> */}

                                <MDBRow>
                                    <MDBCol xl="12" md="12" className="mb-r"><h5>Company Details</h5></MDBCol>
                                    <MDBCol xl="4" md="6" className="mb-r">
                                        <AdminCardSection1 title={"SALES"} subTitle={"$2654"} icon={"money-bill-alt"} theme={"primary"} progressRatio={25} footerText={"Better than last week (25%)"} />
                                    </MDBCol>
                                    <MDBCol xl="4" md="6" className="mb-r">
                                        <AdminCardSection1 title={"SUBSCRIPTIONS"} subTitle={"158"} icon={"chart-line"} theme={"secondary"} progressRatio={50} footerText={"Worse than last week (50%)"} />
                                    </MDBCol>
                                    <MDBCol xl="4" md="6" className="mb-r">
                                        <AdminCardSection1 title={"TRAFFIC"} subTitle={"45862"} icon={"chart-pie"} theme={"success"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                    </MDBCol>
                                    {/* <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection1 title={"ORGANIC TRAFFIC"} subTitle={"3568"} icon={"chart-bar"} theme={"warning"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                    </MDBCol> */}
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol xl="12" md="12" className="mb-r"><h5>Company Requirements</h5></MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"SALES"} subTitle={"$2654"} icon={"money-bill-alt"} color={"#224D96"} theme={"primary"} progressRatio={25} footerText={"Better than last week (25%)"} />
                                    </MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"SUBSCRIPTIONS"} subTitle={"158"} icon={"chart-line"} color={"#794692"} theme={"secondary"} progressRatio={50} footerText={"Worse than last week (50%)"} />
                                    </MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"TRAFFIC"} subTitle={"45862"} icon={"chart-pie"} theme={"success"} color={"#008636"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                    </MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"ORGANIC TRAFFIC"} subTitle={"3568"} icon={"chart-bar"} theme={"warning"} color={"#bd881d"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                    </MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"TRAFFIC"} subTitle={"45862"} icon={"chart-pie"} theme={"danger"} color={"#CC2735"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                    </MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"ORGANIC TRAFFIC"} subTitle={"3568"} icon={"chart-bar"} theme={"warning"} color={"#bd881d"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                    </MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"TRAFFIC"} subTitle={"45862"} icon={"chart-pie"} theme={"primary"} color={"#224D96"} progressRatio={75} footerText={"Worse than last week (75%)"} />
                                    </MDBCol>
                                    <MDBCol xl="3" md="6" className="mb-r">
                                        <AdminCardSection2 title={"ORGANIC TRAFFIC"} subTitle={"3568"} icon={"chart-bar"} theme={"secondary"} color={"#794692"} progressRatio={60} footerText={"Better than last week (60%)"} />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
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
