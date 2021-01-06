import React, { Component } from "react";
import "./RoundLoader.scss";
import * as qs from 'query-string';
import { Avatar, CircularProgress } from "@material-ui/core";
class RoundLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            size: 50
        }
    }

    componentDidUpdate(props) {
        let { loading , size} = this.props
        if (loading !== props.loading) {
            this.setState({
                loading: loading,
                size: size
            })
        }
    }
    componentDidMount() {
        let { loading, size } = this.props
        this.setState({
            loading: loading,
            size: size
        })
    }

    render() {
        debugger
        let { loading, size } = this.state;
        console.log("loading --->", loading)
        // verifyAccountData ? verifyAccountData.loading : false
        if (!loading) {
            return ""
        }
        let imgSize = size - 5 + "px";

        return (
            <div id="RoundLoader">
                <div className="loader-main">
                    <Avatar src="https://securelinx.com/wp-content/themes/wp-slx-v4/img/icons/monitor.png" style={{ width: imgSize, height: imgSize }}></Avatar>
                    <CircularProgress size={size} className="progress-bar" />
                </div>
            </div>
        );
    }
}
export default RoundLoader
