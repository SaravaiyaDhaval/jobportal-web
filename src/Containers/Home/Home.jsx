import React, { Component } from "react";
import { connect } from 'react-redux';
import "./Home.scss";
import CarouselView from "./CarouselView/CarouselView.jsx";
import ProductCursole from "./ProductCarousel/ProductCarousel.jsx";
import { MDBNotification } from "mdbreact";

class Home extends Component {
  render() {
    let { verifyAccountData } = this.props;
    return (
      <div id="Home">
        <CarouselView />
        <ProductCursole sliderTitle={"Letest Jobs"} />
        <ProductCursole sliderTitle={"Fresher's Jobs"} />
        <ProductCursole sliderTitle={"Top rated jobs"} />


        {verifyAccountData && (verifyAccountData.error || verifyAccountData.data) &&
          <MDBNotification show fade autohide={5000}
            className={verifyAccountData.error ? "notification-toast-right error" : "notification-toast-right success"}
            icon={verifyAccountData.error ? "exclamation-triangle" : "envelope"}
            iconClassName={verifyAccountData.error ? "red-text" : "green-text"}
            title="New Message"
            message={verifyAccountData.error ? verifyAccountData.error.message : verifyAccountData.data.message}
            text="just now" />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return ({
    verifyAccountData: state.verifyAccountData,
  })
}
export default connect(mapStateToProps, )(Home);
