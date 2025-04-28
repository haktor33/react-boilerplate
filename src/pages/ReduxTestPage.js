import React from "react";
import i18n from "i18n";
import { alertActions } from "store/actions/alert.actions";
import { Button } from "antd";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { compose } from "redux";

const ReduxTestPage = (props) => {

    console.log(props);

    const testAlert = () => {
        props.success("header","content");
    }

    return (
        <>
            <div>{i18n.t("test")}</div>
            <div>Default Lang: {props.base.lang}</div>
            <Button onClick={testAlert}>Alert Test</Button>
        </>
    );
}

const stateCreators = (state) => {
    const { base } = state || [];
    return { base };
};

const mapDispatchToProps = {
    ...alertActions,
};

export default compose(withTranslation(), connect(stateCreators, mapDispatchToProps))(ReduxTestPage);