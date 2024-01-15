"use client";
import Image from "next/image";
import RegisterForm from "./(components)/(RegisterComponent)/RegisterForm";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <RegisterForm />
    </main>
  );
}
