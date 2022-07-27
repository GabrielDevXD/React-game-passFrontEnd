/** @format */

import * as Style from "./login-style";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "types/interfaces";
import React, { useState } from "react";
import { loginService } from "Service/authService";
import swal from "sweetalert";

const Login = () => {
  const navigation = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: UserLogin) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await loginService.Login(values);

    if (!response) {
      swal({
        title: "login error",
        text: "Invalid username and/or password",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;
    const userId = response.data.user.id;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("userId", userId);
      swal({
        title: "Welcome",
        icon: "success",
        timer: 3000,
      });
      navigation("/profiles");
    }
  };

  return (
    <Style.Login>
      <main>
        <Style.LoginSection>
          <Style.LoginContent onSubmit={handleLogin}>
            <Style.LoginInput
              type='text'
              name='email'
              id='email'
              placeholder=' Enter your login email'
              required
              onChange={handleChangesValues}
            />

            <Style.LoginInput
              type='password'
              name='password'
              id='password'
              placeholder=' Enter your access password'
              required
              onChange={handleChangesValues}
            />

            <Style.LoginDescription>
              You don't have an account created{" "}
              <Style.LoginStrong>
                <Link to={"/singup"}>Create one here!</Link>
              </Style.LoginStrong>
            </Style.LoginDescription>

            <Style.LoginButton type='submit'>Login</Style.LoginButton>
          </Style.LoginContent>
        </Style.LoginSection>
      </main>
    </Style.Login>
  );
};

export default Login;
