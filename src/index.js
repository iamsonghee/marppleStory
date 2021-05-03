import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
