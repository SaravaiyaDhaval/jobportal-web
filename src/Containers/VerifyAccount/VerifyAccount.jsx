import React, { Component } from "react";
import "./VerifyAccount.scss";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyUserAccount } from '../../Actions/Auth';
import * as qs from 'query-string';
import RoundLoader from './../../Components/Loaders/RoundLoader/RoundLoader.jsx';
// import { MDBNotification } from "mdbreact";
class VerifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyAccountData: ""
    }
  }

  componentDidUpdate(props) {
    let { verifyAccountData } = this.props
    if (verifyAccountData !== props.verifyAccountData) {
      this.setState({
        verifyAccountData: verifyAccountData
      })
    }
    if (verifyAccountData && !verifyAccountData.loading && verifyAccountData.loaded) {
      this.props.history.push("/")
    }
  }

  componentDidMount() {
    let { verifyAccountData } = this.props;
    this.setState({
      verifyAccountData: verifyAccountData
    })
    let location = this.props.location
    const verifyToken = qs.parse(location.search);
    // this.props.verificatoinUserData(verifyToken)
  }
  render() {
    let { verifyAccountData } = this.state;
    console.log("verifyAccountData", verifyAccountData.loading)
    debugger
    return (
      <div id="VerifyAccount">
        <RoundLoader loading={verifyAccountData.loading} size={80} />
        {/* {(verifyAccountData.error || verifyAccountData.data) &&
          <MDBNotification show fade autohide={5000}
            icon={verifyAccountData.error ? "exclamation-triangle" : "envelope"}
            iconClassName={verifyAccountData.error ? "red-text" : "green-text"}
            title="New Message"
            message={verifyAccountData.error ? verifyAccountData.error.message : verifyAccountData.data}
            text="just now" />} */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    verifyAccountData: state.verifyAccountData
  };
}

function mapDispatchToProps(dispatch) {
  return {}
  // bindActionCreators({ verificatoinUserData: verifyUserAccount }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccount);
