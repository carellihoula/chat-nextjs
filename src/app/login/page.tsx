"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi";
import bg from "../../assets/images/backgroundWhatsapp.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import InputField from "../(components)/(InputFieldComponent)/InputField";
import SubmitButtonLoginRegister from "../(components)/SubmitButtonLoginRegister";
import Link from "next/link";
import ButtonAuth2Component from "../(components)/ButtonAuth2Component";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfos((infos) => ({
      ...infos,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: userInfos.email,
      password: userInfos.password,
    });
    if (result && !result.error) {
      router.push("/ChatSpace");
    } else {
      // Gérer les erreurs de connexion, afficher un message d'erreur, etc.
      result && console.error(result.error);
    }
    setUserInfos({
      email: "",
      password: "",
    });
  };

  // JSX remains unchanged
  return (
    <div className=" flex items-center justify-center h-screen bg-slate-500">
      <div className="flex flex-col items-center bg-white justify-center rounded-lg gap-5 p-10 w-1/3">
        <h1 className={styles.h1}>LOGIN</h1>
        <p className={styles.welcome}>Welcome to our site CanoChat</p>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <small className={styles.small}>
            Don&apos;t have an account?
            <Link href="/">
              <span className={styles.login}> Sign Up</span>
            </Link>
          </small>
        </form>
        <h3 className="h3 ">Login with Others</h3>
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
            color={"blue"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
