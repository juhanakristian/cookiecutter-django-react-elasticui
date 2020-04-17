import * as React from "react";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";

import LoginForm from "./features/login/LoginForm";
import Page from "./features/shared/Page";
import AppBar from "./features/shared/AppBar";

import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppBar />
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/about">
              <Page title="About">Other content</Page>
            </Route>
            <Route path="/blog">
              <Page title="Blog">Blog posts</Page>
            </Route>
            <Route path="/">
              <Page title="Front page">Some content</Page>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
