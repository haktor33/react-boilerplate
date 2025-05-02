import React from "react";
import i18n from "i18n";
import { withTranslation } from "react-i18next";

const HomePage = () => {

    return (
        <div>{i18n.t("pages.home")}</div>
    );
}

export default withTranslation()(HomePage);