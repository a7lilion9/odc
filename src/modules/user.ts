import db from "./db";

export async function getUserById(id: any) {
  return db.user.findUnique({
    where: {id},
    include: {operations: true, service: true},
  });
}

export async function getUserByUsername(username: any) {
  return db.user.findUnique({
    where: {username},
    include: {operations: true, service: true},
  });
}
