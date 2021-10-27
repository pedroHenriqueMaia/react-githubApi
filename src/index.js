import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import Root from "./pages/root";
import ApolloClient from './apolloClient';
import "simplebar/src/simplebar.css"

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
