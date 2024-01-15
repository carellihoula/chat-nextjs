import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./(components)/AuthProvider";
import { ProfileProvider } from "./(components)/(profile)/ProfileContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Providers } from "@/redux/Providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Providers>{children}</Providers>
        </body>
      </AuthProvider>
    </html>
  );
}
