import React, { Component } from "react";
import "./Sidebar.scss";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { isSidebarMinimized: false, selectedCollepsMenu: null };

    }
    onSidebarMinmize = () => {
        let { isSidebarMinimized } = this.state;
        this.setState({
            isSidebarMinimized: !isSidebarMinimized,
        })
    }
    onMenuListClickHandle = (id) => {
        let { selectedCollepsMenu } = this.state;
        if (selectedCollepsMenu === id) {
            this.setState({
                selectedCollepsMenu: null
            })
        }
        else {
            this.setState({
                selectedCollepsMenu: id
            })
        }

    }

    render() {
        let { isSidebarMinimized, selectedCollepsMenu } = this.state;
        return (
            <div id="Sidebar" className={isSidebarMinimized ? "mini-sidebar" : ""}>
                <a href="#" data-activates="slide-out" className="btn btn-primary p-3 button-collapse"><i
                    className="fas fa-bars"></i></a>

                <div id="slide-out" className={isSidebarMinimized ? "side-nav side wide sn-bg-4 slim" : "side-nav side wide sn-bg-4"}>
                    <ul className="custom-scrollbar">
                        <li>
                            <div className="logo-wrapper sn-ad-avatar-wrapper">
                                <a href="#"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" /><span>Anna Deynah</span></a>
                            </div>
                        </li>
                        <li>
                            <ul className="collapsible collapsible-accordion">
                                <li className={selectedCollepsMenu === 1 ? "active" : ""} onClick={() => this.onMenuListClickHandle(1)}><a className="collapsible-header waves-effect arrow-r "><i className="sv-slim-icon fas fa-chevron-right"></i> Submit blog<i className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li><a href="#" className="waves-effect active">
                                                <span className="sv-slim"> SL </span>
                                                <span className="sv-normal">Submit listing</span></a>
                                            </li>
                                            <li><a href="#" className="waves-effect">
                                                <span className="sv-slim"> RF </span>
                                                <span className="sv-normal">Registration form</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={selectedCollepsMenu === 2 ? "active" : ""} onClick={() => this.onMenuListClickHandle(2)}><a className="collapsible-header waves-effect arrow-r"><i className="sv-slim-icon far fa-hand-point-right"></i> Instruction<i className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li><a href="#" className="waves-effect">
                                                <span className="sv-slim"> FB </span>
                                                <span className="sv-normal">For bloggers</span></a>
                                            </li>
                                            <li><a href="#" className="waves-effect">
                                                <span className="sv-slim"> FA </span>
                                                <span className="sv-normal">For authors</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={selectedCollepsMenu === 3 ? "active" : ""} onClick={() => this.onMenuListClickHandle(3)}><a className="collapsible-header waves-effect arrow-r"><i className="sv-slim-icon fas fa-eye"></i> About<i className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li><a href="#" className="waves-effect">
                                                <span className="sv-slim"> I </span>
                                                <span className="sv-normal">Introduction</span></a>
                                            </li>
                                            <li><a href="#" className="waves-effect">
                                                <span className="sv-slim"> MM </span>
                                                <span className="sv-normal">Monthly meetings</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={selectedCollepsMenu === 4 ? "active" : ""} onClick={() => this.onMenuListClickHandle(4)}><a className="collapsible-header waves-effect arrow-r"><i className="sv-slim-icon far fa-envelope"></i> Contact me<i className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li><a href="#" className="waves-effect">
                                                <span className="sv-slim"> F </span>
                                                <span className="sv-normal">FAQ</span></a>
                                            </li>
                                            <li><a href="#" className="waves-effect">
                                                <span className="sv-slim"> W </span>
                                                <span className="sv-normal">Write a message</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a id="toggle" className="waves-effect" onClick={() => this.onSidebarMinmize()}><i className= {isSidebarMinimized ? "sv-slim-icon fas fa-angle-double-left" : "sv-slim-icon fas fa-angle-double-right"} ></i>Minimize menu</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="sidenav-bg rgba-indigo-strong"></div>
                </div>
            </div>
        );
    }
}
export default Sidebar
