import React, { Component } from "react";
import "./Navbar.scss";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };

    }
    render() {

        return (
            <div id="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light white">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                        <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item dropdown mega-dropdown active"> */}
                            <li className="nav-item dropdown mega-dropdown">
                                <a className="nav-link dropdown-toggle text-uppercase" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Features
          <span className="sr-only">(current)</span>
                                </a>
                                <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-5 px-3"
                                    aria-labelledby="navbarDropdownMenuLink2">
                                    <div className="row">
                                        <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-0">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi
                    architecto
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mega-dropdown ">
                                <a className="nav-link dropdown-toggle text-uppercase" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Features
          <span className="sr-only">(current)</span>
                                </a>
                                <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-5 px-3"
                                    aria-labelledby="navbarDropdownMenuLink2">
                                    <div className="row">
                                        <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-0">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi
                    architecto
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mega-dropdown ">
                                <a className="nav-link dropdown-toggle text-uppercase" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Features
          <span className="sr-only">(current)</span>
                                </a>
                                <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-5 px-3"
                                    aria-labelledby="navbarDropdownMenuLink2">
                                    <div className="row">
                                        <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-xl-3 sub-menu mb-0">
                                            <h6 className="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi
                    architecto
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                  </a>
                                                </li>
                                                <li>
                                                    <a className="menu-item pl-0" href="#!">
                                                        <i className="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                  </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar
