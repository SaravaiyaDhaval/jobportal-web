import React from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from '../Components/Sections/AdminCardSection1';
import AdminCardSection2 from '../Components/Sections/AdminCardSection2';
import TableSection from '../Components/Sections/TableSection';
import BreadcrumSection from '../Components/Sections/BreadcrumSection';
import ChartSection1 from '../Components/Sections/ChartSection1';
import ChartSection2 from '../Components/Sections/ChartSection2';
import MapSection from '../Components/Sections/MapSection';
import ModalSection from '../Components/Sections/ModalSection';

const DashboardPage =  () => {
  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <MDBRow className="mb-4">
          <MapSection />
          <ModalSection />
      </MDBRow>
      <AdminCardSection2 />
    </React.Fragment>
  )
}

export default DashboardPage;