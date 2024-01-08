"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
type User = {
  email?: string;
  role?: string;
};
function ChatMain() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Chargement...</div>;
  }

  if (session) {
    const { user } = session;
    //console.log(user?.id);
    console.log(session.user);
    return (
      <div>
        <p>Connecté en tant que : {user?.email}</p>
        <button className="btn btn-primary" onClick={() => signOut()}>
          Se deconnecter
        </button>
      </div>
    );
  }

  return <div>Non connecté</div>;
}

export default ChatMain;
