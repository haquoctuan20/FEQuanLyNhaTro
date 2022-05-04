import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import vi_VN from "antd/lib/locale-provider/vi_VN";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import "moment/locale/vi";
import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ThemeProviderStyled from "./styledComponents/ThemeProviderStyled";

moment.locale("vi");

ReactDOM.render(
  <HelmetProvider>
    <ThemeProviderStyled>
      <ConfigProvider locale={vi_VN}>
        <App />
      </ConfigProvider>
    </ThemeProviderStyled>
  </HelmetProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
