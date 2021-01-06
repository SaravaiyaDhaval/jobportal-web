import React, { Component } from "react";
import "./Assets/Scss/Main.scss";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
// JS
import "./Assets/Js/Main";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Routes from "./Routes";
// Constant
const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <div className="app-main">
          <Header />
          <div className="side-bar-nav">s
            <div className="main-left-side-nav">
              <Sidebar />
            </div>
            <div className="main-right-side-nav side" data-activates="slide-out">
              <Navbar />
              <div className="main-route">
                <Routes />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
