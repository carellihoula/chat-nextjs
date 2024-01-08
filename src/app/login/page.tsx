"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi";
import bg from "../../assets/images/backgroundWhatsapp.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import InputField from "../(components)/InputField";
import SubmitButtonLoginRegister from "../(components)/SubmitButtonLoginRegister";
import Link from "next/link";
import ButtonAuth2Component from "../(components)/ButtonAuth2Component";
import { signIn } from "next-auth/react";

// Define a type for your state
type UserInfos = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [userInfos, setUserInfos] = useState<UserInfos>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: userInfos.email,
      password: userInfos.password,
    });
    if (result && !result.error) {
      window.location.href = "/ChatSpace";
    } else {
      // Gérer les erreurs de connexion, afficher un message d'erreur, etc.
      result && console.error(result.error);
    }
    setUserInfos({
      email: "",
      password: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfos((infos) => ({
      ...infos,
      [name]: value,
    }));
  };

  // JSX remains unchanged
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex flex-col items-center bg-white justify-center rounded-lg gap-5 p-10 w-1/3">
        <h1>LOGIN</h1>
        <p className="welcome">Welcome to our site CanoChat</p>
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            placeholder="Email"
            icon={FiUser}
            value={userInfos.email}
            onChange={handleChange}
            name={"email"}
          />
          <InputField
            type="password"
            placeholder="Password"
            icon={HiOutlineLockClosed}
            value={userInfos.password}
            onChange={handleChange}
            name={"password"}
          />

          <SubmitButtonLoginRegister label="Login Now" />
          <small>
            Don&apos;t have an account?
            <Link href="/">
              <span className="login"> Sign Up</span>
            </Link>
          </small>
        </form>
        <h3 className="">Login with Others</h3>
        <div className="flex flex-col gap-2">
          <ButtonAuth2Component
            label="Google"
            icon={FcGoogle}
            handleAuth0={() => signIn("google")}
          />
          <ButtonAuth2Component
            label="Facebook"
            icon={FaFacebookSquare}
            handleAuth0={() => signIn("github")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

const LoginStyled = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
  }
  h1 {
    color: #000;
    font-family: "Poppins";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .welcome {
    color: #525252;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h3 {
    color: #1c1c1c;
    font-family: "Poppins";
    font-size: 1.2rem;
    font-style: normal;
    line-height: normal;
  }
  small {
    color: #1c1c1c;
    font-family: "Poppins";
    font-size: 0.8rem;
    font-style: normal;
    line-height: normal;
    margin-top: 10px;
    text-align: center;
  }
  .login {
    color: #0588f0;
    text-decoration: underline;
  }
`;
