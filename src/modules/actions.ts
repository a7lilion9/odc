"use server";

import { createJWT } from "./auth";
import { getUserByUsername } from "./user";

export async function signin(formData) {
  const username = formData.get("username");

  const user = await getUserByUsername(username);
  console.log(await createJWT(user));
}
