"use client";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import InputField from "../(InputFieldComponent)/InputField";
import { FiUser } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import ButtonAuth2Component from "../ButtonAuth2Component";
import SubmitButtonLoginRegister from "../SubmitButtonLoginRegister";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import styles from "./register.module.css";

type UserInfos = {
  email: string;
  password: string;
  username: string; // Champ pour le nom d'utilisateur
  // Champ pour la confirmation du mot de passe
};

const RegisterForm: FC = () => {
  const router = useRouter();
  const [userInfos, setUserInfos] = useState<UserInfos>({
    username: "",
    email: "",
    password: "",
  });

  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const refInput = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfos((infos) => ({
      ...infos,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInfos.password !== passwordConfirm) {
      setErrorPassword("Passwords do not match.");
      return;
    }
    const res = await fetch("/api/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfos),
    });
    if (!res.ok) {
      const response = await res.json();
      setErrorPassword(response.message);
      return;
    }

    // Reste de la logique de soumission
    setUserInfos({
      username: "",
      email: "",
      password: "",
    });
    setPasswordConfirm("");
    router.push("/login");
  };

  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, [refInput]);

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className={styles.form_container}>
        <h1 className={styles.h1}>REGISTER</h1>
        <p className={styles.welcome}>Welcome to our site CanoChat</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center p-2"
        >
          <InputField
            type="text"
            placeholder="Username"
            icon={FiUser}
            value={userInfos.username}
            onChange={handleChange}
            name="username"
            refInput={refInput}
          />
          <InputField
            type="email"
            placeholder="Email"
            icon={MdAlternateEmail}
            value={userInfos.email}
            onChange={handleChange}
            name="email"
          />
          <InputField
            type="password"
            placeholder="Password"
            icon={HiOutlineLockClosed}
            value={userInfos.password}
            onChange={handleChange}
            name="password"
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            icon={HiOutlineLockClosed}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            name="passwordConfirm"
          />

          <SubmitButtonLoginRegister label="Sign Up" />
          <small style={{ color: "red" }} className={styles.small}>
            {errorPassword}
          </small>
          <small className={styles.small}>
            Already have an account?
            <Link href="/login">
              <span className={styles.sign__up}> Sign In</span>
            </Link>
          </small>
        </form>

        <h3 className={styles.h3}>Continue with Others</h3>
        <div className="flex flex-col gap-2.5">
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

export default RegisterForm;
