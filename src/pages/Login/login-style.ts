/** @format */

import styled, { css } from "styled-components";
import gamepass from "assets/img/gamepass.gif";

export const Login = styled.section`
  ${({ theme }) => css`
    background-image: url(${gamepass});
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: default;
  `}
`;

export const LoginSection = styled.section`
  ${({ theme }) => css`
    padding: 1.25rem;
    width: 600px;
    height: auto;
    background-color: #4682b4;
    opacity: 0.9;
    border-radius: 15px;
  `}
`;

export const LoginImg = styled.img`
  ${() => css`
    width: 85px;
    height: auto;
    padding-bottom: 1rem;
  `}
`;

export const LoginContent = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginInput = styled.input`
  ${({ theme }) => css`
    width: 400px;
    height: 40px;
    border-radius: 15px;
    border-color: #008000;
    outline: none;
    margin-bottom: 1rem;
    box-shadow: 0 4px rgba(0, 0, 0, 0.4);
    ${theme.mixins.bodyStyle}
  `}
`;

export const LoginDescription = styled.p`
  ${({ theme }) => css`
    padding: 2rem;
    ${theme.mixins.bodyStyle}
  `}
`;

export const LoginStrong = styled.strong`
  ${() => css`
    color: #005da6;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    :hover {
      color: #107c10;
    }
  `}
`;

export const LoginButton = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.loginButton}
  `}
`;
