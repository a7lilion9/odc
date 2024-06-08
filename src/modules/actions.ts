"use server";

import { redirect } from "next/navigation";
import { comparePasswords, createJWT, setToken } from "./auth";
import { getUserByUsername } from "./user";
import { cookies } from "next/headers";
import db from "./db";

export async function signin(formData) {
  const rawData = {
    username: formData.get("username").toLowerCase(),
    password: formData.get("password").toLowerCase(),
  };

  const user = await getUserByUsername(rawData.username);
  console.log({ rawData });

  if (!user) {
    redirect("/menu");
  }

  if (user.password === rawData.password) {
    const token = await createJWT(user);
    setToken(token);
    redirect("/menu");
  } else if (await comparePasswords(rawData.password, user.password)) {
    const token = await createJWT(user);
    setToken(token);
    redirect("/menu");
  } else {
    redirect("/menu");
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

export async function signout(formData) {
  cookies().delete("token");
  redirect("/");
}

export async function generateBCoulage(formData) {
  await db.bCoulage.deleteMany();

  const data = [];

  for (let i = 0; i < 2; i++) {
    for (let j = 1; j <= 25; j++) {
      if (i === 0) data.push({ label: "A" + j });
      else data.push({ label: "B" + j });
    }
  }

  await db.bCoulage.createMany({ data });
}

export async function sendOperation(code) {
  console.log("Woow from the server", code);
}
