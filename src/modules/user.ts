import db from "./db";

export async function getUserById(id) {
  return await db.user.findUnique({
    where: { id },
    include: { operations: true, service: true },
  });
}

export async function getUserByUsername(username) {
  return await db.user.findUnique({
    where: { username },
    include: { operations: true, service: true },
  });
}
