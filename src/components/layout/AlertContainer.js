import React, { useEffect } from 'react';
import { notification } from './AlertProps.js';
import { connect } from "react-redux";
import { alertActions } from 'store/actions/alert.actions';


const AlertContainer = (props) => {

    useEffect(() => {
        if (props.alert.message) {
            notification(props.alert.type, props.alert.header, props.alert.message);
            setTimeout(()=>props.clearAlert(), 700)
        }
        //eslint-disable-next-line
    }, [props.alert.message]);
    return <></>;
}

const stateCreators = state => {
    return { alert: state.alert };
}
const actionCreators = { clearAlert: alertActions.clear }

export default connect(stateCreators, actionCreators)(AlertContainer);