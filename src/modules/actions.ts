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
    const token = await createJWT(user);
    setToken(token);
    redirect("/home");
  } else if (await comparePasswords(rawData.password, user.password)) {
    const token = await createJWT(user);
    setToken(token);
    redirect("/home");
  } else {
    throw Error("Impossible de se connecter. Le mot de passe est incorrect.");
  }
}

export async function selectArticle(formData) {
  const rawData = {
    type: formData.get("type"),
    article: formData.get("article"),
  };
  console.log({ rawData });

  redirect("/scan");
}

export async function selectError(formData) {
  redirect("/error-confirmation");
}

export async function confirmError(formData) {
  redirect("/scan");
}
