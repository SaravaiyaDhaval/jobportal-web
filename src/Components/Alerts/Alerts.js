import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from "react-toastr"
import { removeAlert } from '../../Actions/UI'

class Alert extends Component {
    constructor() {
        super()
        this.Tstcontainer = false
    }

    componentWillReceiveProps(nextProps) {
        debugger
        const { messages } = this.props.alerts
        if (nextProps.alerts.messages.length !== messages.length) {
            this.showMessages(messages)
        }
    }

    showMessages = messages => {
        for (let message of messages) {
            this.Tstcontainer[message.level](message.text, '', { closeButton: true, timeOut: message.timeout })
        }
        const { dispatch } = this.props
        dispatch(removeAlert())
    }

    render() {
        return (
            <ToastContainer
                ref={ref => this.Tstcontainer = ref}
                
                className="toast-bottom-right" />
        );
    }
}

const mapStateToProps = state =>
    ({ 
        alerts: {
            messages: state.ui.alerts
        }   
    })

export default connect(mapStateToProps)(Alert)