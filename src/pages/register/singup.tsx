/** @format */

import * as Style from "./singup-style";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { RegisterUser } from "types/interfaces";
import { RegisterService } from "Service/authService";
import swal from "sweetalert";
import ReturnPage from "components/ReturnPage";

const SingUp = () => {
  const navigate = useNavigate();
const handleNavigate = () => {
    navigate('/login')
  }

  const [values, setValues] = useState<RegisterUser>({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: RegisterUser) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await RegisterService.Register(values);

    if (!response) {
      swal({
        title: "Erro de Cadastro",
        text: "Informações incorretas!",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;

    if (!jwt) {
      swal({
        title: "Error!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 6000,
      });
    }

    localStorage.setItem("jwt", jwt);
    swal({
      title: "Usuário cadastrado com sucesso!",
      icon: "success",
      timer: 6000,
    });

    navigate("/login");
  };

  return (
    <Style.Singup>
      <ReturnPage Route={() => navigate(-1)} />

      <Style.SingupSection>
        <Style.SingupH2>User registration</Style.SingupH2>

        <Style.SingupForm onSubmit={handleRegisterUser}>
          <Style.SingupInput
            type='text'
            name='name'
            id='name'
            placeholder='Enter your Name'
            required
            onChange={handleChangesValues}
          />
          <Style.SingupInput
            type='text'
            name='nickname'
            id='nickname'
            placeholder=' your nickname'
            required
            onChange={handleChangesValues}
          />
          <Style.SingupInput
            type='email'
            name='email'
            id='email'
            placeholder=' Enter your Email'
            required
            onChange={handleChangesValues}
          />

          <Style.SingupInput
            type='text'
            name='cpf'
            id='cpf'
            placeholder=' Put your CPF'
            required
            onChange={handleChangesValues}
          />

          <Style.SingupInput
            type='password'
            name='password'
            id='password'
            placeholder=' Enter a password'
            required
            onChange={handleChangesValues}
          />

          <Style.SingupInput
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder=' Confirm your password'
            required
            onChange={handleChangesValues}
          />

          <Style.SingupButton type='submit'>Register</Style.SingupButton>
        </Style.SingupForm>
      </Style.SingupSection>
    </Style.Singup>
  );
};

export default SingUp;
