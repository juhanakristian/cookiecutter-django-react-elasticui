import * as React from "react";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import LoginForm from "./features/login/LoginForm";
import LandingPage from "./features/landing/LandingPage";

import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
