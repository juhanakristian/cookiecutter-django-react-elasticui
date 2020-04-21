/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { useDispatch } from "react-redux";

import { EuiTitle, EuiButton, EuiFieldText } from "@elastic/eui";
import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";

import { css } from "@emotion/core";

import { AppDispatch } from "../../app/store";
import { login } from "./loginSlice";

const container = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
`;

export default function LoginForm() {
  const dispatch: AppDispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAndRedirect = () => {
    dispatch(login(username, password))
      .then(() => console.log("Successfully logged in!"))
      .catch(() => console.log("Invalid credentials!"));
  };

  const onRegister = () => {};

  const onChangeUpdateState = (fn: any) => {
    return (e: any) => {
      fn(e.target.value);
    };
  };

  return (
    <div css={container}>
      <EuiTitle>
        <h1>Login</h1>
      </EuiTitle>
      <EuiSpacer />
      <EuiFieldText
        id="username"
        placeholder="Username"
        onChange={onChangeUpdateState(setUsername)}
      />
      <EuiSpacer />
      <EuiFieldText
        id="password"
        placeholder="Password"
        type="password"
        onChange={onChangeUpdateState(setPassword)}
      />
      <EuiSpacer />
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiButton id="password" fill onClick={onRegister}>
            Register
          </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton id="password" onClick={loginAndRedirect}>
            Login
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}
