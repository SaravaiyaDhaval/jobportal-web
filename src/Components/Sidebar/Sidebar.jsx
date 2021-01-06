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
                <a href="#" data-activates="slide-out" class="btn btn-primary p-3 button-collapse"><i
                    class="fas fa-bars"></i></a>

                <div id="slide-out" class={isSidebarMinimized ? "side-nav side wide sn-bg-4 slim" : "side-nav side wide sn-bg-4"}>
                    <ul class="custom-scrollbar">
                        <li>
                            <div class="logo-wrapper sn-ad-avatar-wrapper">
                                <a href="#"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle" /><span>Anna Deynah</span></a>
                            </div>
                        </li>
                        <li>
                            <ul class="collapsible collapsible-accordion">
                                <li className={selectedCollepsMenu === 1 ? "active" : ""} onClick={() => this.onMenuListClickHandle(1)}><a class="collapsible-header waves-effect arrow-r "><i class="sv-slim-icon fas fa-chevron-right"></i> Submit blog<i class="fas fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="#" class="waves-effect active">
                                                <span class="sv-slim"> SL </span>
                                                <span class="sv-normal">Submit listing</span></a>
                                            </li>
                                            <li><a href="#" class="waves-effect">
                                                <span class="sv-slim"> RF </span>
                                                <span class="sv-normal">Registration form</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={selectedCollepsMenu === 2 ? "active" : ""} onClick={() => this.onMenuListClickHandle(2)}><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon far fa-hand-point-right"></i> Instruction<i class="fas fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="#" class="waves-effect">
                                                <span class="sv-slim"> FB </span>
                                                <span class="sv-normal">For bloggers</span></a>
                                            </li>
                                            <li><a href="#" class="waves-effect">
                                                <span class="sv-slim"> FA </span>
                                                <span class="sv-normal">For authors</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={selectedCollepsMenu === 3 ? "active" : ""} onClick={() => this.onMenuListClickHandle(3)}><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon fas fa-eye"></i> About<i class="fas fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="#" class="waves-effect">
                                                <span class="sv-slim"> I </span>
                                                <span class="sv-normal">Introduction</span></a>
                                            </li>
                                            <li><a href="#" class="waves-effect">
                                                <span class="sv-slim"> MM </span>
                                                <span class="sv-normal">Monthly meetings</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={selectedCollepsMenu === 4 ? "active" : ""} onClick={() => this.onMenuListClickHandle(4)}><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon far fa-envelope"></i> Contact me<i class="fas fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="#" class="waves-effect">
                                                <span class="sv-slim"> F </span>
                                                <span class="sv-normal">FAQ</span></a>
                                            </li>
                                            <li><a href="#" class="waves-effect">
                                                <span class="sv-slim"> W </span>
                                                <span class="sv-normal">Write a message</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a id="toggle" class="waves-effect" onClick={() => this.onSidebarMinmize()}><i class= {isSidebarMinimized ? "sv-slim-icon fas fa-angle-double-left" : "sv-slim-icon fas fa-angle-double-right"} ></i>Minimize menu</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="sidenav-bg rgba-indigo-strong"></div>
                </div>
            </div>
        );
    }
}
export default Sidebar
