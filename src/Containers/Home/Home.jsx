import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeState } from './../../Store/action/action';
import "./Home.scss";
import CarouselView from "./CarouselView/CarouselView.jsx";
import ProductCursole from "./ProductCarousel/ProductCarousel.jsx";
class Home extends Component {
  render() {
    let { stories } = this.props;
    return (
      <div id="Home">
        <CarouselView />
        <ProductCursole sliderTitle={"Recommanded products"} />
        <ProductCursole sliderTitle={"Letest products"} />
        <ProductCursole sliderTitle={"Upcomming products"} />

      </div>
    );
  }
}
function mapStateToProps(state) {
  return ({
    stories: state.rootReducer.stories
  })
}
function mapDispatchProps(dispatch) {
  return ({
    changeStateToReducer: (stories) => {
      dispatch(changeState(stories))
    }
  })
}

export default connect(mapStateToProps, mapDispatchProps)(Home);
