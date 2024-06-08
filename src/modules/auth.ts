import { sign, verify } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function createJWT(user) {
  return await sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
}

// Check if password correct or not
export async function comparePasswords(password, hash) {
  return await bcrypt.compare(password, hash);
}

// Encrypt password
export async function hashPassword(password) {
  return await bcrypt.hash(password, 7);
}

export async function getUserIdFromToken() {
  const token = await getToken();
  const user: { id: string } = (await verify(
    token,
    process.env.JWT_SECRET
  )) as any;
  return user.id;
}

// Protect a route
export async function protect() {
  const token = await getToken();

  if (!token) {
    return {
      status: "error",
      message: "Username or Password is not correct",
      data: null,
    };
  }

  try {
    const user = await verify(token, process.env.JWT_SECRET);
    return { status: "success", message: "", data: user };
  } catch (e) {
    return {
      status: "error",
      message: "Username or Password is not correct",
      data: null,
    };
  }
}

// Set token on cookies
export function setToken(token) {
  cookies().set("token", token);
}

// Get token from cookies
export function getToken() {
  if (cookies().has("token")) {
    return cookies().get("token").value;
  }

  return "";
}
