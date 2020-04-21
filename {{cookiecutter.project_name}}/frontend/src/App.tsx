import * as React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";

import LoginForm from "./features/login/LoginForm";
import Page from "./features/shared/Page";
import AppBar from "./features/shared/AppBar";

import { store } from "./app/store";

import "@elastic/eui/dist/eui_theme_light.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/about">
              <AppBar />
              <Page title="About">Other content</Page>
            </Route>
            <Route path="/blog">
              <AppBar />
              <Page title="Blog">Blog posts</Page>
            </Route>
            <Route path="/">
              <AppBar />
              <Page title="Front page">Some content</Page>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
