import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const AdminCardSection2 = ({ title, subTitle, icon, theme, color, progressRatio, footerText }) => {
  return (
    <MDBCard color={theme + "-color"} className="classic-admin-card mb-4">
      <MDBCardBody>
        <div className="float-right">
          <MDBIcon far icon={icon} />
        </div>
        <p className="white-text">{title}</p>
        <h4><strong>{subTitle}</strong></h4>
      </MDBCardBody>
      <div className="progress">
        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow={progressRatio} className={"progress-bar "} role="progressbar" style={{ width: progressRatio + "%", background: color }}></div>
      </div>
      <MDBCardBody>
        <p>{footerText}</p>
      </MDBCardBody>
    </MDBCard>

  )
}

export default AdminCardSection2;

