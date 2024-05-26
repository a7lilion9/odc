"use server";

import { redirect } from "next/navigation";
import { comparePasswords, createJWT, setToken } from "./auth";
import { getUserByUsername } from "./user";

export async function signin(formData) {
  const rawData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const user = await getUserByUsername(rawData.username);

  if (!user) {
    throw Error(
      "Impossible de se connecter. Le nom d'utilisateur est incorrect."
    );
  }

  if (user.password === rawData.password) {
    console.log("here");
    const token = createJWT(user);
    setToken(token);
    redirect("/home");
  } else if (await comparePasswords(rawData.password, user.password)) {
    const token = createJWT(user);
    setToken(token);
    redirect("/home");
  } else {
    throw Error("Impossible de se connecter. Le mot de passe est incorrect.");
  }
}
