"use server";

import { redirect } from "next/navigation";
import {
  comparePasswords,
  createJWT,
  getUserIdFromToken,
  setToken,
} from "./auth";
import { getUserByUsername } from "./user";
import { cookies } from "next/headers";
import db from "./db";
import { toast } from "react-toastify";

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

export async function sendOperation(code, data) {
  /**
   *    itemId
   *    userId
   *    errorId?
   *    matricule
   *    shift?
   *    ncoulee?
   *    bcoulageId?
   */

  const userId = await getUserIdFromToken();
  const user = await db.user.findFirst({
    where: { id: userId },
    include: { service: true },
  });

  let item = await db.item.findUnique({
    where: { code },
  });
  if (!item || !item.id) {
    if (data.error) {
      throw Error("item is not available, please create the item first");
    }
    item = await db.item.create({ data: { code, articleId: data.article } });
  }
  console.log(data);

  let operation;
  switch (user.service.label.toLowerCase()) {
    case "coulage":
      operation = await db.operation.create({
        data: {
          itemId: item.id,
          userId: user.id,
          error: data.error,
          matricule: data.operator,
          managerId: data.manager,
          shift: data.shift ?? null,
          ncoulee: data.ncoulee ?? null,
          bcoulageId: data.bcoulage ?? null,
        },
      });
      break;
    default:
      console.log("There is no such a service in our db");
  }

  // const itemId = item.id;
}

export async function preScanAction(formData) {
  const data = Object.fromEntries(formData.entries());
  const searchParams = new URLSearchParams(data).toString();
  console.log();

  redirect(`/scan?${searchParams}`);
}

export async function rebutCoulageAction(formData) {
  const data = Object.fromEntries(formData.entries());
  const searchParams = new URLSearchParams(data).toString();
  console.log();

  redirect(`/coulage/rebut-1?${searchParams}`);
}

export async function test() {
  console.log("hello from test");
}
