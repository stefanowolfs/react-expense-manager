import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import { store } from "./core/store/store";
import { darkTheme } from "./styles/themes";
import GlobalStyle from "./styles/globalStyles";
import { startMockAPI } from "./tests/mockAPI";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
startMockAPI();

root.render(
  <>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
