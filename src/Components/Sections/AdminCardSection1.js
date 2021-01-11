import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';

const AdminCardSection1 = ({ title, subTitle, icon, theme, progressRatio, footerText }) => {
  return (
    <MDBCard  className="cascading-admin-card mt-4 mb-4">
      <div className="admin-up">
        <MDBIcon icon={icon} className={"bg-" + theme} />
        <div className="data">
          <p>{title}</p>
          <h4>
            <strong>{subTitle}</strong>
          </h4>
        </div>
      </div>
      <MDBCardBody>
        <div className="progress">
          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow={progressRatio} className={"progress-bar " + "bg-" + theme} role="progressbar"
            style={{ width: progressRatio + "%" }}></div>
        </div>
        <MDBCardText>{footerText}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  )
}

export default AdminCardSection1;

