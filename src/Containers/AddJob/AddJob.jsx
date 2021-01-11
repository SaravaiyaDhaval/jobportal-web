import React, { Component } from "react";
import { connect } from 'react-redux';
import "./AddJob.scss";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";

class AddJob extends Component {
  render() {
    let { verifyAccountData } = this.props;
    return (
      <div id="AddJob">
        {/* <MDBContainer> */}
        <MDBCard className="card-body" >
          <MDBCardTitle>Insert New Job</MDBCardTitle>
          <MDBCardText>
            <MDBRow className="mb-4">
              <MDBCol sm="3">
                <MDBInput label="job Title" outline />
                <MDBInput label="job Description" outline />
                <MDBInput label="Location" outline />
                <MDBInput label="Job Type" outline />

              </MDBCol>
              <MDBCol sm="3">
                <MDBInput label="No Of Requirements" outline />
                <MDBInput label="Salary From" outline />
                <MDBInput label="Salary To" outline />
                <MDBInput label="Experainace" outline />

              </MDBCol>
              <MDBCol sm="3">
                <MDBInput label="Company Name" outline />
                <MDBInput label="Company Growth" outline />
                <MDBInput label="Company Size" outline />
                <MDBInput label="Company Rateing" outline />

              </MDBCol>
              <MDBCol sm="3">
                <MDBInput label="Compony Description" outline />
                <MDBInput label="Photos" outline />
                <MDBInput label="Contact Number" outline />
                <MDBInput label="Email Address" outline />
                <MDBInput label="Photos" outline />

              </MDBCol>
              <MDBCol sm="12">
                <MDBBtn color="primary" className="d-flex m-auto">Submit</MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardText>

          {/* <div className="flex-row">
      <a href="#!">MDBCard link</a>
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
    </div> */}
        </MDBCard>
        {/* </MDBContainer> */}

      </div>
    );
  }
}
function mapStateToProps(state) {
  return ({
    verifyAccountData: state.verifyAccountData,
  })
}
export default connect(mapStateToProps,)(AddJob);
