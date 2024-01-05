import Image from "next/image";
import RegisterForm from "./(components)/RegisterForm";
import { Roboto, Work_Sans } from "next/font/google";

const work = Work_Sans({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main>
      <RegisterForm />
    </main>
  );
}
