import React from "react"
import 'antd/dist/reset.css';
import i18n from './i18n';

const App = () => {
    return (
        <p>
            {i18n.t("test.t1")}
        </p>
    );
}

export default App;
